import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { STATUS_TODO } from '../constants/statuses';

const KanbanCard = ({ title, description, subTasks  }) => {
	const [showDetails, setShowDetails] = useState(false);
	return (
		<div>
			<h5 onClick={()=>setShowDetails(i=>!i)}>{title}</h5>
			<p>{description}</p>
			{showDetails && subTasks?.length && subTasks.map(
				({ name, done }, key) => (
					<div key={`sub-task-${key}-${title}`}>
						<p>{name} {done ? 'DONE' : 'TODO'}</p>
					</div>
				)
			)}
		</div>
	);
};

KanbanCard.propTypes = {};

export default KanbanCard;
