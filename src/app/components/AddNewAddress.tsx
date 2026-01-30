import { ArrowLeft, Mic } from 'lucide-react';
import { Screen } from '../App';
import { useState } from 'react';

interface AddNewAddressProps {
  navigate: (screen: Screen) => void;
}

export default function AddNewAddress({ navigate }: AddNewAddressProps) {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSave = () => {
    // Save address logic here
    navigate('profile');
  };

  return (
    <div className="min-h-screen flex flex-col pb-32" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-6 flex items-center gap-4">
        <button 
          onClick={() => navigate('profile')}
          className="p-3 rounded-full active:scale-95 transition-transform"
          style={{ backgroundColor: '#1B4D3E' }}
        >
          <ArrowLeft size={32} style={{ color: 'white' }} strokeWidth={2.5} />
        </button>
        <h1 className="text-5xl" style={{ fontWeight: 700, color: '#1B4D3E' }}>
          New Address
        </h1>
      </div>

      {/* Form Inputs */}
      <div className="flex-1 px-6 space-y-6">
        {/* Street Name Input */}
        <div>
          <label className="text-2xl mb-3 block" style={{ fontWeight: 600, color: '#1B4D3E' }}>
            Street Name
          </label>
          <div className="bg-white rounded-3xl px-6 py-6 flex items-center gap-4 shadow-lg">
            <input 
              type="text"
              placeholder="123 Main Street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="flex-1 text-3xl outline-none"
              style={{ fontWeight: 500, color: '#1B4D3E' }}
            />
            <button 
              onClick={() => navigate('voiceAssistant')}
              className="p-3 rounded-full active:scale-95 transition-transform flex-shrink-0"
              style={{ backgroundColor: '#C2185B' }}
            >
              <Mic size={28} style={{ color: 'white' }} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* City Input */}
        <div>
          <label className="text-2xl mb-3 block" style={{ fontWeight: 600, color: '#1B4D3E' }}>
            City
          </label>
          <div className="bg-white rounded-3xl px-6 py-6 flex items-center gap-4 shadow-lg">
            <input 
              type="text"
              placeholder="Springfield"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-1 text-3xl outline-none"
              style={{ fontWeight: 500, color: '#1B4D3E' }}
            />
            <button 
              onClick={() => navigate('voiceAssistant')}
              className="p-3 rounded-full active:scale-95 transition-transform flex-shrink-0"
              style={{ backgroundColor: '#C2185B' }}
            >
              <Mic size={28} style={{ color: 'white' }} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Zip Code Input */}
        <div>
          <label className="text-2xl mb-3 block" style={{ fontWeight: 600, color: '#1B4D3E' }}>
            Zip Code
          </label>
          <div className="bg-white rounded-3xl px-6 py-6 flex items-center gap-4 shadow-lg">
            <input 
              type="text"
              placeholder="12345"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="flex-1 text-3xl outline-none"
              style={{ fontWeight: 500, color: '#1B4D3E' }}
            />
            <button 
              onClick={() => navigate('voiceAssistant')}
              className="p-3 rounded-full active:scale-95 transition-transform flex-shrink-0"
              style={{ backgroundColor: '#C2185B' }}
            >
              <Mic size={28} style={{ color: 'white' }} strokeWidth={2.5} />
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
            Save Address
          </span>
        </button>
      </div>
    </div>
  );
}
