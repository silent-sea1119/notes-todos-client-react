import React from "react";
import { ModalCover } from "modals";
import { modalTypes } from "types";
import Cropper from "react-easy-crop";
import { Point, Area } from "react-easy-crop/types";
import getCroppedImg from "services/cropper";

interface ICropModalType extends modalTypes {
  photoUrl?: string;
  setCroppedImg?: any;
}

const CropModal = ({
  showModal,
  toggleModal,
  photoUrl,
  setCroppedImg,
}: ICropModalType) => {
  const [crop, setCrop] = React.useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState<number>(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = React.useState(null);

  const onCropComplete = React.useCallback(
    (croppedArea: Area, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const cropImage = async () => {
    try {
      //@ts-ignore
      const croppedImg = await getCroppedImg(photoUrl, croppedAreaPixels);
      setCroppedImg(croppedImg);
      toggleModal();
      //   const imageURL = await urltoFile(croppedImg);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ModalCover showModal={showModal} toggleModal={toggleModal}>
      {/* MODAL HEADER */}
      <ModalCover.Slot name="header">
        <div className="modal-cover-header">
          <div className="modal-cover-title text-uppercase">
            Crop Profile photo
          </div>
        </div>
      </ModalCover.Slot>

      {/* MODAL BODY */}
      <ModalCover.Slot name="body">
        <div className="modal-cover-body pt-0 mgb-8">
          <div style={{ position: "relative", height: "40vh" }}>
            <Cropper
              image={photoUrl}
              crop={crop}
              zoom={zoom}
              aspect={1}
              cropShape="round"
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
        </div>
      </ModalCover.Slot>

      {/* MODAL FOOTER */}
      <ModalCover.Slot name="footer">
        <div className="modal-cover-footer pt-0 mgb-5">
          <button className="btn btn-green w-100 pdy-13" onClick={cropImage}>
            Crop Photo
          </button>
        </div>
      </ModalCover.Slot>
    </ModalCover>
  );
};

export default CropModal;
