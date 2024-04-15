/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
	addToCart,
	removeFromCart,
	updateQuantity,
} from "../../redux/actions/actions";

// eslint-disable-next-line react/prop-types
function Cart({ cartItems, removeFromCart, updateQuantity }) {
	const total = cartItems.reduce(
		(acc, item) => acc + item.quantity * item.price,
		0
	);

	return (
		<div className="mt-4 max-w-md mx-auto px-4">
			<h2 className="text-center text-2xl font-bold mb-4">Shopping Cart</h2>
			{cartItems.length === 0 ? (
				<p className="text-center">Your cart is empty.</p>
			) : (
				<ul className="divide-y divide-gray-300">
					{cartItems.map((item) => (
						<li key={item.id} className="py-4">
							<div className="flex items-center">
								<img
									src={item.image}
									alt="product image"
									width="50px"
									height="50px"
									className="mr-4"
								/>
								<div>
									<h3 className="text-lg font-semibold mb-1">{item.title}</h3>
									<p className="mb-1">Price: ${item.price}</p>
									<p className="mb-1">
										Quantity:
										<input
											type="number"
											value={item.quantity}
											onChange={(e) =>
												updateQuantity(item.id, parseInt(e.target.value))
											}
											className="ml-2"
										/>
									</p>
									<p className="mb-1">Subtotal: ${item.quantity * item.price}</p>
									<button
										onClick={() => removeFromCart(item.id)}
										className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
									>
										Remove
									</button>
								</div>
							</div>
						</li>
					))}
				</ul>
			)}
			<h4 className="text-right text-xl font-bold mt-4">Total: ${total}</h4>
			<Link
				to="/checkout"
				className="mb-8 block text-center bg-blue-500 text-white px-4 py-2 rounded mt-4 text-xl"
			>
				Proceed to Pay
			</Link>
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
