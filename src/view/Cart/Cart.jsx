/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../redux/actions/actions';

// eslint-disable-next-line react/prop-types
function  Cart  ({ cartItems, removeFromCart, updateQuantity }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <div>
                <img src={item.image} alt="product image" width="50px" height="50px" />
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: 
                  <input 
                    type="number" 
                    value={item.quantity} 
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} 
                  />
                </p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems
  };
};

const mapDispatchToProps = {
  removeFromCart,
  updateQuantity
};

const CartConnected = connect(mapStateToProps, mapDispatchToProps)(Cart);
export default CartConnected
