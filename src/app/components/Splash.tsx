import { Heart } from 'lucide-react';
import { Screen } from '../App';

interface SplashProps {
  navigate: (screen: Screen) => void;
}

export default function Splash({ navigate }: SplashProps) {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-6" 
      style={{ backgroundColor: '#F5F5F0' }}
    >
      {/* Logo/Icon */}
      <div className="mb-8">
        <div 
          className="rounded-full p-12 flex items-center justify-center"
          style={{ 
            backgroundColor: '#1B4D3E',
            width: '240px',
            height: '240px'
          }}
        >
          <Heart size={140} style={{ color: 'white' }} strokeWidth={2.5} fill="white" />
        </div>
      </div>

      {/* Logo Text */}
      <h1 className="text-7xl mb-6" style={{ fontWeight: 700, color: '#1B4D3E' }}>
        Kindred
      </h1>

      {/* Slogan */}
      <p className="text-4xl mb-20 text-center" style={{ fontWeight: 500, color: '#666' }}>
        Simple. Safe. Connected.
      </p>

      {/* Tap to Start Button - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-6" style={{ backgroundColor: '#F5F5F0' }}>
        <button 
          onClick={() => navigate('login')}
          className="w-full rounded-3xl py-8 active:scale-95 transition-transform shadow-lg"
          style={{ backgroundColor: '#C2185B' }}
        >
          <span className="text-4xl" style={{ fontWeight: 700, color: 'white' }}>
            Tap to Start
          </span>
        </button>
      </div>
    </div>
  );
}
