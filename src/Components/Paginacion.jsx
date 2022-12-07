export const Paginacion = ({
  productsPorPage,
  currentPage,
  setcurrentPage,
  totalProducts,
}) => {
  const pagenumber = [];
  for (let i = 1; i <= totalProducts / productsPorPage; i++) {
    pagenumber.push(i);
  }
  const Pagespecifi = (n) => {
    setcurrentPage(n);
  };
  return (
    <nav className="pb-[25px]">
      <ul className="flex  justify-center">
        {pagenumber.map((page) => (
          <li
            onClick={() => Pagespecifi(page)}
            key={page}
            className={`list-none pb-[10px] pt-[10px] lg:pr-[20px] lg:pl-[10px] border-[1px] m-2 cursor-pointer sm:m-[3px] w-[30px] pl-[10px] text-[#FFFFFF] ${
              page === currentPage ? "bg-blue-700" : ""
            }`}
          >
            <div key={page} className="sm:ml-[10px] lg:ml-0	">
              {page}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
