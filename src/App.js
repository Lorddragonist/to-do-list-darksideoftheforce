import React from 'react';
import { TodoCounter } from './Components/TodoCounter/TodoCounter';
import { TodoSearch } from './Components/TodoSearch/TodoSearch';
import { TodoList } from './Components/TodoList/TodoList';
import { TodoItem } from './Components/TodoItem/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton/CreateTodoButton';

const defaultTodos = [
	{ text: 'Analysis of trends', completed: true },
	{ text: 'Update forecast', completed: false },
	{
		text: 'Update performance',
		completed: false,
	},
	{
		text: 'Send Capacity Plan email',
		completed: false,
	},
	{
		text: 'Send Capacity Plan by chat',
		completed: true,
	},
];

function App() {
	const [todos, setTodos] =
		React.useState(defaultTodos);
	const [searchValue, setSearchValue] =
		React.useState('');

	const completedTodos = todos.filter(
		(todo) => !!todo.completed
	).length;
	const totalTodos = todos.length;

	const searchedTodos = todos.filter((todo) => {
		const todoText = todo.text.toLowerCase();
		const searchText = searchValue.toLowerCase();
		return todoText.includes(searchText);
	});

	const completeTodo = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex(
			(todo) => todo.text === text
		);
		newTodos[todoIndex].completed = true;
		setTodos(newTodos);
	};

	const deleteTodo = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex(
			(todo) => todo.text === text
		);
		newTodos.splice(todoIndex, 1);
		setTodos(newTodos);
	};

	return (
		<>
			<TodoCounter
				completed={completedTodos}
				total={totalTodos}
			/>

			<TodoSearch
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>

			<TodoList>
				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() =>
							completeTodo(todo.text)
						}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>

			<CreateTodoButton />
		</>
	);
}

export default App;
