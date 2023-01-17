import React from "react";
import { Pagination, TableSkeleton, EmptyState } from "components";
import { paginationTypes } from "types";

import "./TableContainer.scss";

interface ITableContainer {
  children: React.ReactElement;
  pagination: paginationTypes;
  loading: boolean;
  empty: boolean;
}

const TableContainer = ({
  children,
  pagination,
  loading,
  empty,
}: ITableContainer) => {
  return (
    <div className="table-container">
      {children}

      {loading && <TableSkeleton />}
      {empty && <EmptyState />}

      { pagination.pages>1 && <Pagination paging={pagination} />}
    </div>
  );
};

export default TableContainer;
