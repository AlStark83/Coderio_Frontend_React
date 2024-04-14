import Card from "./Card";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

function ProductsGrid() {
	const [currentPage, setCurrentPage] = useState(1); 
	// eslint-disable-next-line no-unused-vars
	const [productsPerPage, setProductsPerPage] = useState(4);
	const indexOfLastProduct = currentPage * productsPerPage; 
	const indexOfFirtsProduct = indexOfLastProduct - productsPerPage; 
	const [data, setData] = useState("");
	const currentProducts = data.slice(
		indexOfFirtsProduct,
		indexOfLastProduct
	);
	const pagination = (number) => {
		setCurrentPage(number);
	};
	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			// .then((json) => console.log(json))
			.then((data) => setData(data));
	}, []);
	return (
		<>
			{currentProducts &&
				currentProducts.map((el) => {
					return (
						<li key={el.id} className={"producto"}>
							<Card
							product={el}
								// id={el.id}
								// image={el.image}
								// title={el.title}
								// price={el.price}
							/>
						</li>
					);
				})}
			<Pagination productsPerPage={productsPerPage}
								allProducts={data.length}
								pagination={pagination}/>
		</>
	);
}

export default ProductsGrid;
