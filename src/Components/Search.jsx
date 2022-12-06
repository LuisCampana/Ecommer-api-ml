import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { carrito: item } = useSelector((state) => state.call);
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(+searchParams);
  };
  let search = "";
  console.log(item.length);
  return (
    <div className="bg-[#ffdb15] justify-center text-center flex ">
      <form
        className="p-2 relative rounded-full w-[1200px] 
        "
        onSubmit={handleSubmit}
      >
        <div>
          <input
            className="w-[400px] h-[29px] rounded-full	"
            placeholder="Ingrese que lo quiera buscar"
            type="text"
            value={searchParams.get("search") || ""}
            onChange={(e) => {
              e.preventDefault();
              search = e.target.value;
              console.log(search);
              if (search) {
                setSearchParams({ search });
              } else {
                setSearchParams({});
              }
            }}
          />
        </div>
        <button></button>
      </form>

      <Link to={"/carrito"}>
        <div className="left-[3px] pr-[45px] text-[#F3250D]">{item.length}</div>
        <div className="carrito mr-[40px]">
          <BsCart className="text-[18px]" />
        </div>
      </Link>
    </div>
  );
}
