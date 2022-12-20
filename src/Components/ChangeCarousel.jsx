import { useDispatch } from "react-redux";
import { apicallcarousel } from "../Reducer/getss";
import { useState } from "react";

export function Changecarousel() {
  const dispatch = useDispatch();

  const [categorias, setcategorias] = useState(false);

  function Categorias() {
    categorias ? setcategorias(false) : setcategorias(true);
  }

  return (
    <div>
      <div className="categorias ml-[50px] pb-[15px]">
        <div className="cursor-pointer" onClick={() => Categorias()}>
          Categorias
        </div>
        {categorias ? (
          <div className="bg-slate-600 w-[100px] text-[white] text-center">
            <ul>
              <li
                className="hover:bg-[#191CDF] cursor-pointer p-[5px]	"
                onClick={() => {
                  dispatch(apicallcarousel("Auto"));
                }}
              >
                Autos
              </li>
              <li
                className=" hover:bg-[#191CDF] cursor-pointer p-[5px]	"
                onClick={() => {
                  dispatch(apicallcarousel("Remeras"));
                }}
              >
                Remeras
              </li>
              <li
                className="hover:bg-[#191CDF] cursor-pointer p-[5px]	"
                onClick={() => {
                  dispatch(apicallcarousel("Inmuebles"));
                }}
              >
                Inmuebles
              </li>
              <li
                className=" hover:bg-[#191CDF] cursor-pointer p-[5px]	"
                onClick={() => {
                  dispatch(apicallcarousel("Pantalones"));
                }}
              >
                Pantalones
              </li>
              <li
                className="hover:bg-[#191CDF] cursor-pointer p-[5px]	"
                onClick={() => {
                  dispatch(apicallcarousel("Celulalres"));
                }}
              >
                Celulares
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
