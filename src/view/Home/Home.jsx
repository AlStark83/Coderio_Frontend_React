import { Banner, ProductsGrid } from "../../UIComponents/index";
import  SideCart  from "../../UIComponents/SideCart";

function Home() {
	return (
		<>
			<Banner />
			<div className="align-center">
			<ProductsGrid />
			</div>
			<SideCart/>
		</>
	);
}

export default Home;
