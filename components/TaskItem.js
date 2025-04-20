export default function TaskItem({ task }) {
  return (
    <li className="flex items-center justify-between mb-2 p-3 border rounded shadow-sm hover:bg-gray-50">
      <div className="flex items-center gap-3">
        <input type="checkbox" className="form-checkbox h-5 w-5 text-red-500" />
        <span className={task.completed ? 'line-through text-gray-400' : ''}>
          {task.text}
        </span>
      </div>
    </li>
  );
}