import { createContext, useEffect, useState } from 'react';
import { tasks as data } from '../data/tasks.js';

// Aqui se crea el contexto
export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		setTasks(data);
	}, []);

	const createTask = (task) => {
		setTasks([
			...tasks,
			{
				id: tasks.length,
				title: task.title,
				description: task.description,
			},
		]);
	};

	const deleteTask = (taskId) => {
		const filteredArray = tasks.filter((task) => task.id !== taskId);
		setTasks([...filteredArray]);
	};

	return (
		<TaskContext.Provider
			value={{
				tasks,
				createTask,
				deleteTask,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};
