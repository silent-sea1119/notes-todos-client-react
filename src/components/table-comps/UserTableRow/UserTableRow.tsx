import React from "react";
import { IUserTypes } from "types/UserTypes";
import { useInitials, useToggle, useClickOutside } from "hooks";
import { format } from "date-fns";
import { UserRoleModal, DeleteModal } from "modals";

interface IUser {
  user: IUserTypes;
}

const UserTableRow = ({ user }: IUser) => {
  const dropdownRef = React.useRef<any>();
  useClickOutside(dropdownRef, () => setShowDropdown(!showDropdown));

  const [showDropdown, setShowDropdown] = React.useState<boolean>(false);
  const [nameInitial, setNameInitial] = useInitials();

  const [isUserRoleOpen, setIsUserRoleOpen] = useToggle();
  const [isDeleteOpen, setDeleteOpen] = useToggle();

  React.useEffect(
    () => setNameInitial(`${user?.firstName} ${user?.lastName}`),
    [setNameInitial, user?.firstName, user?.lastName]
  );

  return (
    <>
      <tr>
        <td className="project-one">
          {format(new Date(user?.createdAt), "do MMM, yyyy")}
        </td>
        <td className="project-two">
          <div className="user-info">
            <div className="user-image rounded-circle mgr-10 color-green-bg">
              <div className="text color-white">{nameInitial}</div>

              {user?.picture?.url ? (
                <img
                  src={user?.picture?.url}
                  className="avatar-img"
                  alt={user?.firstName}
                />
              ) : (
                <div className="text color-white">{nameInitial}</div>
              )}
            </div>

            <div>
              <div className="name fw-600 color-black">
                {user?.firstName + " " + user?.lastName}
              </div>
              <div className="email color-grey">{user?.email}</div>
            </div>
          </div>
        </td>
        <td className="project-three text-capitalize">{user?.role}</td>
        <td className="project-four">{user?.projects}</td>
        <td className="project-five">{user?.notes}</td>
        <td className="project-six">{user?.todos}</td>
        <td className="project-seven">
          <span
            className="icon-more icon-ellipsis"
            tabIndex={0}
            // onBlur={() => setShowDropdown(!showDropdown)}
            onClick={() => setShowDropdown(!showDropdown)}
          ></span>

          {/* TABLE OPTION */}
          {showDropdown && (
            <div className="table-dropdown smooth-animation" ref={dropdownRef}>
              <div className="item mgt-4" onClick={setIsUserRoleOpen}>
                <div className="icon icon-add-file"></div>
                <div className="value-text">Edit Role</div>
              </div>

              <div className="item mgb-4" onClick={setDeleteOpen}>
                <div className="icon icon-trash"></div>
                <div className="value-text">Delete</div>
              </div>
            </div>
          )}
        </td>
      </tr>

      {/* MODALS */}
      <UserRoleModal
        data={user}
        showModal={isUserRoleOpen}
        toggleModal={setIsUserRoleOpen}
      />

      <DeleteModal
        showModal={isDeleteOpen}
        toggleModal={setDeleteOpen}
        title="User"
        id={user.id}
      />
    </>
  );
};

export default UserTableRow;
