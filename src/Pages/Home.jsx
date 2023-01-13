import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Changecarousel } from "../Components/ChangeCarousel";
import { Paginacion } from "../Components/Paginacion";
import Productos from "../Components/Productos";
import Search from "../Components/Search";
import { CarouselSwiper } from "../Components/CarouselSwiper";
import { apicall, apicallsearch } from "../Reducer/getss";
export default function Home(search) {
  const { info: datos } = useSelector((state) => state.call);
  const [productsPorPage, setproductsPage] = useState(4);
  const [currentPage, setcurrentPage] = useState(1);
  const totalProducts = datos.length;
  const dispatch = useDispatch();
  console.log(datos);
  let params = new URLSearchParams(useLocation().search);
  search = params.get("search");

  const lastIndex = currentPage * productsPorPage;
  const firnstIndex = lastIndex - productsPorPage;
  useEffect(() => {
    search ? dispatch(apicallsearch(search)) : dispatch(apicall());
  }, [search]);
  return (
    <div className="">
      <div className="search ">
        <Search />
      </div>
      <div className="carousel">
        <CarouselSwiper />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-[30px] m-[20px] justify-center bg-[#ebebeb] justify-items-center gap-[50px]	">
        {datos
          .map((dato) => <Productos key={dato.id} dato={dato} />)
          .slice(firnstIndex, lastIndex)}
      </ul>
      <div className="pt-[20px] bg-black	">
        <Paginacion
          productsPorPage={productsPorPage}
          currentPage={currentPage}
          setcurrentPage={setcurrentPage}
          totalProducts={totalProducts}
        />
      </div>
    </div>
  );
}
