import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={'/'}>
    <img src="https://albertoguerrero.site/assets/Logo.png" alt="Logo" className="ml-2 h-10 w-auto" />
    </Link>
  );
}

export default Logo;
