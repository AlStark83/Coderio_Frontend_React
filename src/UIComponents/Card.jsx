import PropTypes from "prop-types";
import ButtonAddToCartConnected from "./ButtonAddToCart";

function Card({ product }) {
	return (
		<>
			<div
				className="h-80 w-48 bg-white rounded-lg overflow-hidden shadow-md px-2"
				key={product.id}>
				<img
					className="w-full h-32 object-contain"
					src={product.image}
					alt="not found"
				/>
				<div className="p-2">
					<h2 className="h-24 text-base font-semibold text-gray-800 overflow-hidden">
						{product.title}
					</h2>
					<h3 className="text-lg text-gray-600 ">$ {product.price}</h3>
					<ButtonAddToCartConnected product={product} />
				</div>
			</div>
		</>
	);
}

Card.propTypes = {
	product: PropTypes.object.isRequired,
};

export default Card;
