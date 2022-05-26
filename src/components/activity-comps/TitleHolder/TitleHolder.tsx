import React from "react";
import { useActivePageType } from "hooks";

import "./TitleHolder.scss";

const TitleHolder = () => {
  const activePageType = useActivePageType(undefined);

  return (
    <div className="title-holder">
      <div className="left-wrapper">
        <div className="title fw-600 color-black">Today Activities</div>
        <div className="meta color-grey">
          View all activities going on today across projects
        </div>
      </div>

      {["todos", "notes"].includes(activePageType) && (
        <button className="btn btn-green btn-wrapper">
          <div className="icon icon-plus"></div>
          <div>{activePageType}</div>
        </button>
      )}
    </div>
  );
};

export default TitleHolder;
