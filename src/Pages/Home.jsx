import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Productos from "../Components/Productos";
import Search from "../Components/Search";
import { apicall, apicallsearch } from "../Reducer/getss";
export default function Home(search) {
  const dispatch = useDispatch();
  const { info: datos } = useSelector((state) => state.call);
  const { carrito: carritoo } = useSelector((state) => state.call);
  let params = new URLSearchParams(useLocation().search);
  search = params.get("search");

  useEffect(() => {
    search ? dispatch(apicallsearch(search)) : dispatch(apicall());
  }, [search]);
  //console.log(carritoo);
  return (
    <div>
      <div className="search">
        <Search />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-[30px] m-[20px] justify-center bg-[#ebebeb]">
        {datos.map((dato) => (
          <Productos key={dato.id} dato={dato} />
        ))}
      </ul>
    </div>
  );
}
