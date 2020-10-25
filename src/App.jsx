import React from 'react';
import KanbanBoard from './components/KanbanBoard';
import KanbanContextManager from './components/KanbanContext';
import KanbanAddForm from './components/KanbanAddForm';

const App = () => (
	<div>
		<h1>Lista zadań kanban</h1>
		<KanbanBoard/>
		<KanbanAddForm/>
	</div>
);

export default () => (
	<KanbanContextManager>
		<App />
	</KanbanContextManager>
);
