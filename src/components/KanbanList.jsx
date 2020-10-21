import React from 'react';
import PropTypes from 'prop-types';
import KanbanCard from './KanbanCard';

const KanbanList = ({ cards, title }) => {

	return (
		<div className="list">
			<h3>{title}</h3>
			{cards.map((item, key)=>(
				<KanbanCard {...item} key={`KanbanCard-${title}-${key}`}/>
			))}
		</div>
	);
};

KanbanList.propTypes = {};

export default KanbanList;
