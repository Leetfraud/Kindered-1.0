import { useState } from 'react';
import { Sparkles, Wrench, WashingMachine, Flower } from 'lucide-react';
import { Screen } from '../App';

interface RequestHelperProps {
  navigate: (screen: Screen) => void;
}

export default function RequestHelper({ navigate }: RequestHelperProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const services = [
    { id: 'cleaning', name: 'Cleaning', icon: Sparkles },
    { id: 'repairs', name: 'Repairs', icon: Wrench },
    { id: 'laundry', name: 'Laundry', icon: WashingMachine },
    { id: 'gardening', name: 'Gardening', icon: Flower },
  ];

  const timeOptions = ['Today', 'Tomorrow', 'This Week'];

  const handleRequest = () => {
    if (selectedService && selectedTime) {
      alert(`Helper requested for ${selectedService} - ${selectedTime}`);
      navigate('dashboard');
    } else {
      alert('Please select a service and time');
    }
  };

  return (
    <div className="min-h-screen flex flex-col pb-32" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-5xl mb-2" style={{ fontWeight: 700, color: '#1B4D3E' }}>
          How can we help?
        </h1>
      </div>

      {/* Service Selection Grid */}
      <div className="px-6 pb-8">
        <div className="grid grid-cols-2 gap-4">
          {services.map(service => {
            const Icon = service.icon;
            const isSelected = selectedService === service.id;
            
            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className="bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center justify-center gap-6 active:scale-95 transition-all aspect-square"
                style={{
                  border: isSelected ? '4px solid #C2185B' : '4px solid transparent'
                }}
              >
                <div 
                  className="rounded-full p-6"
                  style={{ backgroundColor: isSelected ? '#C2185B' : '#C2185B10' }}
                >
                  <Icon 
                    size={56} 
                    style={{ color: isSelected ? 'white' : '#C2185B' }} 
                    strokeWidth={2.5}
                  />
                </div>
                <span className="text-3xl" style={{ 
                  fontWeight: 700, 
                  color: isSelected ? '#C2185B' : '#1B4D3E' 
                }}>
                  {service.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Selector */}
      <div className="px-6 pb-8">
        <h2 className="text-3xl mb-6" style={{ fontWeight: 600, color: '#1B4D3E' }}>
          When?
        </h2>
        
        <div className="flex flex-col gap-4">
          {timeOptions.map(time => {
            const isSelected = selectedTime === time;
            
            return (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className="rounded-full py-6 px-8 shadow-lg active:scale-95 transition-all"
                style={{
                  backgroundColor: isSelected ? '#C2185B' : 'white',
                  border: isSelected ? '4px solid #C2185B' : '4px solid transparent'
                }}
              >
                <span className="text-3xl" style={{ 
                  fontWeight: 700, 
                  color: isSelected ? 'white' : '#1B4D3E' 
                }}>
                  {time}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Request Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6" style={{ backgroundColor: '#F5F5F0' }}>
        <button 
          onClick={handleRequest}
          className="w-full rounded-3xl py-8 active:scale-95 transition-transform shadow-lg"
          style={{ backgroundColor: '#C2185B' }}
        >
          <span className="text-3xl" style={{ fontWeight: 700, color: 'white' }}>
            Request Helper
          </span>
        </button>
      </div>
    </div>
  );
}
