import React from "react";
import { useSearchParams } from "react-router-dom";
import { useActivePageType } from "hooks";
// import { useAppSelector } from "hooks/storeHook";
// import { getNote } from "store/noteSlice/sliceGetters";
import { SelectionItem } from "components";
import { CATEGORY_ONE, CATEGORY_TWO } from "constant";

import "./SelectionRow.scss";

const SelectionRow = () => {
  // const { notes: NoteData } = useAppSelector(getNote);

  const [todoSelection] = React.useState({
    title: CATEGORY_ONE,
    isActive: true,
    setActive: () => {},
  });

  const [noteSelection] = React.useState({
    title: CATEGORY_TWO,
    isActive: false,
    setActive: () => {},
  });

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
      <SelectionItem
        title={todoSelection.title}
        isActive={pageType === todoSelection.title}
        setActive={setActive}
      />

      <SelectionItem
        title={noteSelection.title}
        isActive={pageType === noteSelection.title}
        setActive={setActive}
      />
    </div>
  );
};

export default SelectionRow;
