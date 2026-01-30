import { ArrowLeft, Heart } from 'lucide-react';
import { Screen } from '../App';
import { useState } from 'react';

interface FamilyPostcardsProps {
  navigate: (screen: Screen) => void;
}

export default function FamilyPostcards({ navigate }: FamilyPostcardsProps) {
  const [lovedPosts, setLovedPosts] = useState<number[]>([]);

  const postcards = [
    {
      id: 1,
      from: 'Sarah',
      image: 'https://images.unsplash.com/photo-1600779438084-a87b966aab99?w=800',
      caption: 'Love you Grandma! Had so much fun at the park today.'
    },
    {
      id: 2,
      from: 'Tommy',
      image: 'https://images.unsplash.com/photo-1641638612579-b0e8374344a7?w=800',
      caption: 'Thinking of you! Hope to see you soon.'
    },
    {
      id: 3,
      from: 'The Miller Family',
      image: 'https://images.unsplash.com/photo-1601118964938-228a89955311?w=800',
      caption: 'Happy birthday from all of us! We miss you.'
    },
  ];

  const toggleLove = (postId: number) => {
    setLovedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
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
          Family Updates
        </h1>
      </div>

      {/* Postcards Feed */}
      <div className="flex-1 px-6">
        <div className="flex flex-col gap-8">
          {postcards.map((postcard) => {
            const isLoved = lovedPosts.includes(postcard.id);
            
            return (
              <div 
                key={postcard.id}
                className="bg-white rounded-3xl p-6 shadow-xl"
                style={{ 
                  border: '8px solid white',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                }}
              >
                {/* From Label */}
                <p 
                  className="text-2xl mb-4" 
                  style={{ fontWeight: 600, color: '#666', fontStyle: 'italic' }}
                >
                  From {postcard.from}
                </p>

                {/* Photo */}
                <div className="mb-6">
                  <img 
                    src={postcard.image}
                    alt={`Postcard from ${postcard.from}`}
                    className="w-full rounded-2xl object-cover"
                    style={{ height: '320px' }}
                  />
                </div>

                {/* Caption */}
                <p 
                  className="text-2xl mb-6" 
                  style={{ fontWeight: 500, color: '#1B4D3E', lineHeight: '1.6' }}
                >
                  {postcard.caption}
                </p>

                {/* Send Love Button */}
                <button 
                  onClick={() => toggleLove(postcard.id)}
                  className="w-full rounded-3xl py-6 flex items-center justify-center gap-4 active:scale-95 transition-all"
                  style={{ 
                    backgroundColor: isLoved ? '#C2185B' : 'transparent',
                    border: `4px solid ${isLoved ? '#C2185B' : '#C2185B'}`,
                  }}
                >
                  <Heart 
                    size={44} 
                    style={{ color: isLoved ? 'white' : '#C2185B' }} 
                    strokeWidth={2.5}
                    fill={isLoved ? 'white' : 'none'}
                  />
                  <span 
                    className="text-3xl" 
                    style={{ 
                      fontWeight: 700, 
                      color: isLoved ? 'white' : '#C2185B' 
                    }}
                  >
                    {isLoved ? 'Love Sent!' : 'Send Love'}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
