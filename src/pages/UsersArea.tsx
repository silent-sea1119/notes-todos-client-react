import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { SearchEntry, TableContainer, UserTableRow } from "components";
import { useAppDispatch, useAppSelector } from "hooks/storeHook";
import { fetchAllUsers, getGeneral } from "store/generalSlice/sliceGetters";
import { $serviceUtils as $utils } from "services";
import { paginationTypes } from "types";

const UserArea = () => {
  const dispatch = useAppDispatch();
  const { users: userData } = useAppSelector(getGeneral);
  const paging = { pages: 1, page: 1 };

  const [loading, setLoading] = React.useState<boolean>(true);
  const [empty, setEmpty] = React.useState<boolean>(false);
  const [users, setUsers] = React.useState<object[]>([]);
  const [pagination, setPagination] = React.useState<paginationTypes>(paging);
  const [page, setPage] = React.useState<number>(1);
  const [search, setSearch] = React.useState<string>("");

  React.useEffect(() => {
    setLoading(userData.loading);
    setEmpty(userData.empty);
    setUsers(userData.data);
    setPagination(userData.pagination);
  }, [userData]);

  /* This is a React hook that is called when the component is mounted. It is also called when the page
  state changes. */
  React.useEffect(() => {
    dispatch(fetchAllUsers({ page, search })).unwrap();

    $utils.emitter.once("updatePage", (page: number): void => setPage(page));
    $utils.emitter.addListener("searchValue", (search: string): void =>
      setSearch(search)
    );
  }, [dispatch, page, search]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Nothy | User Area</title>
      </Helmet>

      <div className="full-width-page">
        <SearchEntry type="user" show_create_btn={false} />

        {/* TABLE CONTAINER */}
        <TableContainer pagination={pagination} loading={loading} empty={empty}>
          <div className="table-wrapper">
            <table className="table user-table">
              <thead>
                <tr>
                  <th className="user-one">Created At</th>
                  <th className="user-two">Profile</th>
                  <th className="user-three">Role</th>
                  <th className="user-four">Projects</th>
                  <th className="user-five">Notes</th>
                  <th className="user-six">Todos</th>
                  <th className="user-seven"></th>
                </tr>
              </thead>

              <tbody>
                {users?.map((user, index) => (
                  <UserTableRow user={user} key={index} />
                ))}
              </tbody>
            </table>
          </div>
        </TableContainer>
      </div>
    </HelmetProvider>
  );
};

export default UserArea;
