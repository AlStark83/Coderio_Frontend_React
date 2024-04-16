import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
	addToCart,
	removeFromCart,
} from "../redux/actions/actions";

function Cart({ cartItems, removeFromCart }) {
	const total = cartItems.reduce(
		(acc, item) => acc + item.quantity * item.price,
		0
	);

	return (
		<div className="fixed top-16 right-0 w-32  bg-gray-800 h-full hidden md:flex flex-col items-center">
			<dir>
				<h2 className=" text-lg font-semibold text-white text-center pr-10">Shopping Cart</h2>
        <hr />
				<h4 className="text-base pr-10 font-semibold text-white my-4">Subtotal: ${total.toFixed(2)}</h4>
        <hr />
        <div className="my-4">
				<Link
					className="p-2 mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold l-16 rounded"
					to={"cart"}>
				Your Cart
				</Link>
        </div>
        <hr />

			</dir>
			{cartItems.length === 0 ? (
				<p className="text-white pl-6">Your cart is empty.</p>
			) : (
				<div>
					<ul className="flex flex-col items-center w-32">
						{cartItems.map((item) => (
							<li
								className="flex items-center justify-around w-full p-2 border-b border-gray-200"
								key={item.id}>
								<img
									src={item.image}
									alt="product image"
									className="w-8 h-8 rounded"
								/>
								<div className="flex flex-row items-center">
									{/* <p className="text-gray-800 font-semibold text-sm">
										${item.price}
									</p> */}
									<div className="flex items-center mt-1">
										<p className="text-white">{item.quantity}</p>
										<button
											className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md focus:outline-none text-sm"
											onClick={() => removeFromCart(item.id)}>
											Del
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
Cart.propTypes = {
	cartItems: PropTypes.array.isRequired,
	removeFromCart: PropTypes.func.isRequired,
	updateQuantity: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
	return {
		cartItems: state.cart.cartItems,
	};
};

const mapDispatchToProps = {
	removeFromCart,

	addToCart,
};

const CartConnected = connect(mapStateToProps, mapDispatchToProps)(Cart);
export default CartConnected;
