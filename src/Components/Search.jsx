import { useSearchParams, useNavigate } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(+searchParams);
  };
  let search = "";

  return (
    <div>
      <div className="link-to-carrito">
        <Link to={"/carrito"}>
          <div className="carrito m-3">
            <BsCart className="float-right" />
          </div>
        </Link>
      </div>
      <form
        className="p-2 relative rounded-none w-[400px]"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            className="w-[400px] h-[29px] rounded-none	"
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
    </div>
  );
}
