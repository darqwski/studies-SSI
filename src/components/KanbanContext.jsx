import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import cardList from '../constants/cardList';

export const KanbanContext = createContext();

const KanbanContextManager = () => {
	const [ state, setState ] = useState(cardList);
	const addTask = (taskText, taskId) => {
		const task = state.filter(({ taskId: id }) => id === taskId);
		const { subTasks } = task;
		setState(state=>([...state, { ...task, subTasks: [...subTasks, { id: subTasks[subTasks.length-1].id +1, name: taskText, done: false}] }]));
	};

	return (
		<KanbanContext.Provider value={{ cardList: state, setCardList: setState, addTask }}>
			KanbanContext
		</KanbanContext.Provider>
	);
};

KanbanContextManager.propTypes = {};

export default KanbanContextManager;
