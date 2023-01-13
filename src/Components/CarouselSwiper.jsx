import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { apicallcarousel, carritonew } from "../Reducer/getss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export function CarouselSwiper() {
  const { carousel: datos } = useSelector((state) => state.call);
  const { carrito: selectexist } = useSelector((state) => state.call);
  const [disable, setdisable] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apicallcarousel("zapatillas"));
    selectexist.some((item) => item.id === datos.id)
      ? setdisable(true)
      : setdisable(false);
  }, []);
  return (
    <div className="flex ">
      <Swiper
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 1,
            slidesPerGroup: 3,
          },
        }}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper "
        autoplay={{
          delay: 3000,
        }}
      >
        {datos.map((datos) => {
          return (
            <SwiperSlide className="flex justify-center w-[233px] h-[310px]">
              <div
                className=" justify-center	text-center flex h-[300px] w-[300px] "
                key={datos.id}
              >
                <img
                  className=""
                  src={datos.thumbnail}
                  alt={datos.title}
                  width="200px"
                  height="auto"
                />
                <div className="Nombre y precio text-center justify-center bg-[#909497] p-[5px] mt-[10px] ">
                  <div className="text-[14px] detalles">
                    <h1 className="p-[8px] text-[12px]">{datos.title}</h1>
                    <strong className="text-[20px]">
                      ${Math.trunc(datos.price)}
                    </strong>
                    <div className="bg-[black] rounded-[8px] ">
                      <button
                        disabled={disable}
                        className="p-[6px] m-3 text-[white] "
                        onClick={() => {
                          dispatch(carritonew(datos));
                        }}
                      >
                        {disable ? `Agregado al carrito` : `Agregar al carrito`}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
