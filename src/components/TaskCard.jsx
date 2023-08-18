import PropTypes from 'prop-types';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export const TaskCard = ({ task }) => {
	// Asi obtenemos el contexto

	const { deleteTask } = useContext(TaskContext);

	return (
		<div className="bg-gray-800 text-white p-4 rounded-md">
			<h1 className="text-xl font-bold capitalize">{task.title}</h1>
			<p className="text-gray-500 text-sm">{task.description}</p>
			<button
				className="bg-red-500 px-2 py-1 rounded-sm mt-4 hover:bg-red-400"
				onClick={() => deleteTask(task.id)}
			>
				Eliminar tarea
			</button>
		</div>
	);
};

TaskCard.propTypes = {
	task: PropTypes.object.isRequired,
};
