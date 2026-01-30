import { Phone, AlertCircle } from 'lucide-react';
import silhouetteImage from 'figma:asset/b4cdaa120fb9379b93ba10104a5dbe0af15b97f4.png';
import { Screen } from '../App';

interface EmergencyProps {
  navigate: (screen: Screen) => void;
}

export default function Emergency({ navigate }: EmergencyProps) {
  const emergencyContacts = [
    { name: 'David', relation: 'Son', phone: '555-0123' },
    { name: 'Sarah', relation: 'Daughter', phone: '555-0124' },
    { name: 'Dr. Wilson', relation: 'Doctor', phone: '555-0125' },
  ];

  return (
    <div className="min-h-screen flex flex-col pb-8" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-5xl mb-2" style={{ fontWeight: 700, color: '#C2185B' }}>
          Emergency
        </h1>
        <p className="text-2xl" style={{ fontWeight: 600, color: '#666' }}>
          Get help quickly
        </p>
      </div>

      {/* Main Emergency Button */}
      <div className="px-6 pb-8 flex justify-center">
        <button 
          onClick={() => alert('Calling 911...')}
          className="rounded-full shadow-2xl active:scale-95 transition-transform flex flex-col items-center justify-center"
          style={{ 
            backgroundColor: '#C2185B',
            width: '280px',
            height: '280px'
          }}
        >
          <AlertCircle size={80} style={{ color: 'white' }} strokeWidth={2.5} />
          <span className="text-4xl mt-6" style={{ fontWeight: 700, color: 'white' }}>
            Call
          </span>
          <span className="text-5xl" style={{ fontWeight: 700, color: 'white' }}>
            Emergency
          </span>
          <span className="text-4xl mt-2" style={{ fontWeight: 700, color: 'white' }}>
            911
          </span>
        </button>
      </div>

      {/* Family Contacts */}
      <div className="px-6">
        <h2 className="text-3xl mb-6" style={{ fontWeight: 600, color: '#1B4D3E' }}>
          Quick Contacts
        </h2>

        <div className="flex flex-col gap-4">
          {emergencyContacts.map((contact, index) => (
            <button 
              key={index}
              onClick={() => alert(`Calling ${contact.name}...`)}
              className="bg-white rounded-3xl p-6 shadow-lg flex items-center gap-6 active:scale-95 transition-transform"
            >
              <img 
                src={silhouetteImage}
                alt={contact.name}
                className="rounded-full object-cover"
                style={{ width: '80px', height: '80px' }}
              />
              <div className="flex-1 text-left">
                <h3 className="text-3xl mb-1" style={{ fontWeight: 700, color: '#1B4D3E' }}>
                  {contact.name}
                </h3>
                <p className="text-xl" style={{ color: '#666' }}>
                  {contact.relation}
                </p>
              </div>
              <div 
                className="rounded-full p-4"
                style={{ backgroundColor: '#C2185B' }}
              >
                <Phone size={32} style={{ color: 'white' }} strokeWidth={2.5} />
              </div>
            </button>
          ))}
        </div>

        {/* Back Button */}
        <button 
          onClick={() => navigate('dashboard')}
          className="w-full mt-8 bg-white rounded-3xl py-6 shadow-lg active:scale-95 transition-transform"
          style={{ border: '2px solid #1B4D3E' }}
        >
          <span className="text-3xl" style={{ fontWeight: 600, color: '#1B4D3E' }}>
            Back to Home
          </span>
        </button>
      </div>
    </div>
  );
}
