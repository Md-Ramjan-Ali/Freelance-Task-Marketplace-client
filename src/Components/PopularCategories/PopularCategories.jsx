import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

// 🖼️ Import your category images
import webDevImg from "../../assets/webdevCategory.jpg";
import designImg from "../../assets/graphicsCategory.jpg";
import writingImg from "../../assets/writingCategory.jpg";
import seoImg from "../../assets/seoCategory.jpg";
import marketingImg from "../../assets/markatingCategory.jpg";
import smartAi from "../../assets/aiCategory.jpg";
import { Typewriter } from "react-simple-typewriter";

// Category data
const categories = [
  { name: "Web Development", image: webDevImg },
  { name: "Design", image: designImg },
  { name: "Writing", image: writingImg },
  { name: "SEO", image: seoImg },
  { name: "Marketing", image: marketingImg },
  { name: "Smart Ai Services", image: smartAi },
];

const PopularCategories = () => {
  return (
    <div className="flex flex-col mt-20 px-2 lg:px-0">
      <div className="space-y-3 lg:max-w-[50%] w-full px-3 lg:px-2  mb-5">
        <p
          className="text-[1.2rem] font-semibold dark:text-white"
          data-aos="zoom-in-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <Typewriter
            words={["Empower Your Freelance Journey."]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          ></Typewriter>
        </p>

        <h2
          className="md:text-xl lg:text-3xl font-bold dark:text-white"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Post Tasks or Get Hired — All in One Platform
        </h2>

        <p
          className="dark:text-white"
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="1800"
        >
          Whether you're looking to hire skilled freelancers or searching for
          your next project, our marketplace connects talent with
          opportunity—quickly, easily, and securely.
        </p>
      </div>

      <div className="flex-1">
        <Swiper
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Autoplay]}
          className="rounded-xl "
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="1800"
        >
          {categories.map((category, idx) => (
            <SwiperSlide className="rounded-xl " key={idx}>
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group relative w-full h-[280px] md:h-[320px] lg:h-[380px] cursor-pointer">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover brightness-50 group-hover:scale-110 transition duration-500 rounded-xl"
                />
                <div className="absolute bottom-0 pl-5 pb-5 text-center">
                  <p className="text-md font-semibold  text-white">
                    {category.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularCategories;
