import React from "react";
import { Task } from "../Tasks/Task";

const AllTasks = props => {
  const taskList = props.tasks.map(task => (
    <Task
      key={task.key}
      task={task}
      checkLikeDone={props.checkLikeDone}
      deleteTask={props.deleteTask}
      editTask={props.editTask}
    />
  ));
  return <ul>{taskList}</ul>;
};

export default AllTasks;
