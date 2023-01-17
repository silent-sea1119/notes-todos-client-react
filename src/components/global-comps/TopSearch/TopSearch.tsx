import React from "react";
import { useParams } from "react-router-dom";
import { useDebounce } from "hooks";
import { useAppDispatch } from "hooks/storeHook";
import { fetchNote } from "store/noteSlice/sliceGetters";
import "./TopSearch.scss";

const TopSearch = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const [searchValue, setSearchValue] = React.useState<string>("");
  const debouncedValue = useDebounce(searchValue, 1500);

  const emitSearchValue = React.useCallback(() => {
    dispatch(fetchNote({ id: params.project_id, search: searchValue }));
  }, [dispatch, searchValue, params.project_id]);

  React.useEffect(() => {
    emitSearchValue();
  }, [debouncedValue, emitSearchValue]);

  return (
    <div className="app-filter position-relative">
      <input
        type="text"
        className="form-control rounded-7"
        placeholder="Search"
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <div className="icon icon-search brand-grey f-size-18 index-1"></div>
    </div>
  );
};

export default TopSearch;
