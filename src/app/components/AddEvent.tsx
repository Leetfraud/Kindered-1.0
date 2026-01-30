import { useState } from 'react';
import { ArrowLeft, Mic } from 'lucide-react';
import { Screen } from '../App';

interface AddEventProps {
  navigate: (screen: Screen) => void;
}

export default function AddEvent({ navigate }: AddEventProps) {
  const [title, setTitle] = useState('');
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeSlots = [
    { id: 'morning', label: 'Morning (9 AM - 12 PM)' },
    { id: 'afternoon', label: 'Afternoon (12 PM - 4 PM)' },
    { id: 'evening', label: 'Evening (4 PM - 8 PM)' },
  ];

  const handleSave = () => {
    if (title && selectedTime) {
      alert(`Appointment saved: ${title} - ${selectedTime}`);
      navigate('calendar');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="min-h-screen flex flex-col pb-32" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-6 flex items-center gap-4">
        <button 
          onClick={() => navigate('calendar')}
          className="p-3 rounded-full active:scale-95 transition-transform"
          style={{ backgroundColor: '#1B4D3E' }}
        >
          <ArrowLeft size={32} style={{ color: 'white' }} strokeWidth={2.5} />
        </button>
        <h1 className="text-5xl" style={{ fontWeight: 700, color: '#1B4D3E' }}>
          New Appointment
        </h1>
      </div>

      {/* Title Input */}
      <div className="px-6 pb-8">
        <label className="block mb-4">
          <span className="text-3xl" style={{ fontWeight: 600, color: '#1B4D3E' }}>
            What is it?
          </span>
        </label>
        
        <div className="relative">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Doctor's Appointment"
            className="w-full rounded-3xl py-6 px-8 pr-20 shadow-lg"
            style={{
              border: '3px solid #E5E5E5',
              fontSize: '28px',
              fontWeight: 600,
              color: '#1B4D3E'
            }}
          />
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full active:scale-95 transition-transform"
            style={{ backgroundColor: '#C2185B' }}
            onClick={() => alert('Voice input activated')}
          >
            <Mic size={32} style={{ color: 'white' }} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Time Selection */}
      <div className="px-6 pb-8">
        <h2 className="text-3xl mb-6" style={{ fontWeight: 600, color: '#1B4D3E' }}>
          When?
        </h2>
        
        <div className="flex flex-col gap-4">
          {timeSlots.map(slot => {
            const isSelected = selectedTime === slot.id;
            
            return (
              <button
                key={slot.id}
                onClick={() => setSelectedTime(slot.id)}
                className="bg-white rounded-3xl py-8 px-8 shadow-lg active:scale-95 transition-all"
                style={{
                  border: isSelected ? '4px solid #C2185B' : '4px solid transparent'
                }}
              >
                <span className="text-3xl" style={{ 
                  fontWeight: 700, 
                  color: isSelected ? '#C2185B' : '#1B4D3E' 
                }}>
                  {slot.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Save Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6" style={{ backgroundColor: '#F5F5F0' }}>
        <button 
          onClick={handleSave}
          className="w-full rounded-3xl py-8 active:scale-95 transition-transform shadow-lg"
          style={{ backgroundColor: '#C2185B' }}
        >
          <span className="text-3xl" style={{ fontWeight: 700, color: 'white' }}>
            Save Appointment
          </span>
        </button>
      </div>
    </div>
  );
}
