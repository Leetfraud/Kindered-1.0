import { ArrowLeft, Mic, Camera } from 'lucide-react';
import { Screen } from '../App';

interface MedicineOrderProps {
  navigate: (screen: Screen) => void;
  onAddToCart?: () => void;
}

export default function MedicineOrder({ navigate, onAddToCart }: MedicineOrderProps) {
  const medicines = [
    { 
      id: 1, 
      name: 'Aspirin 100mg', 
      price: 8.99, 
      image: 'https://images.unsplash.com/photo-1631669969504-f35518bf96ba?w=200',
      description: '30 tablets'
    },
    { 
      id: 2, 
      name: 'Vitamin D3', 
      price: 12.49, 
      image: 'https://images.unsplash.com/photo-1683394541762-f96c0d03dc38?w=200',
      description: '60 capsules'
    },
    { 
      id: 3, 
      name: 'Blood Pressure Monitor', 
      price: 45.99, 
      image: 'https://images.unsplash.com/photo-1573883430161-de43a5c74d3d?w=200',
      description: 'Digital monitor'
    },
    { 
      id: 4, 
      name: 'Calcium Tablets', 
      price: 15.99, 
      image: 'https://images.unsplash.com/photo-1631669969504-f35518bf96ba?w=200',
      description: '90 tablets'
    },
  ];

  const handleAddItem = () => {
    // Navigate to order confirmation screen
    navigate('orderConfirmation');
  };

  return (
    <div className="min-h-screen flex flex-col pb-8" style={{ backgroundColor: '#F5F5F0' }}>
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
          Order Medicine
        </h1>
      </div>

      {/* Search Bar */}
      <div className="px-6 pb-4">
        <div className="bg-white rounded-3xl px-6 py-6 flex items-center gap-4 shadow-lg">
          <input 
            type="text"
            placeholder="Search medicine..."
            className="flex-1 text-3xl outline-none"
            style={{ fontWeight: 500, color: '#1B4D3E' }}
          />
          <button 
            onClick={() => navigate('voiceAssistant')}
            className="p-3 rounded-full active:scale-95 transition-transform"
            style={{ backgroundColor: '#C2185B' }}
          >
            <Mic size={32} style={{ color: 'white' }} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Upload Prescription Card */}
      <div className="px-6 pb-6">
        <button 
          className="w-full bg-white rounded-3xl p-6 flex items-center justify-center gap-4 shadow-lg active:scale-95 transition-transform"
          style={{ borderWidth: '3px', borderStyle: 'dashed', borderColor: '#C2185B' }}
        >
          <div 
            className="rounded-full p-4"
            style={{ backgroundColor: '#C2185B10' }}
          >
            <Camera size={40} style={{ color: '#C2185B' }} strokeWidth={2.5} />
          </div>
          <span className="text-3xl" style={{ fontWeight: 700, color: '#C2185B' }}>
            Upload Prescription
          </span>
        </button>
      </div>

      {/* Medicine List */}
      <div className="flex-1 px-6">
        <h2 className="text-3xl mb-6" style={{ fontWeight: 600, color: '#1B4D3E' }}>
          Popular Items
        </h2>
        
        <div className="flex flex-col gap-4">
          {medicines.map((medicine) => (
            <div 
              key={medicine.id}
              className="bg-white rounded-3xl p-5 shadow-lg flex items-center gap-5"
            >
              <img 
                src={medicine.image}
                alt={medicine.name}
                className="rounded-2xl object-cover"
                style={{ width: '100px', height: '100px' }}
              />
              <div className="flex-1">
                <h3 className="text-3xl mb-1" style={{ fontWeight: 700, color: '#1B4D3E' }}>
                  {medicine.name}
                </h3>
                <p className="text-xl mb-2" style={{ fontWeight: 500, color: '#666' }}>
                  {medicine.description}
                </p>
                <p className="text-3xl" style={{ fontWeight: 700, color: '#1B4D3E' }}>
                  ${medicine.price.toFixed(2)}
                </p>
              </div>
              <button 
                onClick={handleAddItem}
                className="rounded-full px-8 py-4 active:scale-95 transition-transform"
                style={{ backgroundColor: '#C2185B' }}
              >
                <span className="text-3xl" style={{ fontWeight: 700, color: 'white' }}>
                  ADD
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}