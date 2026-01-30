import { ArrowLeft, Plus } from 'lucide-react';
import { Screen } from '../App';

interface GroceryListProps {
  navigate: (screen: Screen) => void;
  cartItemCount: number;
}

export default function GroceryList({ navigate, cartItemCount }: GroceryListProps) {
  const groceryItems = [
    { name: 'Fresh Bananas', price: 3.99, image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200', category: 'Fruits' },
    { name: 'Whole Wheat Bread', price: 4.49, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200', category: 'Bakery' },
    { name: 'Organic Milk', price: 5.99, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200', category: 'Dairy' },
    { name: 'Fresh Tomatoes', price: 2.99, image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=200', category: 'Vegetables' },
  ];

  return (
    <div className="min-h-screen flex flex-col pb-32" style={{ backgroundColor: '#F5F5F0' }}>
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
          Groceries
        </h1>
      </div>

      {/* Grocery Items List */}
      <div className="flex-1 px-6 pb-6">
        <div className="flex flex-col gap-4">
          {groceryItems.map((item, index) => (
            <button 
              key={index}
              className="bg-white rounded-3xl p-6 shadow-lg flex items-center gap-6 active:scale-95 transition-transform"
            >
              <img 
                src={item.image}
                alt={item.name}
                className="rounded-2xl object-cover"
                style={{ width: '100px', height: '100px' }}
              />
              <div className="flex-1 text-left">
                <p className="text-xl mb-1" style={{ fontWeight: 600, color: '#666' }}>
                  {item.category}
                </p>
                <h3 className="text-3xl mb-2" style={{ fontWeight: 700, color: '#1B4D3E' }}>
                  {item.name}
                </h3>
                <p className="text-3xl" style={{ fontWeight: 700, color: '#C2185B' }}>
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <div 
                className="rounded-full p-4"
                style={{ backgroundColor: '#C2185B' }}
              >
                <Plus size={36} style={{ color: 'white' }} strokeWidth={3} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* View Cart Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6" style={{ backgroundColor: '#F5F5F0' }}>
        <button 
          onClick={() => navigate('cart')}
          className="w-full rounded-3xl py-8 active:scale-95 transition-transform shadow-lg"
          style={{ backgroundColor: '#C2185B' }}
        >
          <span className="text-3xl" style={{ fontWeight: 700, color: 'white' }}>
            View Cart ({cartItemCount} {cartItemCount === 1 ? 'item' : 'items'})
          </span>
        </button>
      </div>
    </div>
  );
}