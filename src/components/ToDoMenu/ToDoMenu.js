import React from "react";
import './ToDoMenu.css'

const ToDoMenu = ({ handleSubmit, handleChange, value}) => (
    <div>
      <form id="clear"
        className="taskForm"
        onSubmit={handleSubmit}
      >
        <input
          className="task-input"
          autoComplete="off"
          placeholder="Type a task"
          value={value}
          onChange={handleChange}
        />
        <button className="btn-success" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );

export default ToDoMenu;
