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
	const currentProducts = data.slice(indexOfFirtsProduct, indexOfLastProduct);
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
			<div className="w-full md:w-calc(100vw - 128) px-12 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
				{currentProducts &&
					currentProducts.map((el) => {
						return (
							<li key={el.id} className="w-full md:w-1/2 lg:w-1/4 list-none">
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
			</div>
			<Pagination
				productsPerPage={productsPerPage}
				allProducts={data.length}
				pagination={pagination}
			/>
		</>
	);
}

export default ProductsGrid;
