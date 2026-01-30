import { Circle, CheckCircle2, Plus } from 'lucide-react';
import BottomNav from './BottomNav';
import { Screen } from '../App';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TasksListProps {
  navigate: (screen: Screen) => void;
  tasks: Task[];
  toggleTask: (taskId: number) => void;
}

export default function TasksList({ navigate, tasks, toggleTask }: TasksListProps) {
  return (
    <div className="min-h-screen flex flex-col pb-32" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-5xl" style={{ fontWeight: 700, color: '#1B4D3E' }}>
          My To-Do List
        </h1>
      </div>

      {/* Tasks List */}
      <div className="flex-1 px-6 pb-6">
        <div className="flex flex-col gap-4">
          {tasks.map(task => (
            <button
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className="bg-white rounded-3xl p-6 shadow-lg flex items-center gap-6 active:scale-95 transition-all"
            >
              {/* Checkbox */}
              <div className="flex-shrink-0">
                {task.completed ? (
                  <CheckCircle2 
                    size={56} 
                    style={{ color: '#2C5F2D' }} 
                    strokeWidth={2.5}
                    fill="#2C5F2D"
                  />
                ) : (
                  <Circle 
                    size={56} 
                    style={{ color: '#C2185B' }} 
                    strokeWidth={3}
                  />
                )}
              </div>

              {/* Task Text */}
              <span 
                className="text-3xl flex-1 text-left"
                style={{ 
                  fontWeight: 600, 
                  color: task.completed ? '#999' : '#1B4D3E',
                  textDecoration: task.completed ? 'line-through' : 'none'
                }}
              >
                {task.text}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Floating Add Button */}
      <button 
        onClick={() => navigate('addNewTask')}
        className="fixed bottom-32 right-6 rounded-full p-6 shadow-2xl active:scale-95 transition-transform"
        style={{ backgroundColor: '#2C5F2D' }}
      >
        <Plus size={48} style={{ color: 'white' }} strokeWidth={3} />
      </button>

      <BottomNav active="tasks" navigate={navigate} />
    </div>
  );
}