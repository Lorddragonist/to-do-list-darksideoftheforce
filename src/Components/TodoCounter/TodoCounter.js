import './TodoCounter.css';

function TodoCounter({ total, completed }) {
	if (total === 0) {
		return (
			<h1 className="TodoCounter">
				You don't have pending Tasks.
			</h1>
		);
	} else if (total === completed) {
		return (
			<h1 className="TodoCounter">
				You have completed all of your Tasks.
			</h1>
		);
	} else {
		return (
			<h1 className="TodoCounter">
				You have completed{' '}
				<span>{completed}</span> of{' '}
				<span>{total}</span> Tasks.
			</h1>
		);
	}
}

export { TodoCounter };
