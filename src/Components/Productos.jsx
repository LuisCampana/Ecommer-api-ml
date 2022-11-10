import { useDispatch } from "react-redux";
import { carritonew } from "../Reducer/getss";

export default function Productos({ dato }) {
  const dispatch = useDispatch();
  return (
    <div className=" productoscontainer flex-wrap w-[300px]	  p-[15px] 	 ">
      <div className=" bg-slate-100	 ">
        <img src={dato.thumbnail} alt={dato.title} width="270" height="224" />
      </div>
      <div className="Nombre y precio text-center justify-center bg-[#fff] p-[15px]">
        <div className="text-[14px] detalles">
          <h1 className="p-[8px] text-[13px]">{dato.title}</h1>
          <strong className="">${dato.price}</strong>
          <div>
            <button
              className="p-[6px] m-3 border-2 border-indigo-500/75 bg-[#4C33FF] "
              onClick={() => {
                dispatch(carritonew(dato));
              }}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}