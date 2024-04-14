import { Banner, ProductsGrid } from "../../UIComponents/index";
import  Cart  from "../Cart/Cart";
// import { useEffect, useState } from
function Home() {
	return (
		<>
			<Banner />
			<h1>Home</h1>
			<ProductsGrid />
			<Cart/>
		</>
	);
}

export default Home;
