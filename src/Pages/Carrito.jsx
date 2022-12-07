import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import {
  carritodelete,
  incrementcarrito,
  decrementcarrito,
} from "../Reducer/getss";
import { GrFormAdd } from "react-icons/gr";
import { VscDash } from "react-icons/vsc";

export function Carrito({ Carrito }) {
  const { carrito: carritoo } = useSelector((state) => state.call);
  const { contador: cantidad } = useSelector((state) => state.call);
  console.log(cantidad);
  let preciototal = 0;
  const dispatch = useDispatch();
  let resultado = 0;
  function pepe() {
    carritoo.map((element) => {
      resultado = resultado + element.price;
    });
    return resultado;
  }

  return (
    <div className="container ml-[30px] mr-[30px] bg-slate-200 mt-[15px]">
      <table className="border-[1px] w-full border-[#ddd]  ">
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
            <td>
              {}
              <button onClick={() => dispatch(incrementcarrito(cantidad))}>
                <GrFormAdd />
              </button>
              <button onClick={() => dispatch(decrementcarrito(cantidad))}>
                <VscDash />
              </button>
            </td>
            <td className="p-[8px] align-middle textcenter border-[#ddd] border-[1px]">
              ${carrito.price}
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
        Total de Precio es de:${pepe()}
      </h2>
    </div>
  );
}
