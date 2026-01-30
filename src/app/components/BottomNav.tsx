import { Home, ListTodo, User } from 'lucide-react';
import { Screen } from '../App';

interface BottomNavProps {
  active: 'home' | 'tasks' | 'profile';
  navigate: (screen: Screen) => void;
}

export default function BottomNav({ active, navigate }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl">
      <div className="flex">
        <button 
          onClick={() => navigate('dashboard')}
          className="flex-1 py-6 flex flex-col items-center gap-2 transition-colors"
          style={{ 
            backgroundColor: active === 'home' ? '#C2185B' : 'transparent',
            color: active === 'home' ? 'white' : '#666'
          }}
        >
          <Home size={28} strokeWidth={2.5} />
          <span className="text-2xl" style={{ fontWeight: 600 }}>Home</span>
        </button>
        
        <button 
          onClick={() => navigate('tasks')}
          className="flex-1 py-6 flex flex-col items-center gap-2 transition-colors"
          style={{ 
            backgroundColor: active === 'tasks' ? '#C2185B' : 'transparent',
            color: active === 'tasks' ? 'white' : '#666'
          }}
        >
          <ListTodo size={28} strokeWidth={2.5} />
          <span className="text-2xl" style={{ fontWeight: 600 }}>Tasks</span>
        </button>
        
        <button 
          onClick={() => navigate('profile')}
          className="flex-1 py-6 flex flex-col items-center gap-2 transition-colors"
          style={{ 
            backgroundColor: active === 'profile' ? '#C2185B' : 'transparent',
            color: active === 'profile' ? 'white' : '#666'
          }}
        >
          <User size={28} strokeWidth={2.5} />
          <span className="text-2xl" style={{ fontWeight: 600 }}>Profile</span>
        </button>
      </div>
    </div>
  );
}