import logo from "../logoml/logo.png";
import { Link } from "react-router-dom";
export function Mlogo() {
  return (
    <div className="m-2 flex justify-center bg-[#ffdb15]">
      <Link to="/">
        <img src={logo} alt="Mercado Libre" />
      </Link>
    </div>
  );
}
