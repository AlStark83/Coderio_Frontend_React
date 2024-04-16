import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {
	addToCart,
	removeFromCart,
	updateQuantity,
} from "../redux/actions/actions";


function CheckOutCart({ cartItems }) {
	const total = cartItems.reduce(
		(acc, item) => acc + item.quantity * item.price,
		0
	);

	return (
		<div className="mt-16  max-w-md mx-auto px-4">
			<h2 className="mt-20 ext-lg font-semibold mb-1">Your purchase is for the next items:</h2>
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

									<p className="mb-1">
										Quantity:
										<p className="">{item.quantity}</p>
									</p>
								</div>
							</div>
						</li>
					))}
				</ul>
		
			<h4 className="text-right text-xl font-bold mt-4">Total: ${total}</h4>

		</div>
	);
	
	
}

CheckOutCart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  updateQuantity: PropTypes.func.isRequired
};

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

const CheckOutCartConnected = connect(mapStateToProps, mapDispatchToProps)(CheckOutCart);
export default CheckOutCartConnected;
