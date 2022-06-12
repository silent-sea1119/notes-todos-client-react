import React from "react";
import { TodoCategoryTypes } from "types/TodoTypes";
import { useToggle } from "hooks";
import { TodoCreateModal } from "modals";
import { TodoCard } from "components";

import "./TodoCategory.scss";

const TodoCategory = ({
  id,
  title,
  color,
  empty_text,
  data,
}: TodoCategoryTypes) => {
  const [isTodoOpen, setIsTodoOpen] = useToggle();

  return (
    <>
      <div className={`todo-category rounded-5 color-${color}-dark-bg`}>
        {/* CATEGORY TOP */}
        <div
          className={`category-top rounded-bottom-3 color-white color-${color}-bg`}
        >
          <div className="top-left">
            <div className={`counter mgr-7 rounded-7 border-color-white`}>
              <div className="count place-center color-white fw-600">
                {data?.length}
              </div>
            </div>

            <div className="text fw-600">{title}</div>
          </div>

          <div
            className="top-right position-relative rounded-circle pointer"
            title={`Add ${title} task`}
            onClick={setIsTodoOpen}
          >
            <div className="icon icon-plus place-center color-black"></div>
          </div>
        </div>

        {/* CATEGORY BODY */}
        <div className="category-body">
          {data?.length ? (
            data?.map((item, index) => <TodoCard key={index} todo={item} />)
          ) : (
            <div className="empty-state">{empty_text}</div>
          )}
        </div>
      </div>

      {/* MODALS */}
      <TodoCreateModal
        showModal={isTodoOpen}
        toggleModal={setIsTodoOpen}
        category={title}
      />
    </>
  );
};

export default TodoCategory;
