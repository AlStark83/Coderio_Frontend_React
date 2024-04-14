/* eslint-disable react/prop-types */
import ButtonAddToCartConnected from "./ButtonAddToCart";

function Card({ product }) {
	return (
		<>
			<div className="product-card" key={product.id}>
				<img className="product-image" src={product.image} alt="not found" height="200px"  width="250px" />
				<h2>{product.title}</h2>
				<h3 className="product-price">{product.price}</h3>
				<ButtonAddToCartConnected product={ product } />
			</div>
		</>
	);
}

export default Card;
