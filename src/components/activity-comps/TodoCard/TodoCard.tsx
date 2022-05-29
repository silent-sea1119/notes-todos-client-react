import React from "react";
import "./TodoCard.scss";

const TodoCard = () => {
  return (
    <div
      className="todo-card color-white-bg pointer rounded-5"
      draggable="true"
    >
      {/* CARD DESCRIPTION */}
      <div className="card-description color-black mgb-12">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum
      </div>

      {/* CARD TAGS */}
      <div className="card-tags">
        <div className="tag color-red-light-bg color-brown">Onboarding</div>
        <div className="tag color-blue-light-bg color-green">Profile</div>
      </div>

      {/* CARD TRASH */}
      <div className="card-trash pointer">
        <div className="wrapper">
          <div className="icon icon-trash place-center"></div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
