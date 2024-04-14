import Card from "./Card";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

function ProductsGrid() {
	const [data, setData] = useState("");
	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			// .then((json) => console.log(json))
			.then((data) => setData(data));
	}, []);
	return (
		<>
			{data &&
				data.map((el) => {
					return (
						<li key={el.id} className={"producto"}>
							<Card
								id={el.id}
								image={el.image}
								title={el.title}
								price={el.price}
							/>
						</li>
					);
				})}
			<Pagination />
		</>
	);
}

export default ProductsGrid;
