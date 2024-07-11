import React from 'react';
import './EmblemIcon.css';
import icon from './empire.png';

function EmblemIcon() {
	return (
		<div className="icon-container">
			<img src={icon} />
		</div>
	);
}

export { EmblemIcon };
