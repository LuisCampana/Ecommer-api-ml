import logo from "../logoml/logo.png";
import Search from "./Search";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="bg-[#ffdb15] ">
      <div className="navbar justify-center text-center ">
        <div className="grid-rows-2 justify-center flex p-2">
          <Link to="/">
            <img src={logo} alt="Mercado Libre" className="m-2 flex" />
          </Link>
          <Search />
          <Link to={"/carrito"}>
            <div className="carrito m-3">
              <BsCart className="float-right" />
            </div>
          </Link>
        </div>

        <div className="grid-rows-2 flex justify-center p-2 ">
          <h3 className="p-2">CATEGORIAS:</h3>
        </div>
      </div>
    </nav>
  );
};
