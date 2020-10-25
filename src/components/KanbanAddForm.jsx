import React, { useContext, useState } from 'react';
import { KanbanContext } from './KanbanContext';

const KanbanAddForm = () => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const { addTask } = useContext(KanbanContext);

	const addNewTask = () => {
		addTask(title,desc);
		setTitle('');
		setDesc('');
	};

	return (
		<div className="card green lighten-4 add-form">
			<h3>Sekcja dodawania nowego zadania</h3>
			<div>
				<label>Add task title</label>
				<input value={title} onChange={({ target: { value } })=>setTitle(value)} />
			</div>
			<div>
				<label>Add task description</label>
				<input value={desc} onChange={({ target: { value } })=>setDesc(value)} />
			</div>
			<button className="btn green" onClick={addNewTask}>Add new task</button>
			<p>Task will be automaticly moved to TODO</p>
		</div>
	);
};

KanbanAddForm.propTypes = {};

export default KanbanAddForm;