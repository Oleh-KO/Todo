import React from "react";
import { Task } from "../Task/Task";

const CompletedTasks = props => {
  let taskList = props.tasks.filter(task => task.done);
  taskList = taskList.map(task => (
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

export default CompletedTasks;
