import { Check } from 'lucide-react';
import { Screen } from '../App';

interface OrderConfirmationProps {
  navigate: (screen: Screen) => void;
}

export default function OrderConfirmation({ navigate }: OrderConfirmationProps) {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-6" 
      style={{ backgroundColor: '#F5F5F0' }}
    >
      {/* Success Icon */}
      <div className="mb-12">
        <div 
          className="rounded-full p-12 flex items-center justify-center"
          style={{ 
            backgroundColor: '#1B4D3E',
            width: '220px',
            height: '220px'
          }}
        >
          <Check size={120} style={{ color: 'white' }} strokeWidth={4} />
        </div>
      </div>

      {/* Success Message */}
      <div className="text-center mb-4">
        <h1 className="text-6xl mb-4" style={{ fontWeight: 700, color: '#1B4D3E' }}>
          Order Successful!
        </h1>
        <p className="text-3xl" style={{ fontWeight: 500, color: '#666' }}>
          David has been notified.
        </p>
      </div>

      {/* Track Order Button */}
      <div className="mt-12">
        <button 
          onClick={() => navigate('orderTracking')}
          className="px-12 py-5 rounded-3xl active:scale-95 transition-transform"
          style={{ 
            backgroundColor: 'transparent',
            border: '3px solid #1B4D3E'
          }}
        >
          <span className="text-3xl" style={{ fontWeight: 700, color: '#1B4D3E' }}>
            Track Your Order
          </span>
        </button>
      </div>

      {/* Return to Home Button - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-6" style={{ backgroundColor: '#F5F5F0' }}>
        <button 
          onClick={() => navigate('dashboard')}
          className="w-full rounded-3xl py-8 active:scale-95 transition-transform shadow-lg"
          style={{ backgroundColor: '#C2185B' }}
        >
          <span className="text-4xl" style={{ fontWeight: 700, color: 'white' }}>
            Return to Home
          </span>
        </button>
      </div>
    </div>
  );
}