import React from "react";
import { useAuth, useInitials, useToggle, useBtnClick } from "hooks";
import { useAppDispatch } from "hooks/storeHook";
import { fetchSingleUser } from "store/generalSlice/sliceGetters";
import { updateUserProfile, updateProfile } from "store/authSlice/sliceGetters";
import { CropModal } from "modals";

import "./ProfileBar.scss";

interface IProfileBar {
  toggleProfile: boolean;
  closeToggle: () => void;
}

const ProfileBar = ({ toggleProfile, closeToggle }: IProfileBar) => {
  const dispatch = useAppDispatch();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const handleClick = useBtnClick(btnRef.current);

  const authUser = useAuth();
  const [nameInitial, setNameInitial] = useInitials();
  const [isCropOpen, setIsCropOpen] = useToggle();

  const [fullName, setFullName] = React.useState<string>(authUser.fullname);
  const [projectCount, setProjectCount] = React.useState<number>(0);
  const [noteCount, setNoteCount] = React.useState<number>(0);
  const [todoCount, setTodoCount] = React.useState<number>(0);
  const [image, setImage] = React.useState<string>();
  const [croppedImg, setCroppedImg] = React.useState<any>();

  /* A callback function that is used to fetch the user's activity count. */
  const getUserActivityCount = React.useCallback(async () => {
    try {
      let response = await dispatch(fetchSingleUser(null)).unwrap();

      if (response.code === 200) {
        setFullName(`${response.data.firstName} ${response.data.lastName}`);
        setProjectCount(response.data.projects);
        setNoteCount(response.data.notes);
        setTodoCount(response.data.todos);
      }
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  /**
   * It triggers the crop modal.
   * @param {any} e - any - this is the event that is triggered when the user selects an image.
   */
  const triggerCropModal = (e: any) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    e.target.value = null;
    setIsCropOpen();
  };

  const updateMyProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleClick("Please wait...");

    try {
      let response = await dispatch(
        updateUserProfile({ fullName, image: croppedImg })
      ).unwrap();

      if (response.code === 200) {
        dispatch(updateProfile(response.data));
        setTimeout(() => handleClick("Update Profile"), 2000);
      } else {
        handleClick("Update failed");
        setTimeout(() => handleClick("Update Profile"), 2000);
      }
    } catch (err) {
      console.log(err);
      handleClick("Update failed");
      setTimeout(() => handleClick("Update Profile"), 3000);
    }
  };

  /**
   * It closes the profile bar and clears the cropped image
   */
  const closeProfileBar = () => {
    setCroppedImg(null);
    closeToggle();
  };

  React.useEffect(
    () => setNameInitial(authUser.fullname),
    [authUser, setNameInitial]
  );

  React.useEffect(() => {
    getUserActivityCount();
  }, [getUserActivityCount]);

  return (
    <>
      <div
        className={`profile-wrapper index-1 ${toggleProfile && "show-profile"}`}
      >
        {/* PROFILE OVERLAY */}
        <div className="profile-overlay" onClick={closeProfileBar}></div>

        {/* PROFILE BAR */}
        <div className="profile-bar">
          {/* CLOSE TRIGGER */}
          <div
            className="close-trigger pointer rounded-10"
            title="Close"
            onClick={closeProfileBar}
          >
            <div className="position-absolute w-100 h-100">
              <div className="icon-close color-white place-center"></div>
            </div>
          </div>

          {/* PROFILE PHOTO */}
          <div className="profile-photo overflow-hidden rounded-circle">
            <div className="profile-text place-center color-white">
              {nameInitial}
            </div>

            {croppedImg || authUser?.picture?.url ? (
              <img
                src={croppedImg || authUser?.picture?.url}
                className="avatar-img"
                alt={authUser.fullname}
              />
            ) : (
              <div className="profile-text place-center color-white">
                {nameInitial}
              </div>
            )}
          </div>

          {/* PROFILE NAME */}
          <div className="profile-name mgt-20 fw-600 color-black">
            {authUser.fullname}
          </div>

          <div className="profile-email color-ash">{authUser.email}</div>

          {/* ACTIVITIES */}
          <div className="activities mgt-20">
            <div className="activity">
              <div className="title">Projects created:</div>
              <div className="value">{projectCount}</div>
            </div>

            <div className="activity">
              <div className="title">Total notes taken:</div>
              <div className="value">{noteCount}</div>
            </div>

            <div className="activity">
              <div className="title">Total todos logged:</div>
              <div className="value">{todoCount}</div>
            </div>
          </div>

          <form
            action=""
            onSubmit={updateMyProfile}
            className="form-area mgt-40 w-100"
          >
            <div className="title-text color-black fw-600 mgb-15 text-center">
              Update Basic Info
            </div>

            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="form-control w-100 text-center mgb-15"
              placeholder="Enter Fullname"
            />

            <input
              type="file"
              accept=".jpg, .png, .jpeg"
              onChange={(e) => triggerCropModal(e)}
              className="form-control w-100 text-center mgb-20"
            />

            <button
              type="submit"
              className="btn btn-green w-100 pdy-14"
              ref={btnRef}
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>

      {/* MODALS */}
      <CropModal
        showModal={isCropOpen}
        toggleModal={setIsCropOpen}
        photoUrl={image}
        setCroppedImg={setCroppedImg}
      />
    </>
  );
};

export default ProfileBar;
