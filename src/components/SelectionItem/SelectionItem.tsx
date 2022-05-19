import React from "react";
import "./SelectionItem.scss";

type SelectionItemTypes = {
  count: number;
  text: string;
  active: boolean;
  setActive: (value: string) => void;
};

const SelectionItem = ({
  count,
  text,
  active,
  setActive,
}: SelectionItemTypes) => {
  return (
    <div
      className={`selection-item pointer ${active && "selection-item-active"}`}
      onClick={() => setActive(text.toLowerCase())}
    >
      <div className="selection-counter position-relative rounded-circle mgr-10">
        <div className="count brand-black place-center f-size-11">{count}</div>
      </div>
      <div className="selection-text smooth-transition">{text}</div>
    </div>
  );
};

SelectionItem.defaultProps = {
  count: 0,
  text: "Todos",
  boolean: false,
};

export default SelectionItem;
