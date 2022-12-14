import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { apicallcarousel } from "../Reducer/getss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export function Carousel() {
  const { carousel: datos } = useSelector((state) => state.call);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apicallcarousel("zapatillas"));
  }, []);
  console.log(datos);
  console.log("carousel aca");
  return (
    <div className="">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {datos.map((datos) => {
          return (
            <SwiperSlide>
              <div className="bg-black justify-center	text-center flex h-[300px] w-[300px]	">
                <img
                  className=""
                  src={datos.thumbnail}
                  alt={datos.title}
                  width="100%"
                  height="100%"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
