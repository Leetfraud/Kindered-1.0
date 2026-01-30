import { MapPin, CreditCard, Settings, LogOut } from 'lucide-react';
import silhouetteImage from 'figma:asset/b4cdaa120fb9379b93ba10104a5dbe0af15b97f4.png';
import BottomNav from './BottomNav';
import { Screen } from '../App';

interface ProfileProps {
  navigate: (screen: Screen) => void;
}

export default function Profile({ navigate }: ProfileProps) {
  return (
    <div className="min-h-screen flex flex-col pb-32" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-5xl mb-8" style={{ fontWeight: 700, color: '#1B4D3E' }}>
          My Profile
        </h1>

        {/* User Info Card */}
        <div className="bg-white rounded-3xl p-8 shadow-lg flex items-center gap-6 mb-6">
          <img 
            src={silhouetteImage}
            alt="Martha Smith"
            className="rounded-full object-cover"
            style={{ width: '100px', height: '100px' }}
          />
          <div>
            <h2 className="text-3xl mb-2" style={{ fontWeight: 700, color: '#1B4D3E' }}>
              Martha Smith
            </h2>
            <p className="text-xl" style={{ color: '#666' }}>
              martha.smith@email.com
            </p>
          </div>
        </div>
      </div>

      {/* Settings Menu */}
      <div className="flex-1 px-6">
        <div className="flex flex-col gap-4">
          <button 
            onClick={() => navigate('addNewAddress')}
            className="bg-white rounded-3xl p-8 shadow-lg flex items-center gap-6 active:scale-95 transition-transform"
          >
            <div 
              className="rounded-full p-5"
              style={{ backgroundColor: '#C2185B10' }}
            >
              <MapPin 
                size={40} 
                style={{ color: '#C2185B' }} 
                strokeWidth={2.5}
              />
            </div>
            <span className="text-3xl" style={{ fontWeight: 600, color: '#1B4D3E' }}>
              My Address
            </span>
          </button>

          <button 
            className="bg-white rounded-3xl p-8 shadow-lg flex items-center gap-6 active:scale-95 transition-transform"
          >
            <div 
              className="rounded-full p-5"
              style={{ backgroundColor: '#C2185B10' }}
            >
              <CreditCard 
                size={40} 
                style={{ color: '#C2185B' }} 
                strokeWidth={2.5}
              />
            </div>
            <span className="text-3xl" style={{ fontWeight: 600, color: '#1B4D3E' }}>
              Payment Methods
            </span>
          </button>

          <button 
            onClick={() => navigate('accessibilitySettings')}
            className="bg-white rounded-3xl p-8 shadow-lg flex items-center gap-6 active:scale-95 transition-transform"
          >
            <div 
              className="rounded-full p-5"
              style={{ backgroundColor: '#C2185B10' }}
            >
              <Settings 
                size={40} 
                style={{ color: '#C2185B' }} 
                strokeWidth={2.5}
              />
            </div>
            <span className="text-3xl" style={{ fontWeight: 600, color: '#1B4D3E' }}>
              Accessibility Settings
            </span>
          </button>

          {/* Logout Button */}
          <button 
            onClick={() => alert('Logged out successfully')}
            className="bg-white rounded-3xl p-8 shadow-lg flex items-center gap-6 active:scale-95 transition-transform mt-4"
            style={{ border: '4px solid #C2185B' }}
          >
            <div 
              className="rounded-full p-5"
              style={{ backgroundColor: '#C2185B10' }}
            >
              <LogOut 
                size={40} 
                style={{ color: '#C2185B' }} 
                strokeWidth={2.5}
              />
            </div>
            <span className="text-3xl" style={{ fontWeight: 600, color: '#C2185B' }}>
              Log Out
            </span>
          </button>
        </div>
      </div>

      <BottomNav active="profile" navigate={navigate} />
    </div>
  );
}