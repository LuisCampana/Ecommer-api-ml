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
    <div className="bg-[#ffdb15] ">
      <div className="categorias ml-[50px] pb-[15px] text-[black] ">
        <div>
          <strong className="cursor-pointer" onClick={() => Categorias()}>
            Categorias
          </strong>
        </div>
        {categorias ? (
          <div className="bg-slate-600 w-[100px] text-[white] text-center ">
            <ul>
              <li
                className="hover:bg-[#191CDF] cursor-pointer p-[5px] 	"
                onClick={() => {
                  Categorias();
                  dispatch(apicallcarousel("Auto"));
                }}
              >
                Autos
              </li>
              <li
                className=" hover:bg-[#191CDF] cursor-pointer p-[5px]	"
                onClick={() => {
                  Categorias();
                  dispatch(apicallcarousel("Remeras"));
                }}
              >
                Remeras
              </li>
              <li
                className="hover:bg-[#191CDF] cursor-pointer p-[5px]	"
                onClick={() => {
                  Categorias();
                  dispatch(apicallcarousel("Inmuebles"));
                }}
              >
                Inmuebles
              </li>
              <li
                className=" hover:bg-[#191CDF] cursor-pointer p-[5px]	"
                onClick={() => {
                  Categorias();
                  dispatch(apicallcarousel("Pantalones"));
                }}
              >
                Pantalones
              </li>
              <li
                className="hover:bg-[#191CDF] cursor-pointer p-[5px]	"
                onClick={() => {
                  Categorias();
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
