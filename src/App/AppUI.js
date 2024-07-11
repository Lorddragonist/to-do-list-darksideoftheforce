import { TodoCounter } from '../Components/TodoCounter/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch/TodoSearch';
import { TodoList } from '../Components/TodoList/TodoList';
import { TodoItem } from '../Components/TodoItem/TodoItem';
import { CreateTodoButton } from '../Components/CreateTodoButton/CreateTodoButton';
import { TodosLoading } from '../Components/TodosLoading/TodosLoading';
import { TodoContext } from '../Components/TodoContext/TodoContext';
import { Modal } from '../Components/Modal/TodoModal';
import { TodoForm } from '../Components/TodoForm/TodoForm';
import React from 'react';

function AppUI() {
	const {
		loading,
		error,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal,
	} = React.useContext(TodoContext);

	return (
		<>
			<TodoCounter />

			<TodoSearch />

			<TodoList>
				{loading && (
					<div>
						<TodosLoading></TodosLoading>
						<TodosLoading></TodosLoading>
						<TodosLoading></TodosLoading>
						<TodosLoading></TodosLoading>
					</div>
				)}
				{error && <p>Error!</p>}
				{!loading && searchedTodos.length === 0 && (
					<p>Add your first task</p>
				)}

				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>
			<CreateTodoButton setOpenModal={setOpenModal} />

			{openModal && (
				<Modal>
					<TodoForm></TodoForm>
				</Modal>
			)}
		</>
	);
}

export { AppUI };
