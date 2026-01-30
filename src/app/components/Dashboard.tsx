import { Sun, Pill, ShoppingBasket, Calendar, Phone, AlertCircle, HandHeart, Package, Heart } from 'lucide-react';
import silhouetteImage from 'figma:asset/b4cdaa120fb9379b93ba10104a5dbe0af15b97f4.png';
import BottomNav from './BottomNav';
import { Screen } from '../App';

interface DashboardProps {
  navigate: (screen: Screen) => void;
}

export default function Dashboard({ navigate }: DashboardProps) {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-6 relative">
        <h1 className="text-5xl mb-3" style={{ fontWeight: 700, color: '#1B4D3E' }}>
          Good Morning, Martha
        </h1>
        
        {/* Emergency Button */}
        <button
          onClick={() => navigate('emergency')}
          className="absolute top-12 right-6 p-3 rounded-full active:scale-95 transition-transform"
          style={{ backgroundColor: '#C2185B' }}
        >
          <AlertCircle size={32} style={{ color: 'white' }} strokeWidth={2.5} />
        </button>
        
        {/* Date and Weather Widget */}
        <div className="flex items-center gap-6">
          <p className="text-2xl" style={{ fontWeight: 600, color: '#666' }}>
            {formattedDate}
          </p>
          <div className="flex items-center gap-2">
            <Sun 
              size={32} 
              style={{ color: '#2C5F2D' }} 
              strokeWidth={2.5}
            />
            <span className="text-2xl" style={{ fontWeight: 600, color: '#2C5F2D' }}>
              72°
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section - Emergency Contact Card */}
      <div className="px-6 pb-6">
        <button 
          onClick={() => navigate('emergency')}
          className="w-full bg-white rounded-3xl p-6 flex items-center gap-6 active:scale-95 transition-transform"
          style={{ 
            border: '4px solid #C2185B',
            minHeight: '140px'
          }}
        >
          <img 
            src={silhouetteImage}
            alt="David"
            className="rounded-full object-cover"
            style={{ width: '90px', height: '90px' }}
          />
          <div className="flex-1 flex items-center justify-between">
            <span className="text-4xl" style={{ fontWeight: 700, color: '#1B4D3E' }}>
              Call David
            </span>
            <div 
              className="rounded-full p-4"
              style={{ backgroundColor: '#C2185B' }}
            >
              <Phone 
                size={40} 
                style={{ color: 'white' }} 
                strokeWidth={2.5}
              />
            </div>
          </div>
        </button>
      </div>

      {/* Task Section */}
      <div className="flex-1 px-6 pb-32">
        <h2 className="text-3xl mb-6" style={{ fontWeight: 600, color: '#1B4D3E' }}>
          Your Day
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          {/* Card 1: Medication */}
          <button 
            onClick={() => navigate('medication')}
            className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center justify-center gap-4 active:scale-95 transition-transform aspect-square"
          >
            <div 
              className="rounded-full p-5"
              style={{ backgroundColor: '#C2185B10' }}
            >
              <Pill 
                size={48} 
                style={{ color: '#C2185B' }} 
                strokeWidth={2.5}
              />
            </div>
            <span className="text-2xl text-center" style={{ fontWeight: 600, color: '#1B4D3E' }}>
              Medication
            </span>
          </button>

          {/* Card 2: Groceries */}
          <button 
            onClick={() => navigate('groceryList')}
            className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center justify-center gap-4 active:scale-95 transition-transform aspect-square"
          >
            <div 
              className="rounded-full p-5"
              style={{ backgroundColor: '#C2185B10' }}
            >
              <ShoppingBasket 
                size={48} 
                style={{ color: '#C2185B' }} 
                strokeWidth={2.5}
              />
            </div>
            <span className="text-2xl text-center" style={{ fontWeight: 600, color: '#1B4D3E' }}>
              Groceries
            </span>
          </button>

          {/* Card 3: Need a Helper */}
          <button 
            onClick={() => navigate('requestHelper')}
            className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center justify-center gap-4 active:scale-95 transition-transform aspect-square"
          >
            <div 
              className="rounded-full p-5"
              style={{ backgroundColor: '#C2185B10' }}
            >
              <HandHeart 
                size={48} 
                style={{ color: '#C2185B' }} 
                strokeWidth={2.5}
              />
            </div>
            <span className="text-2xl text-center" style={{ fontWeight: 600, color: '#1B4D3E' }}>
              Need a Helper
            </span>
          </button>

          {/* Card 4: Appointments */}
          <button 
            onClick={() => navigate('calendar')}
            className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center justify-center gap-4 active:scale-95 transition-transform aspect-square"
          >
            <div 
              className="rounded-full p-5"
              style={{ backgroundColor: '#C2185B10' }}
            >
              <Calendar 
                size={48} 
                style={{ color: '#C2185B' }} 
                strokeWidth={2.5}
              />
            </div>
            <span className="text-2xl text-center" style={{ fontWeight: 600, color: '#1B4D3E' }}>
              Appointments
            </span>
          </button>

          {/* Card 5: Medicine Order */}
          <button 
            onClick={() => navigate('medicineOrder')}
            className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center justify-center gap-4 active:scale-95 transition-transform aspect-square"
          >
            <div 
              className="rounded-full p-5"
              style={{ backgroundColor: '#C2185B10' }}
            >
              <Package 
                size={48} 
                style={{ color: '#C2185B' }} 
                strokeWidth={2.5}
              />
            </div>
            <span className="text-2xl text-center" style={{ fontWeight: 600, color: '#1B4D3E' }}>
              Order Medicine
            </span>
          </button>

          {/* Card 6: Family Updates */}
          <button 
            onClick={() => navigate('familyPostcards')}
            className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center justify-center gap-4 active:scale-95 transition-transform aspect-square"
          >
            <div 
              className="rounded-full p-5"
              style={{ backgroundColor: '#C2185B10' }}
            >
              <Heart 
                size={48} 
                style={{ color: '#C2185B' }} 
                strokeWidth={2.5}
              />
            </div>
            <span className="text-2xl text-center" style={{ fontWeight: 600, color: '#1B4D3E' }}>
              Family Updates
            </span>
          </button>
        </div>
      </div>

      <BottomNav active="home" navigate={navigate} />
    </div>
  );
}