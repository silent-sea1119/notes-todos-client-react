import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useAppDispatch } from "hooks/storeHook";
import { fetchDashboardSummary } from "store/generalSlice/sliceGetters";
import { OverviewCard, OverviewBlock, LinkCard } from "components";
import "./DashboardArea.scss";

interface IDashboardType {
  title?: string;
  total?: number;
}

const DashboardArea = () => {
  const dispatch = useAppDispatch();

  const [overview, setOverview] = React.useState<{
    projects: number;
    notes: number;
    todos: number;
  }>({
    projects: 0,
    notes: 0,
    todos: 0,
  });
  const [projects, setProjects] = React.useState<
    Pick<IDashboardType, "title" | "total">[]
  >([]);
  const [todos, setTodos] = React.useState<
    Pick<IDashboardType, "title" | "total">[]
  >([]);

  const getDashboardDetails = React.useCallback(async () => {
    try {
      let result = await dispatch(fetchDashboardSummary()).unwrap();
      if (result.code === 200) {
        setOverview(result.data.user);
        setProjects(result.data.projects);
        setTodos(result.data.todos);
      }
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  React.useEffect(() => {
    getDashboardDetails();
  }, [getDashboardDetails]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Nothy | Dashboard Area</title>
      </Helmet>

      <div className="dashboard-area">
        {/* OVERVIEW AREA */}
        <div className="overview-area mgt-20 mgb-35">
          <OverviewCard
            title="Total created projects"
            value={overview.projects}
            icon="business"
          />
          <OverviewCard
            title="Total todo created"
            value={overview.todos}
            icon="notes"
          />

          <OverviewCard
            title="Total notes taken"
            value={overview.notes}
            icon="assignment"
          />
        </div>

        {/* PROJECT AND TODO OVERVIEW */}
        <div className="project-todo-overview mgb-35">
          {/* LEFT BLOCK */}
          <OverviewBlock title="Projects Overview" payload={projects} />

          {/* RIGHT BLOCK */}
          <OverviewBlock title="Todo Performance" payload={todos} />
        </div>

        {/* QUICK LINKS */}
        <div className="quick-links-area rounded-5">
          <div className="title-row color-black fw-600 mgb-25">Quick Link</div>

          <div className="link-wrapper">
            <LinkCard title="New Project" />
            {/* <LinkCard title="Todo Backlog" />
          <LinkCard title="Take Note" /> */}
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default DashboardArea;
