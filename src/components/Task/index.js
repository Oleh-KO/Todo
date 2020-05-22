import {compose, withHandlers, withState} from "recompose";

import Task from "./Task";

const handleChangeStatus = ({ task: { id }, editTask }) => ({ target: { value }
}) => editTask({ id, status: Number(value)});

const editTaskHandler = ({setEditing, editTask, isEditing, task:{id}}) => (id) => {
    // editTask(id);
    setEditing(!isEditing)
}

const toDoMenuFactory = compose(
    withState('isEditing', 'setEditing', false),
    withHandlers({
        handleChangeStatus,
        editTaskHandler
    })
    

);



export default toDoMenuFactory(Task);
