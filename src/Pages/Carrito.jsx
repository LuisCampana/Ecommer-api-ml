import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import {
  carritodelete,
  decrementcarrito,
  incremento,
  totalacount,
} from "../Reducer/getss";
import { GrFormAdd } from "react-icons/gr";
import { VscDash } from "react-icons/vsc";
import { useEffect } from "react";

export function Carrito({ Carrito }) {
  const { carrito: carritoo } = useSelector((state) => state.call);
  const { cartTotalAmount: preciofinal } = useSelector((state) => state.call);
  let preciototal = 0;
  const dispatch = useDispatch();
  let resultado = 0;
  useEffect(() => {
    dispatch(totalacount());
  }, [carritoo, dispatch]);

  return (
    <div className="sml-0 mr-0 lg:mr-[30px] xl:mr-[30px] xl:ml-[30px] lg:ml-[30px]">
      <div className=" bg-slate-200 mt-[15px] w-full 	 ">
        <table className="border-[1px]  border-[#ddd]  w-full ">
          <tr className="">
            <th></th>
            <th className="">Producto</th>
            <th className="">Cantidad</th>
            <th className="border-[1px]">Precio</th>
            <th className="">Eliminar</th>
          </tr>
          {carritoo?.map((carrito) => (
            <tbody className="justify-center border-[1px] border-[#ddd] text-center ">
              <td className="border-r-[1px]p-[8px]  border-[#ddd] w-[97px] h-[97px] align-middle	">
                <img
                  className="align-middle"
                  src={carrito.thumbnail}
                  alt={carrito.title}
                  width="97"
                  height="97"
                />
              </td>
              <td className="p-[8px] align-middle border-[1px] border-[#ddd] text-center	 ">
                {carrito.title}
              </td>
              <td className="">
                <div className="flex justify-center">
                  <button onClick={() => dispatch(incremento(carrito))}>
                    <GrFormAdd />
                  </button>
                  <div>{carrito.cartQuantity}</div>
                  <button onClick={() => dispatch(decrementcarrito(carrito))}>
                    <VscDash />
                  </button>
                </div>
              </td>
              <td className="p-[8px] align-middle textcenter border-[#ddd] border-[1px]">
                $
                {Math.trunc(
                  (preciototal = carrito.price * carrito.cartQuantity)
                )}
              </td>
              <td className="w-[30px] align-middle border-[1px] p-[20px] border-[#ddd]">
                <MdDelete
                  className=" w-[40px] h-[40px] bg-[red] cursor-pointer hover:bg-[#0BF4E2] m-2	"
                  onClick={() => {
                    dispatch(carritodelete(carrito));
                  }}
                />
              </td>
            </tbody>
          ))}
        </table>
        <h2 className=" text-center p-[40px] text-[30px]">
          Total de Precio es de:${Math.trunc(preciofinal)}
        </h2>
      </div>
    </div>
  );
}
