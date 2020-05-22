import React from "react";
import "./Task.css";
import {STATUSES} from "../../constants/tasks";

const Task = ({ checkLikeDone, task, editTask, deleteTask, handleChangeStatus, isEditing, editTaskHandler, handleEditChange, handleEditSubmit, value}) => (
    <li className="item--row">
      <span
        className="text"
        // onClick={e => checkLikeDone(task.key)}
      >
        {!isEditing ? 
          <button className="list-group-btn">
            <span>{task.text}</span>
          </button> 
          : 
          <form 
            className="editField"
            onSubmit={handleEditSubmit}>
           <input 
            type="text" 
            placeholder={task.text}
            value={value}
            onChange={handleEditChange}/>
           <button type="submit">Save</button>
          </form>
        }
      </span>
        <select onChange={handleChangeStatus} value={task.status}>
            {
                STATUSES.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                ))
            }
        </select>
      <button className="edit" onClick={editTaskHandler}>
        E
      </button>
      {/* <button className="edit" onClick={e => editTask(task.id)}>
        E
      </button> */}
      <button className="close" onClick={e => deleteTask(task.id)}>
        X
      </button>
    </li>
  );

export default Task;
