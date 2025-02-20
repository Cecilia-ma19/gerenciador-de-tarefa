import { ChevronRightIcon, DeleteIcon, Trash, TrashIcon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaksClick }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full flex items-center gap-2 text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaksClick(task.id)}
            className='bg-slate-400 p-2 rounded-md text-white hover:bg-red-500 ${task.isCompleted && "line-through"}'
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
