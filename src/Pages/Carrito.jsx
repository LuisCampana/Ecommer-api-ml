import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { carritodelete } from "../Reducer/getss";

export function Carrito({ Carrito }) {
  const { carrito: carritoo } = useSelector((state) => state.call);
  console.log(carritoo);
  const dispatch = useDispatch();
  let resultado = 0;
  function pepe() {
    carritoo.map((element) => {
      resultado = resultado + element.price;
    });
    return resultado;
  }
  return (
    <>
      <h1>Sus Productos Son:</h1>
      {carritoo?.map((carrito) => (
        <>
          <img
            src={carrito.thumbnail}
            alt={carrito.title}
            width="80"
            height="80"
          />
          <div>{carrito.title}</div>
          <div>${carrito.price}</div>
          <div>
            <MdDelete
              onClick={() => {
                dispatch(carritodelete(carrito));
              }}
            />
          </div>
        </>
      ))}
      <h3>Total de Precio es de:${pepe()}</h3>
    </>
  );
}
