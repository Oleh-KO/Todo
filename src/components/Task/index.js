import {compose, withHandlers, withState} from "recompose";

import Task from "./Task";

const handleChangeStatus = ({ task: { id }, editTask }) => ({ target: { value }
}) => editTask({ id, status: Number(value)});

const toDoMenuFactory = compose(
    withHandlers({
        handleChangeStatus,
    })
);

export default toDoMenuFactory(Task);
