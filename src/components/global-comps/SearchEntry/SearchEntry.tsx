import React from "react";
import { useToggle, useDebounce } from "hooks";
import { ProjectCreateModal } from "modals";
import { $serviceUtils as $utils } from "services";

import "./SearchEntry.scss";

interface ISearchEntry {
  show_create_btn: boolean;
  type: string;
}

const SearchEntry = ({ show_create_btn }: ISearchEntry) => {
  const [isProjectOpen, setIsProjectOpen] = useToggle();
  const [searchValue, setSearchValue] = React.useState<string>("");
  const debouncedValue = useDebounce(searchValue, 1500);

  //@ts-ignore
  const emitSearchValue = React.useCallback(() => {
    $utils.emitter.emit("searchValue", searchValue ?? "");
  }, [searchValue]);

  React.useEffect(() => {
    emitSearchValue();
  }, [debouncedValue, emitSearchValue]);

  return (
    <>
      <div className="search-entry">
        {/* SEARCH COLUMN */}
        <div className="search-column position-relative">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div className="icon icon-search light-dark-text index-1"></div>
        </div>

        {/* CREATE COLUMN */}
        {show_create_btn && (
          <div className="create-column">
            <div className="btn btn-md btn-green" onClick={setIsProjectOpen}>
              <div className="mgr-4">Create Project</div>
            </div>
          </div>
        )}
      </div>

      {/* MODALS */}
      <ProjectCreateModal
        showModal={isProjectOpen}
        toggleModal={setIsProjectOpen}
      />
    </>
  );
};

SearchEntry.defaultProps = {
  show_create_btn: true,
};

export default SearchEntry;
