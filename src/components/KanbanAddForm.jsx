import React, { useContext, useState } from 'react';
import { KanbanContext } from './KanbanContext';
import { STATUS_DONE, STATUS_IN_PROGRESS, STATUS_TODO } from '../constants/statuses';

const KanbanAddForm = () => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [status, setStatus] = useState(STATUS_TODO);
	const { addTask } = useContext(KanbanContext);

	const addNewTask = () => {
		addTask(title,desc, status);
		setTitle('');
		setDesc('');
		setStatus(STATUS_TODO);
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
			<label>Select status</label>
			<select value={status} onChange={({ target: { value } })=>setStatus(value)}>
				<option value={STATUS_TODO}>TODO</option>
				<option value={STATUS_IN_PROGRESS}>IN PROGRESS</option>
				<option value={STATUS_DONE}>DONE</option>
			</select>
			<button className="btn green" onClick={addNewTask}>Add new task</button>
		</div>
	);
};

KanbanAddForm.propTypes = {};

export default KanbanAddForm;