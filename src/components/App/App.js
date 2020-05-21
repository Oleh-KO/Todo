import React from "react";
import ToDoMenu from "../ToDoMenu/ToDoMenu";
import AllTasks from "../AllTasks/AllTasks";
import CompletedTasks from "../CompletedTasks/CompletedTasks";
import NewTasks from "../NewTasks/NewTasks";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import "./App.css";
import { compose, withStateHandlers } from "recompose";

const preventDefault = e => {
  e.preventDefault();
};

const addTask = (state, props) => () => ({
  tasks: [
    ...state.tasks,
    { text: state.taskText, done: false, key: Date.now() }
  ],
  taskText: ""
});

const handleInputChange = (state, props) => e => ({
  taskText: e.target.value,
  
});

const deleteTask = (state, props) => key => ({
  tasks: state.tasks.filter(task => task.key !== key),
});

const editTask = (state, props) => key => ({
  tasks: state.tasks.filter(task => task.key !== key)
  // tasks: state.tasks.find(task => task.key === key)
});

const checkLikeDone = (state, props) => key => ({
  tasks: state.tasks.map(task =>
    task.key !== key
      ? task
      : { text: task.text, done: !task.done, key: task.key }
  )
});

const toDoListFactory = compose(
  withStateHandlers(
    { tasks: [], taskText: "" },
    {
      addTask,
      handleInputChange,
      deleteTask,
      editTask,
      checkLikeDone
    }
  )
);

const ToDoList = toDoListFactory(
  ({
    addTask,
    handleInputChange,
    checkLikeDone,
    deleteTask,
    editTask,
    tasks,
    taskText
  }) => {
    return (
      <div className="App">
        <BrowserRouter>
          <ToDoMenu
            addTask={
              taskText
                ? compose(
                    addTask,
                    preventDefault
                  )
                : preventDefault
            }
            handleInputChange={handleInputChange}
          />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <AllTasks
                  tasks={tasks}
                  checkLikeDone={checkLikeDone}
                  deleteTask={deleteTask}
                  editTask={editTask}
                />
              )}
            />
            <Route
              path="/new"
              exact
              render={() => (
                <NewTasks
                  tasks={tasks}
                  checkLikeDone={checkLikeDone}
                  deleteTask={deleteTask}
                  editTask={editTask}
                />
              )}
            />
            <Route
              path="/completed"
              exact
              render={() => (
                <CompletedTasks
                  tasks={tasks}
                  checkLikeDone={checkLikeDone}
                  deleteTask={deleteTask}
                  editTask={editTask}
                />
              )}
            />
          </Switch>
          <ul className="flex">
            <li className="title">
              <NavLink className="menuOption" to="/" exact>
                To Do
              </NavLink>
            </li>
            <li className="title">
              <NavLink className="menuOption" to="/new">In Progress</NavLink>
            </li>
            <li className="title">
              <NavLink className="menuOption" to="/completed">Done</NavLink>
            </li>
          </ul>
        </BrowserRouter>
      </div>
    );
  }
);

const App = () => {
  return <ToDoList />;
};

export default App;
