import {compose, withStateHandlers} from "recompose";
import App from './App';
import {STATUSES, STATUSES_KEYS} from "../../constants/tasks";

const addTask = ({ tasks }) => (text) => ({
    tasks: [
        ...tasks,
        { text, done: false, id: tasks.length, status: STATUSES_KEYS.TO_DO, isEditing: false }
    ],
});

const handleInputChange = (state, props) => e => ({
    taskText: e.target.value,

});

const deleteTask = ({ tasks }) => key => ({
    tasks: tasks.filter(task => task.id !== key),
});

const editTask = ({ tasks }) => ({ id, ...newData}) => ({
    tasks: tasks.map((task) => id === task.id ? { id, ...task, ...newData } : task ),
    // isEditing: true
    
});

const checkLikeDone = ({ tasks }) => key => ({
    tasks: tasks.map(task =>
        task.key !== key
            ? task
            : { text: task.text, done: !task.done, key: task.key }
    )
});

const toDoListFactory = compose(
    withStateHandlers(
        { tasks: [] },
        {
            addTask,
            handleInputChange,
            deleteTask,
            editTask,
            checkLikeDone,
            
        }
    )
);

export default toDoListFactory(App)
