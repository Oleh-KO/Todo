import {compose, withHandlers, withState, withStateHandlers} from "recompose";
import {preventDefault} from "../../utils/helpers/DOMevents]";


import Task from "./Task";

const handleChangeStatus = ({ task: { id }, editTask }) => ({ target: { value }
}) => editTask({ id, status: Number(value)});

const editTaskHandler = ({setEditing, editTask, isEditing, task:{id}}) => (id) => {
    // editTask(id);
    setEditing(!isEditing)
}


const handleEditChange = ({ setValue }) => ({ target: { value }}) => setValue(value);

const handleEditSubmit = ({ setValue, value, task: { id }, editTask, setEditing }) => (e) => {
    preventDefault(e);
    editTask({ id, text: value})
    setValue('');
    setEditing(false);
};

const toDoMenuFactory = compose(
    withState('isEditing', 'setEditing', false),
    withState('value', 'setValue', ({ task: { text }}) => text ),
    withHandlers({
        handleChangeStatus,
        editTaskHandler,
        handleEditChange,
        handleEditSubmit
    }),
);



export default toDoMenuFactory(Task);
