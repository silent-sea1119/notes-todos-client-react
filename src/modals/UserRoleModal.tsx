import React from "react";
import { useAppDispatch } from "hooks/storeHook";
import { useBtnClick } from "hooks";
import {
  updateUserRole,
  changeUserRole,
} from "store/generalSlice/sliceGetters";
import { ModalCover } from "modals";
import { modalTypes } from "types";

interface UserModalProps extends modalTypes {
  data?: any;
}

const UserRoleModal = ({ data, showModal, toggleModal }: UserModalProps) => {
  const dispatch = useAppDispatch();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const handleClick = useBtnClick(btnRef.current);

  const [id, setId] = React.useState<string>("");
  const [role, setRole] = React.useState<string>("");

  React.useEffect(() => {
    if (data?.id) {
      setId(data?.id);
      setRole(data?.role);
    }
  }, [data]);

  const updateRole = async () => {
    handleClick("Please wait...");

    try {
      let response = await dispatch(updateUserRole({ id, role })).unwrap();

      if (response.code === 200) {
        handleClick("Edit Role", false);
        dispatch(changeUserRole(response.data));
        setTimeout(() => toggleModal(), 1200);
      } else {
        handleClick("Project Failed", false);
        setTimeout(() => handleClick("Edit Role", false), 1200);
      }
    } catch (err) {
      handleClick("Edit Role", false);
      console.log(err);
    }
  };

  return (
    <ModalCover showModal={showModal} toggleModal={toggleModal}>
      {/* MODAL HEADER */}
      <ModalCover.Slot name="header">
        <div className="modal-cover-header">
          <div className="modal-cover-title">EDIT USER ROLE</div>
        </div>
      </ModalCover.Slot>

      {/* MODAL BODY */}
      <ModalCover.Slot name="body">
        <div className="modal-cover-body pt-0">
          {/* USER ROLE */}
          <div className="mgb-14">
            <label htmlFor="projectTitle" className="control-label">
              User Role
            </label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="form-control"
            >
              <option disabled value="">
                Select user role
              </option>
              <option value="admin">Admin</option>
              <option value="regular">Regular</option>
            </select>
          </div>
        </div>
      </ModalCover.Slot>

      {/* MODAL FOOTER */}
      <ModalCover.Slot name="footer">
        <div className="modal-cover-footer pt-0 mgb-5">
          <button
            className="btn btn-green w-100 pdy-13"
            onClick={updateRole}
            ref={btnRef}
          >
            Edit Role
          </button>
        </div>
      </ModalCover.Slot>
    </ModalCover>
  );
};

export default UserRoleModal;
