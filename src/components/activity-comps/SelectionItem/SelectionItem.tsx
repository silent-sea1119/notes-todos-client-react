import React from "react";
import { selectionTypes } from "types";
import "./SelectionItem.scss";

const SelectionItem = ({ title, isActive, setActive }: selectionTypes) => {
  return (
    <div
      className={`selection-item pointer ${
        isActive && "selection-item-active"
      }`}
      onClick={() => setActive(title)}
    >
      <div className="selection-text">{title}</div>
    </div>
  );
};

export default SelectionItem;
