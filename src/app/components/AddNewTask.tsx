import { ArrowLeft, Mic } from 'lucide-react';
import { Screen } from '../App';
import { useState } from 'react';

interface AddNewTaskProps {
  navigate: (screen: Screen) => void;
  onAddTask?: (task: string, time: string) => void;
}

export default function AddNewTask({ navigate, onAddTask }: AddNewTaskProps) {
  const [taskText, setTaskText] = useState('');
  const [selectedTime, setSelectedTime] = useState<'morning' | 'afternoon' | 'evening'>('morning');

  const handleSave = () => {
    if (taskText.trim() && onAddTask) {
      onAddTask(taskText, selectedTime);
    }
    navigate('tasks');
  };

  return (
    <div className="min-h-screen flex flex-col pb-32" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-6 flex items-center gap-4">
        <button 
          onClick={() => navigate('tasks')}
          className="p-3 rounded-full active:scale-95 transition-transform"
          style={{ backgroundColor: '#1B4D3E' }}
        >
          <ArrowLeft size={32} style={{ color: 'white' }} strokeWidth={2.5} />
        </button>
        <h1 className="text-5xl" style={{ fontWeight: 700, color: '#1B4D3E' }}>
          New Task
        </h1>
      </div>

      {/* Task Input */}
      <div className="flex-1 px-6 space-y-8">
        <div>
          <label className="text-2xl mb-4 block" style={{ fontWeight: 600, color: '#1B4D3E' }}>
            What do you need to do?
          </label>
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <textarea 
              placeholder="Enter your task here..."
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              className="w-full text-3xl outline-none resize-none"
              style={{ 
                fontWeight: 500, 
                color: '#1B4D3E',
                minHeight: '180px'
              }}
            />
            <div className="flex justify-center mt-4">
              <button 
                onClick={() => navigate('voiceAssistant')}
                className="rounded-full p-4 active:scale-95 transition-transform"
                style={{ backgroundColor: '#C2185B' }}
              >
                <Mic size={40} style={{ color: 'white' }} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Time Selection */}
        <div>
          <label className="text-2xl mb-4 block" style={{ fontWeight: 600, color: '#1B4D3E' }}>
            When would you like to be reminded?
          </label>
          <div className="space-y-4">
            <button 
              onClick={() => setSelectedTime('morning')}
              className="w-full rounded-3xl py-6 active:scale-95 transition-all shadow-lg"
              style={{ 
                backgroundColor: selectedTime === 'morning' ? '#C2185B' : 'white',
                border: `3px solid ${selectedTime === 'morning' ? '#C2185B' : 'white'}`
              }}
            >
              <span 
                className="text-3xl" 
                style={{ 
                  fontWeight: 700, 
                  color: selectedTime === 'morning' ? 'white' : '#1B4D3E' 
                }}
              >
                Morning
              </span>
            </button>

            <button 
              onClick={() => setSelectedTime('afternoon')}
              className="w-full rounded-3xl py-6 active:scale-95 transition-all shadow-lg"
              style={{ 
                backgroundColor: selectedTime === 'afternoon' ? '#C2185B' : 'white',
                border: `3px solid ${selectedTime === 'afternoon' ? '#C2185B' : 'white'}`
              }}
            >
              <span 
                className="text-3xl" 
                style={{ 
                  fontWeight: 700, 
                  color: selectedTime === 'afternoon' ? 'white' : '#1B4D3E' 
                }}
              >
                Afternoon
              </span>
            </button>

            <button 
              onClick={() => setSelectedTime('evening')}
              className="w-full rounded-3xl py-6 active:scale-95 transition-all shadow-lg"
              style={{ 
                backgroundColor: selectedTime === 'evening' ? '#C2185B' : 'white',
                border: `3px solid ${selectedTime === 'evening' ? '#C2185B' : 'white'}`
              }}
            >
              <span 
                className="text-3xl" 
                style={{ 
                  fontWeight: 700, 
                  color: selectedTime === 'evening' ? 'white' : '#1B4D3E' 
                }}
              >
                Evening
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Save Button - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-6" style={{ backgroundColor: '#F5F5F0' }}>
        <button 
          onClick={handleSave}
          className="w-full rounded-3xl py-8 active:scale-95 transition-transform shadow-lg"
          style={{ backgroundColor: '#C2185B' }}
        >
          <span className="text-4xl" style={{ fontWeight: 700, color: 'white' }}>
            Save Reminder
          </span>
        </button>
      </div>
    </div>
  );
}
