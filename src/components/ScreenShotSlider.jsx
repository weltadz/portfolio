import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Projects from "./Projects";

const ScreenShotSlider = () => {
  return (
    <div className="w-6xl mt-10">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        Autoplay={{ delay: 3000, disableOnInteraction: true }}
        navigation
        pagination
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          depth: 500,
          modifier: 2,
          slideShadows: false,
        }}
        grabCursor={true}
      >
        {Projects.map((project, index) => (
          <SwiperSlide key={index}>
            <img
              src={project.img}
              alt={project.name}
              className="rounded-lg shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ScreenShotSlider;
