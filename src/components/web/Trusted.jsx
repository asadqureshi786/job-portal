import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import required modules
import { Autoplay, Pagination,FreeMode , Navigation } from "swiper/modules";

export default function Trusted() {
  return (
    <div className="container">
      <h2 className="text-xl font-medium text-center dark:text-white">
        Trusted <span className="text-primary">1000+</span> company find best
        jobseeker
      </h2>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 0,
          // disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="flex items-center justify-between mt-5 gap-5 [&>div]:flex [&>div]:items-center"
      >
        <SwiperSlide>
          <img src="/img/logos/1.svg" className="w-25 filter grayscale dark:grayscale-0 dark:invert-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/logos/8.svg" className="w-25 filter grayscale dark:grayscale-0 dark:invert-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/logos/3.svg" className="w-25 filter grayscale dark:grayscale-0 dark:invert-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/logos/4.svg" className="w-25 filter grayscale dark:grayscale-0 dark:invert-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/logos/5.svg" className="w-25 filter grayscale dark:grayscale-0 dark:invert-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/logos/7.svg" className="w-25 filter grayscale dark:grayscale-0 dark:invert-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/logos/8.svg" className="w-25 filter grayscale dark:grayscale-0 dark:invert-100" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
