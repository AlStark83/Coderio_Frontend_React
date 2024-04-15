import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className=" md:flex flex-grow justify-center w-2/4 h-8">
    
        <Link className="text-white px-4 py-2 text-sm font-medium transition-all hover:text-gray-200 hover:font-semibold hover:text-lg" to="/">Products</Link>
          {/* <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/ofertas">Ofertas</Link></li> */}
        <Link className="text-white px-4 py-2 text-sm font-medium transition-all hover:text-gray-200 hover:font-semibold hover:text-lg" to="/cart">Cart</Link>
      
      </nav>
    </>
  );
}

export default NavBar;