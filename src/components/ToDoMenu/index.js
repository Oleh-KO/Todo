import ToDoMenu from "./ToDoMenu";
import {compose, withHandlers, withState} from "recompose";
import {preventDefault} from "../../utils/helpers/DOMevents]";

const handleChange = ({ setValue }) => ({ target: { value }}) => setValue(value);

const handleSubmit = ({ setValue, value, onSubmit }) => (e) => {
    preventDefault(e);
    onSubmit(value);
    setValue('');
};

const toDoMenuFactory = compose(
    withState('value', 'setValue', '' ),
    withHandlers({
        handleChange,
        handleSubmit,
    })
);

export default toDoMenuFactory(ToDoMenu);
