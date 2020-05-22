import {compose, withHandlers, withState} from "recompose";
import {preventDefault} from "../../utils/helpers/DOMevents]";


import Task from "./Task";

const handleChangeStatus = ({ task: { id }, editTask }) => ({ target: { value }
}) => editTask({ id, status: Number(value)});

const editTaskHandler = ({setEditing, editTask, isEditing, task:{id}}) => (id) => {
    // editTask(id);
    setEditing(!isEditing)
}


const handleEditChange = ({ setValue }) => ({ target: { value }}) => setValue(value);

const handleEditSubmit = ({ setValue, value, onSubmit }) => (e) => {
    preventDefault(e);
    onSubmit(value);
    setValue('');
};

const toDoMenuFactory = compose(
    withState('isEditing', 'setEditing', false),
    withState('value', 'setValue', '' ),

    withHandlers({
        handleChangeStatus,
        editTaskHandler,
        handleEditChange,
        handleEditSubmit
    })
    
);



export default toDoMenuFactory(Task);
