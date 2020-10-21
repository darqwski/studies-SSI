import React from 'react';
import PropTypes from 'prop-types';
import './kanban-list.css';
import KanbanList from './KanbanList';
import cardList from '../constants/cardList';
import { STATUS_IN_PROGRESS, STATUS_TODO, STATUS_DONE } from '../constants/statuses';

const KanbanBoard = ({ title }) => {
	return (
		<div className="list-container">
			<KanbanList title="Tasks todo" cards={cardList.filter(({ status })=> status === STATUS_TODO)}  />
			<KanbanList title="Tasks in progress" cards={cardList.filter(({ status })=> status === STATUS_IN_PROGRESS)}  />
			<KanbanList title="Tasks done" cards={cardList.filter(({ status })=> status === STATUS_DONE)}  />
		</div>
	);
};

KanbanBoard.propTypes = {};

export default KanbanBoard;
