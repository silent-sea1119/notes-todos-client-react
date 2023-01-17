import React from "react";
import { useToggle } from "hooks";
import { ProjectCreateModal } from "modals";
import "./LinkCard.scss";

interface ILinkCard {
  title: string;
}

const LinkCard = ({ title }: ILinkCard) => {
  const [isProjectOpen, setIsProjectOpen] = useToggle();

  return (
    <>
      <div className="link-card pointer" onClick={setIsProjectOpen}>
        <div className="top fw-600 color-black mgb-10">{title}</div>
        <div className="bottom color-grey">
          Create Now <span className="icon icon-arrow-right"></span>
        </div>
      </div>

      {/* MODALS */}
      <ProjectCreateModal
        showModal={isProjectOpen}
        toggleModal={setIsProjectOpen}
      />
    </>
  );
};

export default LinkCard;
