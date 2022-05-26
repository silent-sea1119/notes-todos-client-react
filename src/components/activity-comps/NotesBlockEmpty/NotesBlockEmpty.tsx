import React from "react";

import "./NotesBlockEmpty.scss";

const NotesBlockEmpty = () => {
  const emptyStateImg = require("assets/OpenBox.png");

  return (
    <div className="notes-block-empty w-100 rounded-5">
      <img src={emptyStateImg} alt="emptyNote" className="mgb-15" />

      <div className="title-text fw-600 color-green text-center mgb-10">
        No Note Created
      </div>

      <div className="text-description mgb-20">
        You dont't have any note created at the moment. <br /> To fix this,
        create a simple note today!
      </div>

      <button className="btn btn-green">Create Note</button>
    </div>
  );
};

export default NotesBlockEmpty;
