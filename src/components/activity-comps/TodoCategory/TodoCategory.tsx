import React from "react";
import { TodoCategoryTypes } from "types/TodoTypes";
import { TodoCard } from "components";

import "./TodoCategory.scss";

const TodoCategory = ({ id, title, color }: TodoCategoryTypes) => {
  return (
    <div className={`todo-category rounded-5 color-${color}-dark-bg`}>
      {/* CATEGORY TOP */}
      <div
        className={`category-top rounded-bottom-3 color-white color-${color}-bg`}
      >
        <div className="top-left">
          <div className={`counter mgr-7 rounded-7 border-color-white`}>
            <div className="count place-center color-white fw-600">10</div>
          </div>

          <div className="text fw-600">{title}</div>
        </div>

        <div className="top-right position-relative rounded-circle pointer">
          <div className="icon icon-ellipsis-h place-center color-black"></div>
        </div>
      </div>

      {/* CATEGORY BODY */}
      <div className="category-body">
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoCategory;
