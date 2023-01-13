import { useDispatch, useSelector } from "react-redux";
import { carritonew } from "../Reducer/getss";
import { useState, useEffect } from "react";
export default function Productos({ dato }) {
  const dispatch = useDispatch();
  return (
    <div
      className=" productoscontainer flex-wrap w-[300px]	p-[15px] hover:shadow-xl"
      key={dato.id}
    >
      <div className=" bg-slate-100	 ">
        <img src={dato.thumbnail} alt={dato.title} width="270" height="224" />
      </div>
      <div className="Nombre y precio text-center justify-center bg-[#909497] p-[15px]">
        <div className="text-[14px] detalles">
          <h1 className="p-[8px] text-[12px]">{dato.title}</h1>
          <strong className="text-[20px]">${Math.trunc(dato.price)}</strong>
          <div className="bg-[black] rounded-[8px]">
            <button
              className="p-[6px] m-3 text-[white]"
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
