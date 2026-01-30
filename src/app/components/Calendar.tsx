import { ArrowLeft, Plus } from 'lucide-react';
import { Screen } from '../App';

interface CalendarProps {
  navigate: (screen: Screen) => void;
}

export default function Calendar({ navigate }: CalendarProps) {
  const appointments = [
    { date: '29', month: 'DEC', title: 'Dr. Smith Checkup', time: '10:00 AM', color: '#C2185B' },
    { date: '02', month: 'JAN', title: 'Dentist Cleaning', time: '2:00 PM', color: '#C2185B' },
    { date: '05', month: 'JAN', title: 'Physical Therapy', time: '9:30 AM', color: '#C2185B' },
    { date: '10', month: 'JAN', title: 'Eye Exam', time: '11:00 AM', color: '#C2185B' },
  ];

  return (
    <div className="min-h-screen flex flex-col pb-32" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-6 flex items-center gap-4">
        <button 
          onClick={() => navigate('dashboard')}
          className="p-3 rounded-full active:scale-95 transition-transform"
          style={{ backgroundColor: '#1B4D3E' }}
        >
          <ArrowLeft size={32} style={{ color: 'white' }} strokeWidth={2.5} />
        </button>
        <h1 className="text-5xl" style={{ fontWeight: 700, color: '#1B4D3E' }}>
          My Schedule
        </h1>
      </div>

      {/* Appointments List */}
      <div className="flex-1 px-6 pb-6">
        <div className="flex flex-col gap-4">
          {appointments.map((appointment, index) => (
            <button 
              key={index}
              className="bg-white rounded-3xl p-6 shadow-lg flex items-center gap-6 active:scale-95 transition-transform"
            >
              {/* Date Block */}
              <div 
                className="rounded-2xl flex flex-col items-center justify-center"
                style={{ 
                  backgroundColor: appointment.color,
                  minWidth: '100px',
                  minHeight: '100px'
                }}
              >
                <span className="text-4xl" style={{ fontWeight: 700, color: 'white' }}>
                  {appointment.date}
                </span>
                <span className="text-xl" style={{ fontWeight: 600, color: 'white' }}>
                  {appointment.month}
                </span>
              </div>

              {/* Event Details */}
              <div className="flex-1 text-left">
                <h3 className="text-3xl mb-2" style={{ fontWeight: 700, color: '#1B4D3E' }}>
                  {appointment.title}
                </h3>
                <p className="text-2xl" style={{ fontWeight: 600, color: '#666' }}>
                  {appointment.time}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Add Event Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6" style={{ backgroundColor: '#F5F5F0' }}>
        <button 
          onClick={() => navigate('addEvent')}
          className="w-full rounded-3xl py-8 active:scale-95 transition-transform shadow-lg flex items-center justify-center gap-4"
          style={{ backgroundColor: '#2C5F2D' }}
        >
          <Plus size={40} style={{ color: 'white' }} strokeWidth={2.5} />
          <span className="text-3xl" style={{ fontWeight: 700, color: 'white' }}>
            Add Event
          </span>
        </button>
      </div>
    </div>
  );
}