import { ArrowLeft } from 'lucide-react';
import { Screen } from '../App';
import { useState } from 'react';

interface AccessibilitySettingsProps {
  navigate: (screen: Screen) => void;
}

export default function AccessibilitySettings({ navigate }: AccessibilitySettingsProps) {
  const [textSize, setTextSize] = useState<'normal' | 'extraLarge'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [voiceReadout, setVoiceReadout] = useState(false);

  const handleSave = () => {
    // Save settings logic here
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
          Settings
        </h1>
      </div>

      {/* Settings Content */}
      <div className="flex-1 px-6 space-y-6">
        {/* Text Size Setting */}
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h3 className="text-3xl mb-6" style={{ fontWeight: 700, color: '#1B4D3E' }}>
            Text Size
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setTextSize('normal')}
              className="rounded-2xl py-6 active:scale-95 transition-all"
              style={{ 
                backgroundColor: textSize === 'normal' ? '#C2185B' : 'transparent',
                border: `3px solid ${textSize === 'normal' ? '#C2185B' : '#E0E0E0'}`
              }}
            >
              <span 
                className="text-3xl" 
                style={{ 
                  fontWeight: 700, 
                  color: textSize === 'normal' ? 'white' : '#1B4D3E' 
                }}
              >
                Normal
              </span>
            </button>
            <button 
              onClick={() => setTextSize('extraLarge')}
              className="rounded-2xl py-6 active:scale-95 transition-all"
              style={{ 
                backgroundColor: textSize === 'extraLarge' ? '#C2185B' : 'transparent',
                border: `3px solid ${textSize === 'extraLarge' ? '#C2185B' : '#E0E0E0'}`
              }}
            >
              <span 
                className="text-3xl" 
                style={{ 
                  fontWeight: 700, 
                  color: textSize === 'extraLarge' ? 'white' : '#1B4D3E' 
                }}
              >
                Extra Large
              </span>
            </button>
          </div>
        </div>

        {/* High Contrast Setting */}
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-3xl mb-2" style={{ fontWeight: 700, color: '#1B4D3E' }}>
                High Contrast
              </h3>
              <p className="text-2xl" style={{ fontWeight: 500, color: '#666' }}>
                Increase visual clarity
              </p>
            </div>
            <button 
              onClick={() => setHighContrast(!highContrast)}
              className="rounded-full p-2 active:scale-95 transition-all"
              style={{ 
                backgroundColor: highContrast ? '#C2185B' : '#E0E0E0',
                width: '120px',
                height: '64px',
                position: 'relative'
              }}
            >
              <div 
                className="rounded-full bg-white absolute top-2 transition-all"
                style={{ 
                  width: '56px',
                  height: '56px',
                  left: highContrast ? '60px' : '4px'
                }}
              />
            </button>
          </div>
        </div>

        {/* Voice Readout Setting */}
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-3xl mb-2" style={{ fontWeight: 700, color: '#1B4D3E' }}>
                Read Screen to Me
              </h3>
              <p className="text-2xl" style={{ fontWeight: 500, color: '#666' }}>
                Voice assistance enabled
              </p>
            </div>
            <button 
              onClick={() => setVoiceReadout(!voiceReadout)}
              className="rounded-full p-2 active:scale-95 transition-all"
              style={{ 
                backgroundColor: voiceReadout ? '#C2185B' : '#E0E0E0',
                width: '120px',
                height: '64px',
                position: 'relative'
              }}
            >
              <div 
                className="rounded-full bg-white absolute top-2 transition-all"
                style={{ 
                  width: '56px',
                  height: '56px',
                  left: voiceReadout ? '60px' : '4px'
                }}
              />
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
            Save Changes
          </span>
        </button>
      </div>
    </div>
  );
}
