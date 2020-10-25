import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import cardList from '../constants/cardList';
import { STATUS_DONE, STATUS_IN_PROGRESS, STATUS_TODO } from '../constants/statuses';

export const KanbanContext = createContext();

const KanbanContextManager = ({ children }) => {
	const [ state, setState ] = useState(cardList);
	const addSubTask = (taskText, taskId) => {
		const task = state.find(({ id }) => id === taskId);
		const filteredTasks = state.filter(({ id }) => id !== taskId);
		const { subTasks = [] } = task;
		const newSubTask = {
			subTaskId: subTasks?.length , name: taskText, done: false
		};
		setState([...filteredTasks, { ...task, subTasks: [...subTasks, newSubTask] }]);
	};
	const deleteSubTask = (taskId, subTaskId) => {
		const task = state.find(({ id }) => id === taskId);
		const filteredTasks = state.filter(({ id }) => id !== taskId);
		const { subTasks = [] } = task;
		setState([...filteredTasks, { ...task, subTasks: [...subTasks.filter(({ subTaskId: id })=>id !== subTaskId)] }]);

	};
	const addTask = (taskText, taskDescription ) => {
		const newTask = {
			id: Math.max(...state.map(({ id })=>id)) + 1,
			title: taskText,
			description: taskDescription,
			status: STATUS_TODO
		};
		setState([...state, newTask]);
	};

	const moveToStatus = (taskId, status) => {
		const task = state.find(({ id }) => id === taskId);
		const filteredTasks = state.filter(({ id }) => id !== taskId);

		setState([...filteredTasks, { ...task, status } ]);
	};

	const moveToNextStatus = (taskId) => {
		const task = state.find(({ id }) => id === taskId);
		if(task.status === STATUS_TODO){
			moveToStatus(task.id, STATUS_IN_PROGRESS);
		}
		if(task.status === STATUS_IN_PROGRESS){
			moveToStatus(task.id, STATUS_DONE);
		}
	};

	const moveToPrevStatus = (taskId) => {
		const task = state.find(({ id }) => id === taskId);
		console.log({ task });
		if(task.status === STATUS_IN_PROGRESS){
			moveToStatus(task.id, STATUS_TODO);
		}
		if(task.status === STATUS_DONE){
			moveToStatus(task.id, STATUS_IN_PROGRESS);
		}
	};

	return (
		<KanbanContext.Provider value={{
			cardList: state, setCardList: setState, addSubTask, deleteSubTask, addTask, moveToNextStatus,moveToPrevStatus }}>
			{children}
		</KanbanContext.Provider>
	);
};

KanbanContextManager.propTypes = {};

export default KanbanContextManager;
