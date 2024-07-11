import { TodoContext } from '../TodoContext/TodoContext';
import './TodoCounter.css';
import React from 'react';
import { EmblemIcon } from '../TodoNavIcon/EmblemIcon';

function TodoCounter() {
	const { completedTodos, totalTodos } =
		React.useContext(TodoContext);

	if (totalTodos === 0) {
		return (
			<h1 className="TodoCounter">You don't have pending Tasks.</h1>
		);
	} else if (totalTodos === completedTodos) {
		return (
			<h1 className="TodoCounter">
				You have completed all of your Tasks.
			</h1>
		);
	} else {
		return (
			<>
				<div className='header-container'>
					<EmblemIcon></EmblemIcon>
					<h1 className="TodoCounter">
						You have completed <span>{completedTodos}</span> of{' '}
						<span>{totalTodos}</span> Tasks.
					</h1>
				</div>
			</>
		);
	}
}

export { TodoCounter };
