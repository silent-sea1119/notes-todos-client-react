import React from "react";
import { useSearchParams } from "react-router-dom";
import { selectionTypes } from "types";
import { selectionData } from "mock-data";
import { useActivePageType } from "hooks";
import { SelectionItem } from "components";

import "./SelectionRow.scss";

const SelectionRow = () => {
  const [selectons] = React.useState<selectionTypes[]>(selectionData);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageType = useActivePageType(undefined);

  // SET ACTIVE SEARCH PARAM
  const setActive = React.useCallback(
    (type: string): void => {
      searchParams.set("type", type);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  return (
    <div className="selection-row mgb-30">
      {selectons.map((selection) => (
        <SelectionItem
          key={selection.title}
          title={selection.title}
          counter={selection.counter}
          isActive={pageType === selection.title}
          setActive={setActive}
        />
      ))}
    </div>
  );
};

export default SelectionRow;
