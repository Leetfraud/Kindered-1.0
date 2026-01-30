import { ArrowLeft, Phone, Check } from 'lucide-react';
import { Screen } from '../App';

interface OrderTrackingProps {
  navigate: (screen: Screen) => void;
}

export default function OrderTracking({ navigate }: OrderTrackingProps) {
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
          Track Order
        </h1>
      </div>

      {/* Timeline Section */}
      <div className="flex-1 px-6 pt-8">
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div 
              className="absolute left-8 top-0 bottom-0"
              style={{ 
                width: '6px', 
                backgroundColor: '#E0E0E0',
                marginTop: '50px',
                marginBottom: '50px'
              }}
            />

            {/* Step 1: Ordered (Completed) */}
            <div className="relative flex items-start gap-8 mb-16">
              <div 
                className="rounded-full p-4 z-10 flex items-center justify-center"
                style={{ 
                  backgroundColor: '#1B4D3E',
                  width: '72px',
                  height: '72px',
                  flexShrink: 0
                }}
              >
                <Check size={40} style={{ color: 'white' }} strokeWidth={3} />
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-4xl mb-2" style={{ fontWeight: 700, color: '#1B4D3E' }}>
                  Ordered
                </h3>
                <p className="text-2xl" style={{ fontWeight: 500, color: '#666' }}>
                  Order placed successfully
                </p>
                <p className="text-xl mt-1" style={{ fontWeight: 500, color: '#999' }}>
                  Today, 10:30 AM
                </p>
              </div>
            </div>

            {/* Step 2: On the Way (Active) */}
            <div className="relative flex items-start gap-8 mb-16">
              <div 
                className="rounded-full z-10 flex items-center justify-center relative"
                style={{ 
                  backgroundColor: '#C2185B',
                  width: '72px',
                  height: '72px',
                  flexShrink: 0
                }}
              >
                {/* Pulsing animation */}
                <div 
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ backgroundColor: '#C2185B', opacity: 0.4 }}
                />
                <div 
                  className="rounded-full z-10"
                  style={{ 
                    backgroundColor: 'white',
                    width: '24px',
                    height: '24px'
                  }}
                />
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-4xl mb-2" style={{ fontWeight: 700, color: '#C2185B' }}>
                  On the Way
                </h3>
                <p className="text-2xl" style={{ fontWeight: 500, color: '#666' }}>
                  Driver is heading to you
                </p>
                <p className="text-xl mt-1" style={{ fontWeight: 500, color: '#999' }}>
                  Estimated: 15 minutes
                </p>
              </div>
            </div>

            {/* Step 3: Arrived (Pending) */}
            <div className="relative flex items-start gap-8">
              <div 
                className="rounded-full z-10"
                style={{ 
                  backgroundColor: '#E0E0E0',
                  width: '72px',
                  height: '72px',
                  flexShrink: 0
                }}
              />
              <div className="flex-1 pt-3">
                <h3 className="text-4xl mb-2" style={{ fontWeight: 700, color: '#999' }}>
                  Arrived
                </h3>
                <p className="text-2xl" style={{ fontWeight: 500, color: '#999' }}>
                  Awaiting delivery
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Driver Card */}
        <div className="bg-white rounded-3xl p-6 shadow-lg mt-6">
          <p className="text-2xl mb-4" style={{ fontWeight: 600, color: '#666' }}>
            Your Driver
          </p>
          <div className="flex items-center gap-6">
            <img 
              src="https://images.unsplash.com/photo-1758726949080-d8b1e8acac63?w=200"
              alt="Driver"
              className="rounded-full object-cover"
              style={{ width: '90px', height: '90px' }}
            />
            <div className="flex-1">
              <h3 className="text-4xl mb-1" style={{ fontWeight: 700, color: '#1B4D3E' }}>
                Michael Chen
              </h3>
              <p className="text-2xl" style={{ fontWeight: 500, color: '#666' }}>
                ★ 4.9 Rating
              </p>
            </div>
          </div>

          {/* Call Driver Button */}
          <button 
            className="w-full mt-6 rounded-3xl py-6 flex items-center justify-center gap-3 active:scale-95 transition-transform"
            style={{ backgroundColor: '#1B4D3E' }}
          >
            <Phone size={36} style={{ color: 'white' }} strokeWidth={2.5} />
            <span className="text-3xl" style={{ fontWeight: 700, color: 'white' }}>
              Call Driver
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
