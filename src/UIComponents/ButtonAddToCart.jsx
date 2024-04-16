import PropTypes from 'prop-types';
import { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/actions";

const ButtonAddToCart = ({ product, addToCart }) => {
	const [feedbackMessage, setFeedbackMessage] = useState("");

	const handleAddToCart = () => {
		addToCart(product);
		setFeedbackMessage(`Added to cart.`);
		setTimeout(() => {
			setFeedbackMessage("");
		}, 2500);
	};
	return (
		<>
			{feedbackMessage && <p className='font-bold text-green-900 my-4 ml-7 '>{feedbackMessage}</p>}
			<button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded ml-7" onClick={handleAddToCart}>Add to Cart</button>
		</>
	);
};

ButtonAddToCart.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
	addToCart,
};
const ButtonAddToCartConnected = connect(
	null,
	mapDispatchToProps
)(ButtonAddToCart);

export default ButtonAddToCartConnected;
