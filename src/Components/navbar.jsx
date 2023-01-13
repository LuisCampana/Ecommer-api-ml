import { Mlogo } from "./Logo";
export const Navbar = () => {
  //esta flex en el div class grid-rows2
  return (
    <nav className="bg-[#ffdb15] pt-[15px]  ">
      <Mlogo />
      <div className="navbar justify-center text-center ">
        <div className="  justify-center  p-2 ">
          <div className="search  ">
            <div className="link-to-carrito float-right "></div>
          </div>
        </div>
      </div>
    </nav>
  );
};
