import React from "react";
import './ToDoMenu.css'

const ToDoMenu = props => {


  return (
    <div>
      <form id="clear"
        className="taskForm"
        onSubmit={props.addTask}
      >
        <input
          className="task-input"
          autoComplete="off"
          placeholder="Type a task"
          onChange={props.handleInputChange}
        />
        <button className="btn-success" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default ToDoMenu;
