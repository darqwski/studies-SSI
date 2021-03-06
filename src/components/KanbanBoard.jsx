import React, { useContext } from 'react';
import KanbanList from './KanbanList';
import { STATUS_IN_PROGRESS, STATUS_TODO, STATUS_DONE } from '../constants/statuses';
import { KanbanContext } from './KanbanContext';
import './kanban-list.css';

const KanbanBoard = () => {
	const { cardList } = useContext(KanbanContext);

	return (
		<div className="list-container">
			<KanbanList title="Tasks todo" className="blue darken-2" cards={cardList.filter(({ status })=> status === STATUS_TODO)}  />
			<KanbanList title="Tasks in progress" className="orange darken-2"  cards={cardList.filter(({ status })=> status === STATUS_IN_PROGRESS)}  />
			<KanbanList title="Tasks done" className="green darken-2" cards={cardList.filter(({ status })=> status === STATUS_DONE)}  />
		</div>
	);
};

KanbanBoard.propTypes = {};

export default KanbanBoard;
