import { Trash2, ArrowLeft } from 'lucide-react';
import { Screen } from '../App';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartProps {
  navigate: (screen: Screen) => void;
  cartItems: CartItem[];
  removeFromCart: (itemId: number) => void;
}

export default function Cart({ navigate, cartItems, removeFromCart }: CartProps) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen flex flex-col pb-32" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-6 flex items-center gap-4">
        <button 
          onClick={() => navigate('groceryList')}
          className="p-3 rounded-full active:scale-95 transition-transform"
          style={{ backgroundColor: '#1B4D3E' }}
        >
          <ArrowLeft size={32} style={{ color: 'white' }} strokeWidth={2.5} />
        </button>
        <h1 className="text-5xl" style={{ fontWeight: 700, color: '#1B4D3E' }}>
          Your Basket
        </h1>
      </div>

      {/* Cart Items List */}
      <div className="flex-1 px-6 pb-6">
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 shadow-lg text-center">
            <p className="text-3xl" style={{ fontWeight: 600, color: '#666' }}>
              Your basket is empty
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {cartItems.map(item => (
              <div 
                key={item.id}
                className="bg-white rounded-3xl p-6 shadow-lg flex items-center gap-6"
              >
                <img 
                  src={item.image}
                  alt={item.name}
                  className="rounded-2xl object-cover"
                  style={{ width: '80px', height: '80px' }}
                />
                <div className="flex-1">
                  <h3 className="text-2xl mb-2" style={{ fontWeight: 600, color: '#1B4D3E' }}>
                    {item.name}
                  </h3>
                  <p className="text-3xl" style={{ fontWeight: 700, color: '#C2185B' }}>
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-4 rounded-full active:scale-95 transition-transform"
                  style={{ backgroundColor: '#FF000010' }}
                >
                  <Trash2 size={32} style={{ color: '#DC2626' }} strokeWidth={2.5} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Total Section */}
        {cartItems.length > 0 && (
          <div className="mt-8 bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex justify-between items-center">
              <span className="text-3xl" style={{ fontWeight: 600, color: '#1B4D3E' }}>
                Total:
              </span>
              <span className="text-5xl" style={{ fontWeight: 700, color: '#2C5F2D' }}>
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Place Order Button */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-6" style={{ backgroundColor: '#F5F5F0' }}>
          <button 
            onClick={() => navigate('orderConfirmation')}
            className="w-full rounded-3xl py-8 active:scale-95 transition-transform shadow-lg"
            style={{ 
              backgroundColor: '#C2185B',
              color: 'white'
            }}
          >
            <span className="text-3xl" style={{ fontWeight: 700 }}>
              Place Order Now
            </span>
          </button>
        </div>
      )}
    </div>
  );
}