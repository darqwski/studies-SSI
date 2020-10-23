import { STATUS_DONE, STATUS_IN_PROGRESS, STATUS_TODO } from './statuses';

export default [
	{
		id: 1,
		title: 'Read book',
		status: STATUS_IN_PROGRESS,
		subTasks: [],
		description: 'Read tutorial how to build react app'
	}, {
		id: 2,
		title: 'Write some code',
		description: 'Rewrite laboratories code',
		status: STATUS_TODO,
		subTasks: [
			{ subTaskId: 1, name: 'Write kanban board', done: false },
			{ subTaskId: 2, name: 'Write single list element', done: false },
			{ subTaskId: 3, name: '<b>Write</b> toggle to list element', done: true },
		] },
];
