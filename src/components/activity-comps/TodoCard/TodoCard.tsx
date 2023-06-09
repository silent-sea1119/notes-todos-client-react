import React from "react";
import { TodoTypes } from "types/TodoTypes";
import { useToggle } from "hooks";
import { DeleteModal } from "modals";

import "./TodoCard.scss";

interface TodoCardProps {
  todo: TodoTypes;
}

const TodoCard = ({ todo: { id, content, labels } }: TodoCardProps) => {
  const [isDeleteOpen, setDeleteOpen] = useToggle();

  return (
    <>
      <div
        className="todo-card color-white-bg pointer rounded-5"
        draggable="true"
      >
        {/* CARD DESCRIPTION */}
        <div className="card-description color-black mgb-12">{content}</div>

        {/* CARD TAGS */}
        <div className="card-tags">
          {labels.map((label, index) => (
            <div
              key={index}
              className={`tag color-${label.color}-light-bg color-${label.color}`}
            >
              {label.title}
            </div>
          ))}
        </div>

        {/* CARD TRASH */}
        <div className="card-trash pointer" onClick={setDeleteOpen}>
          <div className="wrapper">
            <div className="icon icon-trash place-center"></div>
          </div>
        </div>
      </div>

      {/* MODALS */}
      <DeleteModal
        showModal={isDeleteOpen}
        toggleModal={setDeleteOpen}
        title="Todo"
        id={id}
      />
    </>
  );
};

export default TodoCard;
