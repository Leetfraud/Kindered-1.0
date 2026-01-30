import { Mic } from 'lucide-react';
import { Screen } from '../App';

interface VoiceAssistantProps {
  navigate: (screen: Screen) => void;
}

export default function VoiceAssistant({ navigate }: VoiceAssistantProps) {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-6" 
      style={{ backgroundColor: '#F5F5F0' }}
    >
      {/* Listening Text */}
      <h1 
        className="text-6xl mb-20 text-center" 
        style={{ fontWeight: 700, color: '#1B4D3E' }}
      >
        I am listening...
      </h1>

      {/* Pulsating Microphone */}
      <div className="relative mb-20">
        {/* Outer pulse rings */}
        <div 
          className="absolute inset-0 rounded-full animate-ping"
          style={{ 
            backgroundColor: '#C2185B', 
            opacity: 0.2,
            width: '280px',
            height: '280px',
            left: '-40px',
            top: '-40px'
          }}
        />
        <div 
          className="absolute inset-0 rounded-full animate-ping"
          style={{ 
            backgroundColor: '#C2185B', 
            opacity: 0.3,
            width: '240px',
            height: '240px',
            left: '-20px',
            top: '-20px',
            animationDelay: '0.5s'
          }}
        />
        
        {/* Main microphone button */}
        <button 
          className="rounded-full flex items-center justify-center relative z-10"
          style={{ 
            backgroundColor: '#C2185B',
            width: '200px',
            height: '200px'
          }}
        >
          <Mic size={100} style={{ color: 'white' }} strokeWidth={2.5} />
        </button>
      </div>

      {/* Cancel Button */}
      <button 
        onClick={() => navigate('dashboard')}
        className="active:scale-95 transition-transform"
      >
        <span className="text-4xl" style={{ fontWeight: 600, color: '#1B4D3E' }}>
          Cancel
        </span>
      </button>
    </div>
  );
}
