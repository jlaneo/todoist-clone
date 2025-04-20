import { useState } from 'react';
import TaskItem from './TaskItem';
import AddTaskForm from './AddTaskForm';

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Ejemplo de tarea', completed: false },
  ]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  return (
    <main className="flex-1 p-8 bg-white">
      <h2 className="text-lg font-semibold mb-6">Tareas</h2>
      <AddTaskForm onAdd={addTask} />
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </main>
  );
}