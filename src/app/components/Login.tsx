import { Heart } from 'lucide-react';
import { Screen } from '../App';

interface LoginProps {
  navigate: (screen: Screen) => void;
}

export default function Login({ navigate }: LoginProps) {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-6" 
      style={{ backgroundColor: '#F5F5F0' }}
    >
      {/* Logo */}
      <div className="mb-12">
        <div 
          className="rounded-full p-10 flex items-center justify-center"
          style={{ 
            backgroundColor: '#1B4D3E',
            width: '180px',
            height: '180px'
          }}
        >
          <Heart size={100} style={{ color: 'white' }} strokeWidth={2.5} fill="white" />
        </div>
      </div>

      {/* Welcome Text */}
      <h1 className="text-6xl mb-3" style={{ fontWeight: 700, color: '#1B4D3E' }}>
        Welcome Back
      </h1>
      <p className="text-3xl mb-12 text-center" style={{ fontWeight: 500, color: '#666' }}>
        Sign in to continue
      </p>

      {/* Login Form */}
      <div className="w-full max-w-lg space-y-6 mb-12">
        {/* Username Input */}
        <div className="bg-white rounded-3xl px-6 py-6 shadow-lg">
          <input 
            type="text"
            placeholder="Username"
            className="w-full text-3xl outline-none"
            style={{ fontWeight: 500, color: '#1B4D3E' }}
          />
        </div>

        {/* Password Input */}
        <div className="bg-white rounded-3xl px-6 py-6 shadow-lg">
          <input 
            type="password"
            placeholder="Password"
            className="w-full text-3xl outline-none"
            style={{ fontWeight: 500, color: '#1B4D3E' }}
          />
        </div>
      </div>

      {/* Login Button - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-6" style={{ backgroundColor: '#F5F5F0' }}>
        <button 
          onClick={() => navigate('dashboard')}
          className="w-full rounded-3xl py-8 active:scale-95 transition-transform shadow-lg"
          style={{ backgroundColor: '#C2185B' }}
        >
          <span className="text-4xl" style={{ fontWeight: 700, color: 'white' }}>
            Sign In
          </span>
        </button>
      </div>
    </div>
  );
}
