import React from 'react';
import { useCart } from '../context/CartContext';
import { IconX, IconTrash } from '@tabler/icons-react';
import './CartSidebar.css';

const CartSidebar = () => {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, getCartTotal, checkout, user } = useCart();

  const handleCheckout = async () => {
    const result = await checkout();
    if (result.success) {
      alert('Your booking has been confirmed! We will contact you shortly.');
    } else if (result.message !== 'Please login first') {
      alert(result.message);
    }
  };

  return (
    <>
      <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}></div>
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Your Cart ({cartItems.length})</h3>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>
            <IconX size={24} />
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty.</p>
              <button className="btn btn-outline" onClick={() => setIsCartOpen(false)}>Browse Tests</button>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p className="item-price">₹{item.price}</p>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    <IconTrash size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total Amount:</span>
              <span>₹{getCartTotal()}</span>
            </div>
            <button className="btn btn-primary checkout-btn" onClick={handleCheckout}>
              {user ? 'Confirm Booking' : 'Login to Book'}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
