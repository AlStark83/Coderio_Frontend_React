/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
	addToCart,
	removeFromCart,
	updateQuantity,
} from "../redux/actions/actions";

// eslint-disable-next-line react/prop-types
function Cart({ cartItems, removeFromCart, updateQuantity }) {
	const total = cartItems.reduce(
		(acc, item) => acc + item.quantity * item.price,
		0
	);

	return (
		<div className="fixed top-16 right-0 w-32  bg-gray-800 h-full hidden md:flex flex-col items-center">
  <h2 className=" text-base font-semibold text-white ">Shopping Cart</h2>
  <h4 className="text-lg font-semibold text-white">Subtotal: ${total}</h4>
  <Link  className="text-white px-4 py-2 text-sm font-medium transition-all hover:text-gray-200 hover:font-semibold hover:text-lg"to={"cart"}>Cart</Link>
  {cartItems.length === 0 ? (
    <p>Your cart is empty.</p>
  ) : (
    <ul className="flex flex-col items-center w-32">
      {cartItems.map((item) => (
        <li className="w-32" key={item.id}>
            <img
              src={item.image}
              alt="product image"
              width="50px"
              height="50px"
            />
            <p className="text-white">${item.price}</p>
          <div className=" pl-4 mr-2 flex items-center">
            <input className="pl-4"
              type="number"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value))
              }
            />
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
		cartItems: state.cart.cartItems,
	};
};

const mapDispatchToProps = {
	removeFromCart,
	updateQuantity,
	addToCart,
};

const CartConnected = connect(mapStateToProps, mapDispatchToProps)(Cart);
export default CartConnected;
