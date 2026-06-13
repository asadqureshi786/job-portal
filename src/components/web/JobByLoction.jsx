import React from "react";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import required modules
// import { Navigation } from "swiper/modules";

// Icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function JobByLoction() {
  const swiperRef = useRef(null);

  const handleNext = () => {
    swiperRef.current.swiper.slidePrev(); 
  };
  
  const handlePrev = () => {
    swiperRef.current.swiper.slideNext(); 
  };

  const items = [
    {
      img: "/img/maps/pakistan.jpg",
      title: "Pakistan",
      url: "#",
    },
    {
      img: "/img/maps/asia.jpg",
      title: "Asia",
      url: "#",
    },
    {
      img: "/img/maps/europe.jpg",
      title: "Europe",
      url: "#",
    },
    {
      img: "/img/maps/usa.jpg",
      title: "United States of America",
      url: "#",
    },
    {
      img: "/img/maps/flexible.jpg",
      title: "Flexible",
      url: "#",
    },
  ];

  return (
    <section className="web">
      <div className="container">
        <div className="lg:w-8/12 w-full mx-auto text-center">
          <h2 className="section-heading">
            Job By
            <span className="g-text"> Location</span>
          </h2>
          <p className="section-desc">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="mt-10 jobByLocation relative">
          <Swiper
            ref={swiperRef}
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            className="flex items-center gap-1"
          >
            {items.map((item, index) => (
              <SwiperSlide className="text-center">
                <img
                  className="w-full h-75 object-cover rounded-lg grayscale-100 hover:grayscale-0 transition-all cursor-pointer border border-gray-200"
                  src={item.img}
                />
                <span className="text-base mt-6 inline-block">
                  {item.title}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            onClick={handleNext}
            className="absolute left-0 z-1 top-[40%] -translate-1/2 bg-white shadow-xl/30 size-10 flex justify-center items-center rounded-full cursor-pointer"
          >
            <IoIosArrowBack />
          </div>
          <div
            onClick={handlePrev}
            className="absolute right-[-38px] z-1 top-[40%] -translate-1/2 bg-white shadow-xl/30  size-10 flex justify-center items-center rounded-full cursor-pointer"
          >
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </section>
  );
}
