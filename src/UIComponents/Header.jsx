import Logo from "../UIComponents/Logo";
import NavBar from "./NavBar";
import ModalLoginForm from "../Auth/ModalLoginForm";
import AuthHandler from "../Auth/AuthHandler";
function Header() {
	return (
		<>
			<div className="fixed top-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center h-16">
				<Logo />
				<NavBar />
				<ModalLoginForm />
				<AuthHandler />
			</div>
		</>
	);
}

export default Header;
