import React from "react";
import Task  from "../Task/index";

const AllTasks = ({ tasks, checkLikeDone, editTask, deleteTask, statusId}) => (<ul>{
    tasks.filter(({ status }) => status === statusId ).map(task => (
        <Task
            key={task.id}
            task={task}
            checkLikeDone={checkLikeDone}
            deleteTask={deleteTask}
            editTask={editTask}
        />
    ))
  }</ul>);

export default AllTasks;
