import React from 'react';
import PropTypes from 'prop-types';
import KanbanCard from './KanbanCard';

const KanbanList = ({ cards, title, className = '' }) => (
	<div className={`card list ${className}`}>
		<h3 className="white-text">{title}</h3>
		{cards.map((item, key) => (
			<KanbanCard {...item} key={`KanbanCard-${title}-${key}`}/>
		))}
	</div>
);

KanbanList.propTypes = {
	cards:PropTypes.array,
	title: PropTypes.string,
	className: PropTypes.string
};

export default KanbanList;
