import React from "react";
import ToDoMenu from "../ToDoMenu/index";
import AllTasks from "../AllTasks/AllTasks";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import "./App.css";
import {STATUSES} from "../../constants/tasks";

const App = ({
    addTask,
    handleInputChange,
    checkLikeDone,
    deleteTask,
    editTask,
    tasks,
    taskText
  }) => (
      <div className="App">
        <BrowserRouter>
          <ToDoMenu
              onSubmit={addTask}
              handleInputChange={handleInputChange}
          />
            <ul className="flex">
                {
                    STATUSES.map(({ label, value}) => (
                        <li className="title" key={value}>
                            <button type="button" name="toDo" className="menuOption">
                                {label}
                            </button>
                        </li>
                    ))
                }
            </ul>
            {
                console.log(tasks)
            }
          <div className="tasks__row">
              {
                  STATUSES.map(({ value}) => (
                      <div className="tasks__col">
                          <AllTasks
                              tasks={tasks}
                              statusId={value}
                              checkLikeDone={checkLikeDone}
                              deleteTask={deleteTask}
                              editTask={editTask}
                          />
                      </div>
                  ))
              }
          </div>
        </BrowserRouter>
      </div>
    );

export default App;
