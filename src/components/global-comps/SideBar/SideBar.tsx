import React from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "hooks/storeHook";
import { useAuth } from "hooks";
import { fetchMyProjects } from "store/projectSlice/sliceGetters";
import { SideNavItem, SideNewProject } from "components";
import { $serviceUtils as $utils } from "services";

import "./SideBar.scss";

const SideBar = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const authUser = useAuth();

  const [toggle, setToggle] = React.useState<boolean>(false);
  const [projects, setProjects] = React.useState<any>([]);

  /* A callback function that is used to fetch projects from the database. */
  const fetchProjects = React.useCallback(async () => {
    let result = await dispatch(fetchMyProjects({ page: 1 })).unwrap();
    setProjects(result.data);
  }, [dispatch]);

  const hideSidebar = (evt: any): void => {
    if (evt.target.classList.contains("sidebar-build-cover")) setToggle(false);
  };

  React.useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  React.useEffect(() => {
    if (window.innerWidth <= 768) setToggle(false);
  }, [location]);

  /* Listening for the event "showSidebar" and "hideSidebar"  */
  React.useEffect(() => {
    $utils.emitter.addListener("showSidebar", () => setToggle(true));
    $utils.emitter.addListener("hideSidebar", () => setToggle(false));
    $utils.emitter.addListener("loadProjectSidebar", () => fetchProjects());
  }, [fetchProjects]);

  return (
    <div
      className={`sidebar-build-cover ${toggle && "toggle-sidebar"}`}
      onClick={hideSidebar}
    >
      <div className="sidebar-build h-100">
        {/* BRAND NAME SECTION */}
        <div className="brand-row">
          <div className="wrapper">
            <div className="brand-icon icon-nothy-app color-ash-white"></div>
            <h2 className="brand-name color-white fw-600">Nothy</h2>
          </div>
        </div>
        {/* NAV ITEMS AREA */}
        <div className="nav-item-area w-100">
          <div className="nav-category fw-600">Main Menu</div>

          <SideNavItem
            title="Dashboard"
            icon="app f-size-19-5"
            link="/dashboard"
          />

          <SideNavItem title="Projects" icon="notes" link="/my-projects" />

          {authUser.role === "admin" && (
            <SideNavItem
              title="Users"
              icon="group-users fw-700 f-size-19"
              link="/users"
            />
          )}
        </div>
        {/* PROJECT ITEMS AREA */}
        <div className="nav-item-area w-100">
          <>
            <div className="nav-category fw-600">Projects</div>

            {projects?.map((project: any, index: any) => {
              return (
                <SideNavItem
                  title={project.title}
                  icon="assignment"
                  key={index}
                  link={`/project/${project.id}?title=${project.title}`}
                />
              );
            })}
          </>
        </div>
        {/* CREATE PROJECT */}
        <SideNewProject />
      </div>
    </div>
  );
};

export default SideBar;
