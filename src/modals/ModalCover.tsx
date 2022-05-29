import React, { Children } from "react";
import { createPortal } from "react-dom";

// MODAL ROOT SELECTION
const modalRoot = document.getElementById("modal-root") as HTMLElement;

interface modalCoverProps {
  children: React.ReactElement[];
  showModal: boolean;
  toggleModal: () => void;
}

interface modalCoverSlotProps {
  name: "header" | "body" | "footer";
  children: any;
}

const Slot = (_: modalCoverSlotProps): any => {};

const ModalCover = ({ children, showModal, toggleModal }: modalCoverProps) => {
  const modalElement = document.createElement("div") as HTMLElement;

  // ********MODAL SECTION SETUP************ //
  const sections = Children.toArray(
    children
  ) as unknown as React.ReactElement[];

  const hSlot = sections.find((child) => child?.props?.name === "header");
  const bSlot = sections.find((child) => child?.props?.name === "body");
  const fSlot = sections.find((child) => child?.props?.name === "footer");
  // ********MODAL SECTION SETUP************ //

  React.useEffect(() => {
    modalRoot.appendChild(modalElement);
    return () => {
      modalRoot.removeChild(modalElement);
    };
  }, [modalElement]);

  // HIDE MODAL COVER COMPONENT WHEN SHOW MODAL IS FALSE
  if (!showModal) return null;

  return createPortal(
    <>
      {/* MODAL OVERLAY COMPONENT */}
      <div
        className="modal-overlay modal-cover-overlay smooth-transition"
        role="dialog"
        aria-modal
        onClick={toggleModal}
      ></div>

      {/* MODAL COVER COMPONENT */}

      <div className="modal-cover rounded-10 modal-mini box-shadow-effect smooth-transition">
        <div className="modal-cover-body-wrapper">
          {/* DISMISS DIALOG  */}
          <div className="dialog-dismiss pointer" onClick={toggleModal}>
            <div className="position-relative w-100 h-100">
              <div className="icon icon-close color-ash f-size-15"></div>
            </div>
          </div>

          {/* MODAL CONTAINER */}
          <div className="modal-cover-container color-white-bg">
            {/* MODAL HEADER */}
            {hSlot?.props?.children}

            {/* MODAL BODY */}
            {bSlot?.props?.children}

            {/* MODAL FOOTER */}
            {fSlot?.props?.children}
          </div>
        </div>
      </div>
    </>,
    modalRoot
  );
};

ModalCover.Slot = Slot;
export default ModalCover;
