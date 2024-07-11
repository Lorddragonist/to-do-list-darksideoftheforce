import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoForm.css';
import { EmblemIcon } from '../TodoNavIcon/EmblemIcon';

function TodoForm() {
	const { addTodo, setOpenModal } = React.useContext(TodoContext);

	const [newTodoValue, setNewTodoValue] = React.useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		addTodo(newTodoValue);
		setOpenModal(false);
	};

	const onCancel = () => {
		setOpenModal(false);
	};

	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<EmblemIcon/>
			<label>Add your new Task</label>
			<textarea
				placeholder="Type here to add a new task"
				value={newTodoValue}
				onChange={onChange}
			/>
			<div className="TodoForm-buttonContainer">
				<button
					type="button"
					className="TodoForm-button TodoForm-button--cancel"
					onClick={onCancel}>
					Cancel
				</button>
				<button
					type="submit"
					className="TodoForm-button TodoForm-button--add">
					Add
				</button>
			</div>
		</form>
	);
}

export { TodoForm };
