"use client";
import React from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import Image from "next/image";
import Typewriter from "./typewriter";


const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-0 lg:py-2 xl:py-0">
        
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">

          {/* <!-- Section Title Start --> */}
              <Typewriter/>
          {/* <!-- Section Title End --> */}



          {/* <!-- Slider main container --> */}

            <div className="swiper testimonial-01 mb-20 pb-22.5">
              <Swiper
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
              }}
            >

              {featuresData.map((feature) => (
                <SwiperSlide  key={feature?.id}>
                  <SingleFeature feature={feature} />
                </SwiperSlide>
              ))}

              </Swiper>
            </div>
            {/* <!-- Features item End --> */}
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
