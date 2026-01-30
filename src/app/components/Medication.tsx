import { ArrowLeft, Pill, Check } from 'lucide-react';
import { Screen } from '../App';

interface MedicationProps {
  navigate: (screen: Screen) => void;
  medicationStates: {
    morning: boolean;
    bloodPressure: boolean;
  };
  takeMedication: (medicationId: 'morning' | 'bloodPressure') => void;
}

export default function Medication({ navigate, medicationStates, takeMedication }: MedicationProps) {
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
          Medication
        </h1>
      </div>

      {/* Medication List */}
      <div className="flex-1 px-6">
        <div className="flex flex-col gap-6">
          {/* Active Card - Morning Pills */}
          <div 
            className="rounded-3xl p-8 shadow-lg"
            style={{ 
              backgroundColor: medicationStates.morning ? '#E8E8E8' : 'white'
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl mb-2" style={{ 
                  fontWeight: 700, 
                  color: medicationStates.morning ? '#666' : '#1B4D3E'
                }}>
                  Morning Pills
                </h2>
                <p className="text-2xl" style={{ 
                  fontWeight: 600, 
                  color: medicationStates.morning ? '#999' : '#666'
                }}>
                  8:00 AM
                </p>
              </div>
              {medicationStates.morning && (
                <div 
                  className="rounded-full p-4"
                  style={{ backgroundColor: '#2C5F2D' }}
                >
                  <Check size={48} style={{ color: 'white' }} strokeWidth={3} />
                </div>
              )}
            </div>

            <div className="flex items-center gap-6 mb-6">
              <div 
                className="rounded-full p-6"
                style={{ backgroundColor: medicationStates.morning ? '#C2185B20' : '#C2185B10' }}
              >
                <Pill 
                  size={56} 
                  style={{ color: medicationStates.morning ? '#999' : '#C2185B' }} 
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <p className="text-2xl" style={{ 
                  fontWeight: 600, 
                  color: medicationStates.morning ? '#999' : '#1B4D3E'
                }}>
                  2 Pills
                </p>
                <p className="text-xl" style={{ color: '#999' }}>
                  With food
                </p>
              </div>
            </div>

            {!medicationStates.morning && (
              <button 
                onClick={() => takeMedication('morning')}
                className="w-full rounded-3xl py-6 active:scale-95 transition-transform"
                style={{ backgroundColor: '#C2185B' }}
              >
                <span className="text-3xl" style={{ fontWeight: 700, color: 'white' }}>
                  TAKE NOW
                </span>
              </button>
            )}

            {medicationStates.morning && (
              <div 
                className="w-full rounded-3xl py-6 text-center"
                style={{ backgroundColor: '#2C5F2D20' }}
              >
                <span className="text-3xl" style={{ fontWeight: 700, color: '#2C5F2D' }}>
                  COMPLETED
                </span>
              </div>
            )}
          </div>

          {/* Completed Card - Blood Pressure */}
          <div 
            className="rounded-3xl p-8 shadow-lg"
            style={{ backgroundColor: '#E8E8E8' }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl mb-2" style={{ fontWeight: 700, color: '#666' }}>
                  Blood Pressure
                </h2>
                <p className="text-2xl" style={{ fontWeight: 600, color: '#999' }}>
                  7:00 AM
                </p>
              </div>
              <div 
                className="rounded-full p-4"
                style={{ backgroundColor: '#2C5F2D' }}
              >
                <Check size={48} style={{ color: 'white' }} strokeWidth={3} />
              </div>
            </div>

            <div className="flex items-center gap-6 mb-6">
              <div 
                className="rounded-full p-6"
                style={{ backgroundColor: '#C2185B20' }}
              >
                <Pill 
                  size={56} 
                  style={{ color: '#999' }} 
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <p className="text-2xl" style={{ fontWeight: 600, color: '#999' }}>
                  1 Pill
                </p>
                <p className="text-xl" style={{ color: '#999' }}>
                  Before breakfast
                </p>
              </div>
            </div>

            <div 
              className="w-full rounded-3xl py-6 text-center"
              style={{ backgroundColor: '#2C5F2D20' }}
            >
              <span className="text-3xl" style={{ fontWeight: 700, color: '#2C5F2D' }}>
                COMPLETED
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
