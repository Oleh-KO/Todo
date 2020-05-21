import React from "react";
import "./Task.css";

export const Task = props => {
  return (
    <li className="item--row">
      <span
        className="text"
        onClick={e => props.checkLikeDone(props.task.key)}
      >
        <button className="list-group-btn">
          <span>{props.task.text}</span>
        </button>
      </span>
      <button className="edit" onClick={e => props.editTask(props.task.key)}>
        E
      </button>
      <button className="close" onClick={e => props.deleteTask(props.task.key)}>
        X
      </button>
    </li>
  );
};
