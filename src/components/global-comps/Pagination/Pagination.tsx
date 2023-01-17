import React from "react";
import { paginationTypes } from "types";
import { $serviceUtils as $utils } from "services";

import "./Pagination.scss";

interface IPagingTypes {
  paging: paginationTypes;
}

const Pagination = ({ paging: { pages, page } }: IPagingTypes) => {
  const [currentPage, setCurrentPage] = React.useState<number>(page);
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const [disablePrev, setDisablePrev] = React.useState<boolean>(true);
  const [disableNext, setDisableNext] = React.useState<boolean>(false);

  const navigateToPage = (current: number = currentPage) => {
    setCurrentPage(current);
    $utils.emitter.emit("updatePage", current);
  };

  /* Checking if the current page is greater than the total pages. If it is, it will disable the button. */
  React.useEffect(() => {
    currentPage > pages ? setIsDisabled(true) : setIsDisabled(false);
  }, [currentPage, setCurrentPage, pages]);

  React.useEffect(() => {
    currentPage === 1 ? setDisablePrev(true) : setDisablePrev(false);
  }, [currentPage, setDisablePrev]);

  React.useEffect(() => {
    currentPage === pages ? setDisableNext(true) : setDisableNext(false);
  }, [currentPage, pages, setDisableNext]);

  return (
    <div className="pagination-row smooth-transition mgt-30">
      <div className="left"></div>

      <div className="right mgb-5">
        <div
          className={`nav ${disablePrev && "disabled"}`}
          onClick={() => navigateToPage(currentPage - 1)}
        >
          <div className="icon icon-chevron-down rotate-90"></div>
          <div className="nav-text mgl-3 pdr-4">Prev</div>
        </div>

        {/* PAGING */}
        <div className="paging">
          <input
            type="text"
            onChange={(e) => setCurrentPage(+e?.target?.value)}
            className="form-control page-input text-center mgr-7"
            value={currentPage}
          />
          <div className="page-slash">/</div>
          <div className="page-total mgl-5 mgr-4">{pages}</div>
          <button
            className="btn btn-green mgl-4 page-btn"
            onClick={() => navigateToPage()}
            disabled={isDisabled}
          >
            Go
          </button>
        </div>

        <div
          className={`nav ${disableNext && "disabled"}`}
          onClick={() => navigateToPage(currentPage + 1)}
        >
          <div className="nav-text mgr-3 pdl-5">Next</div>
          <div className="icon icon-chevron-down rotate--90"></div>
        </div>

        {/* ERROR TEXT  */}
        {false && (
          <div className="error-text smooth-transition">
            The page number entered does not exist
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
