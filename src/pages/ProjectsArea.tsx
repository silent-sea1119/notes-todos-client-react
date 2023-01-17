import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { SearchEntry, TableContainer, ProjectTableRow } from "components";
import { useAppDispatch, useAppSelector } from "hooks/storeHook";
import { fetchMyProjects, getProjects } from "store/projectSlice/sliceGetters";
import { $serviceUtils as $utils } from "services";
import { paginationTypes } from "types";

const ProjectsArea = () => {
  const dispatch = useAppDispatch();
  const { projects: projectData } = useAppSelector(getProjects);
  const paging = { pages: 1, page: 1 };

  const [loading, setLoading] = React.useState<boolean>(true);
  const [empty, setEmpty] = React.useState<boolean>(false);
  const [projects, setProjects] = React.useState<object[]>([]);
  const [pagination, setPagination] = React.useState<paginationTypes>(paging);
  const [page, setPage] = React.useState<number>(1);
  const [search, setSearch] = React.useState<string>("");

  React.useEffect(() => {
    setLoading(projectData.loading);
    setEmpty(projectData.empty);
    setProjects(projectData.data);
    setPagination(projectData.pagination);
  }, [projectData]);

  /* This is a React hook that is called when the component is mounted. It is also called when the page
  state changes. */
  React.useEffect(() => {
    dispatch(fetchMyProjects({ page, search })).unwrap();

    $utils.emitter.once("updatePage", (page: number): void => setPage(page));
    $utils.emitter.addListener("searchValue", (search: string): void =>
      setSearch(search)
    );
  }, [dispatch, page, search]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Nothy | Project Area</title>
      </Helmet>

      <div className="full-width-page">
        <SearchEntry type="project" />

        {/* TABLE CONTAINER */}
        <TableContainer pagination={pagination} loading={loading} empty={empty}>
          <div className="table-wrapper">
            <table className="table project-table">
              <thead>
                <tr>
                  <th className="project-one">Title</th>
                  <th className="project-two">Description</th>
                  <th className="project-three">Created At</th>
                  <th className="project-four">Notes</th>
                  <th className="project-four">Todos</th>
                  <th className="project-six"></th>
                </tr>
              </thead>

              <tbody>
                {projects?.map((project, index) => (
                  <ProjectTableRow project={project} key={index} />
                ))}
              </tbody>
            </table>
          </div>
        </TableContainer>
      </div>
    </HelmetProvider>
  );
};

export default ProjectsArea;
