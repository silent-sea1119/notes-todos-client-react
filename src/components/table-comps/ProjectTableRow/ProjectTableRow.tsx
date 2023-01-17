import React from "react";
import { useNavigate } from "react-router-dom";
import { projectTypes } from "types";
import { format } from "date-fns";
import { useToggle, useClickOutside } from "hooks";
import { ProjectCreateModal, DeleteModal } from "modals";

interface IProject {
  project: projectTypes;
}

const ProjectTableRow = ({ project }: IProject) => {
  const navigate = useNavigate();
  const dropdownRef = React.useRef<any>();
  useClickOutside(dropdownRef, () => setShowDropdown(!showDropdown));

  const [showDropdown, setShowDropdown] = React.useState<boolean>(false);
  const [isProjectOpen, setIsProjectOpen] = useToggle();
  const [isDeleteOpen, setDeleteOpen] = useToggle();

  /**
   * The function viewProject() is a function that navigates to the project page and passes the project
   * id and title as query parameters
   */
  const viewProject = () => {
    navigate(`/project/${project.id}?title=${project.title}`);
  };

  return (
    <>
      <tr>
        <td className="project-one">{project?.title}</td>
        <td className="project-two">
          {project?.description || "No description"}
        </td>
        <td className="project-three">
          {format(new Date(project?.createdAt), "do MMM, yyyy")}
        </td>
        <td className="project-four">{project?.notes}</td>
        <td className="project-five">{project?.todos}</td>
        <td className="project-six">
          <span
            className="icon-more icon-ellipsis"
            tabIndex={0}
            // onBlur={() => setShowDropdown(!showDropdown)}
            onClick={() => setShowDropdown(!showDropdown)}
          ></span>

          {/* TABLE OPTION */}
          {showDropdown && (
            <div className="table-dropdown smooth-animation" ref={dropdownRef}>
              <div className="item mgt-4" onClick={viewProject}>
                <div className="icon icon-eye"></div>
                <div className="value-text">View</div>
              </div>

              <div className="item mgt-4" onClick={setIsProjectOpen}>
                <div className="icon icon-add-file"></div>
                <div className="value-text">Edit</div>
              </div>

              <div className="item mgb-4" onClick={setDeleteOpen}>
                <div className="icon icon-trash"></div>
                <div className="value-text">Delete</div>
              </div>
            </div>
          )}
        </td>
      </tr>

      {/* MODALS */}
      <ProjectCreateModal
        create={false}
        data={project}
        showModal={isProjectOpen}
        toggleModal={setIsProjectOpen}
      />

      <DeleteModal
        showModal={isDeleteOpen}
        toggleModal={setDeleteOpen}
        title="Project"
        id={project.id}
      />
    </>
  );
};

export default ProjectTableRow;
