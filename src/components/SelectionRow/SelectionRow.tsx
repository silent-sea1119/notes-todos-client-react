import React from "react";
import { useSearchParams } from "react-router-dom";
import { SelectionItem } from "components";

import "./SelectionRow.scss";

type SelectionRowTypes = {};

const SelectionRow = (props: SelectionRowTypes) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getActive = React.useCallback(
    (type: string): boolean =>
      searchParams.get("type") === type ? true : false,
    [searchParams]
  );

  const setActive = React.useCallback(
    (type: string): void => {
      searchParams.set("type", type);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  return (
    <div className="selection-row mgb-30">
      <SelectionItem
        count={8}
        text="Todos"
        active={getActive("todos")}
        setActive={setActive}
      />
      <SelectionItem
        count={12}
        text="Notes"
        active={getActive("notes")}
        setActive={setActive}
      />
    </div>
  );
};

export default SelectionRow;
