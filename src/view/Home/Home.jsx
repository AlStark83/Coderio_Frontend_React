import { Banner, ProductsGrid } from "../../UIComponents/index";
import  SideCart  from "../../UIComponents/SideCart";
// import { useEffect, useState } from
function Home() {
	return (
		<>
			<Banner />
			{/* <h1>Home</h1> */}
			<div className="align-center">
			<ProductsGrid />
			</div>
			<SideCart/>
		</>
	);
}

export default Home;
