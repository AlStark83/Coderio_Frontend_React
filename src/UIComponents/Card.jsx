/* eslint-disable react/prop-types */
import ButtonAddToCartConnected from "./ButtonAddToCart";

function Card({ product }) {
	return (
		<>
			<div className="w-48 bg-white rounded-lg overflow-hidden shadow-md px-2 " key={product.id}>
				<img className="w-full h-auto" src={product.image} alt="not found"/>
				<h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
				<h3 className=" text-lg text-gray-600">$ {product.price}</h3>
				<ButtonAddToCartConnected product={ product } />
			</div>
		</>
	);
}

export default Card;
