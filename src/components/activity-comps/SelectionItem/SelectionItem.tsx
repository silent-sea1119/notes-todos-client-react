import React from "react";
import { selectionTypes } from "types";
import "./SelectionItem.scss";

const SelectionItem = ({
  title,
  counter,
  isActive,
  setActive,
}: selectionTypes) => {
  return (
    <div
      className={`selection-item pointer ${
        isActive && "selection-item-active"
      }`}
      onClick={() => setActive(title)}
    >
      <div className="selection-counter rounded-circle mgr-10">
        <div className="count color-black place-center">{counter}</div>
      </div>
      <div className="selection-text">{title}</div>
    </div>
  );
};

export default SelectionItem;
