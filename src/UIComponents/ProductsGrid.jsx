import Card from "./Card";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

function ProductsGrid() {
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage= 4;
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
			.then((data) => setData(data));
	}, []);
	return (
		<>
			<div className="w-full md:w-calc(100vw - 128) md:pr-28 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
				{currentProducts &&
					currentProducts.map((el) => {
						return (
							<li key={el.id} className="w-full  md:w-calc(100vw - 128) list-none flex justify-center ">
								<Card
									product={el}
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
