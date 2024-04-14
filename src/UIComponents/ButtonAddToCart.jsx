/* eslint-disable react/prop-types */
import { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/actions";

const ButtonAddToCart = ({ product, addToCart }) => {
	const [feedbackMessage, setFeedbackMessage] = useState("");

	const handleAddToCart = () => {
		addToCart(product);
		setFeedbackMessage(`${product.title} has been added to your cart.`);
		setTimeout(() => {
			setFeedbackMessage("");
		}, 3000);
	};
	return (
		<>
			<button onClick={handleAddToCart}>Add to Cart</button>
			{feedbackMessage && <p>{feedbackMessage}</p>}
		</>
	);
};

const mapDispatchToProps = {
	addToCart,
};
const ButtonAddToCartConnected = connect(
	null,
	mapDispatchToProps
)(ButtonAddToCart);

export default ButtonAddToCartConnected;
