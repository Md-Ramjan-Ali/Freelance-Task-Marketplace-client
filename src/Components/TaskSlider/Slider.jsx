import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//external css files
import "./sliderStyle.css";

import sliderImg1 from "../../assets/heroSlide (1).png";
import sliderImg2 from "../../assets/heroSlider (1).jpg";
import sliderImg3 from "../../assets/heroSlider (2).jpg";
import { Link } from "react-router";

const slides = [
  {
    id: 1,
    image: sliderImg1,
    title: "Hire Experts for Any Task",
    description:
      "From web development to digital design, find freelancers ready to tackle your project. Post your task today and connect instantly with skilled professionals.",
    btnText: "Get Started",
    link: "/addtask",
  },
  {
    id: 2,
    image: sliderImg2,
    title: "Freelance Work Made Easy",
    description:
      "Browse available tasks and submit bids that match your skills and budget. Whether you're a designer or developer, your next gig is just a click away.",
    btnText: "Explore Tasks",
    link: "/browsetask",
  },
  {
    id: 3,
    image: sliderImg3,
    title: "Stay on Deadline, Always",
    description:
      "Set clear deadlines and budgets for every task you post. Our platform keeps everything organized so you can focus on results, not reminders.",
    btnText: "My Posted Tasks",
    link: "/myposttask",
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-[70vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-center brightness-50"
              />
              <div className="absolute inset-0  flex items-center justify-center text-white px-4">
                <div className="text-center max-w-2xl space-y-8  rounded-2xl">
                  {activeIndex === index && (
                    <>
                      <motion.h2
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-xl md:text-3xl font-bold"
                      >
                        {slide.title}
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-xs md:text-lg max-w-xl mx-auto"
                      >
                        {slide.description}
                      </motion.p>

                      <Link to={slide.link}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, delay: 0.8 }}
                          className="btn bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded-md border-0"
                        >
                          {slide.btnText}
                        </motion.button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
