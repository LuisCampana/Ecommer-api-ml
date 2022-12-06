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
            className={`list-none pb-[10px] pt-[10px] pr-[20px] pl-[20px] border-[1px] m-2 cursor-pointer ${
              page === currentPage ? "bg-blue-700" : ""
            }`}
          >
            <div key={page}>{page}</div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
