import React from "react";
import { TodoTypes } from "types/TodoTypes";
import { useModalToggle } from "hooks";
import { DeleteModal } from "modals";

import "./TodoCard.scss";

interface TodoCardProps {
  todo: TodoTypes;
}

const TodoCard = ({ todo: { content, labels } }: TodoCardProps) => {
  const [isDeleteOpen, setDeleteOpen] = useModalToggle();

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
              {label.text}
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
      />
    </>
  );
};

export default TodoCard;
