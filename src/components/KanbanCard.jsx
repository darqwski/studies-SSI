import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { KanbanContext } from './KanbanContext';
import { STATUS_DONE, STATUS_IN_PROGRESS, STATUS_TODO } from '../constants/statuses';

const KanbanCard = ({ title, description, subTasks, id, status  }) => {
	const [showDetails, setShowDetails] = useState(false);
	const [taskText, setTaskText] = useState('');
	const { addSubTask, deleteSubTask, moveToNextStatus,moveToPrevStatus } = useContext(KanbanContext);
	const addNewTask = () => {
		addSubTask(taskText, id);
	};
	const deleteTask = (subTaskId) => {
		deleteSubTask(id, subTaskId);
	};
	const nextStatus = status === STATUS_TODO ? 'Mark as IN PROGRESS' : status === STATUS_IN_PROGRESS ? 'Mark as DONE' : null;
	const prevStatus = status === STATUS_DONE ? 'Mark as IN PROGRESS' : status === STATUS_IN_PROGRESS ? 'Mark as TODO' : null;
	return (
		<div className="card card-task">
			<div className="card-title">
				<h5>{title}</h5>
			</div>
			<div className="card-content">
				<p>{description}</p>
				<p className="sub-section" onClick={()=>setShowDetails(i=>!i)}>
					<i className="material-icons">{showDetails ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}</i>
					<p>{showDetails ? 'Hide details' : 'Open details'}</p>
				</p>
				{showDetails && <div>
					{(subTasks?.length) ? subTasks.map(
						({ name, done, subTaskId }, key) => (
							<div className="sub-section" key={`sub-task-${key}-${title}`}>
								<p>{name} {done ? 'DONE' : 'TODO'}</p>
								<i onClick={()=>deleteTask(subTaskId)} className="material-icons">delete</i>
							</div>
						)
					) : null}
					<div className="sub-task">
						<p>Add new sub task</p>
						<input value={taskText} onChange={(e)=>setTaskText(e.target.value)} />
						<button className="btn green" onClick={addNewTask}><i className="material-icons">add</i></button>
					</div>
				</div>}
			</div>
			<div className="card-action">
				{prevStatus && <button className="btn red" onClick={() => moveToPrevStatus(id)}>{prevStatus}</button>}
				{nextStatus && <button className="btn green" onClick={() => moveToNextStatus(id)}>{nextStatus}</button>}
			</div>
		</div>
	);
};

KanbanCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	subTasks: PropTypes.array,
	id: PropTypes.number,
	status: PropTypes.string
};

export default KanbanCard;
