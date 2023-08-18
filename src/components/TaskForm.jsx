import { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

export const TaskForm = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	// Obtengo la funcion createTask
	const { createTask } = useContext(TaskContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		createTask({ title, description });
		setTitle('');
		setDescription('');
	};

	return (
		<div className="max-w-md mx-auto">
			<form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 ">
				<h1 className="text-2xl font-bold text-white mb-2">
					Crea tu tarea
				</h1>
				<input
					className="bg-slate-300 p-3 w-full mb-2"
					onChange={(e) => {
						setTitle(e.target.value);
					}}
					type="text"
					name="task"
					id="task"
					placeholder="Escribe tu tarea"
					value={title}
					autoFocus
				/>
				<textarea
					className="bg-slate-300 p-3 w-full mb-2"
					placeholder="Escribe la descripcion de la tarea"
					onChange={(e) => setDescription(e.target.value)}
					value={description}
				/>
				<button className="bg-indigo-500 px-3 py-1 text-white ">
					Guardar
				</button>
			</form>
		</div>
	);
};
