import React, { useState } from "react";
import img1 from "../../assets/client1.jpg";
import img2 from "../../assets/client2.jpg";
import img3 from "../../assets/client3.jpg";
import quotation from "../../assets/Quotation .png";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";

const testimonials = [
  {
    id: 1,
    name: "Samantha Reed",
    title: "Marketing Manager at TechSol Inc",
    image: img1,
    feedback:
      "I am truly impressed by the outstanding service I experienced! The team showed remarkable dedication to fulfilling my requirements, showcasing unmatched professionalism and expertise.",
    stars: 3,
  },
  {
    id: 2,
    name: "John Carter",
    title: "CEO at WebWonders",
    image: img2,
    feedback:
      "Their work surpassed all expectations in terms of quality, and I wouldn't hesitate to endorse their services to anyone.which helped us elevate our brand presence.",
    stars: 4,
  },
  {
    id: 3,
    name: "Ariana Gomez",
    title: "Freelance Content Writer",
    image: img3,
    feedback:
      "Absolutely loved working with them! Super professional, on-time delivery, and excellent communication, as finding a reliable partner like this is rare.",
    stars: 5,
  },
];

const ClientTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = testimonials.length;

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-base-200/50  py-20  dark:bg-gray-900">
      <h2
        className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <Typewriter
          words={["We Love Our Client Feedback."]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        ></Typewriter>
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-15 mt-6">
        <div className="" data-aos="fade-right">
          <img
            src={testimonials[activeIndex].image}
            alt={testimonials[activeIndex].name}
            className="w-96 h-[400px] rounded-xl object-cover shadow-lg"
          />
        </div>

        <div
          className="flex flex-col justify-between h-[400px]  max-w-lg text-center md:text-left space-y-4"
          data-aos="fade-left"
        >
          <div className="">
            <img className="w-20 " src={quotation} alt="" />
          </div>
          <div className="space-y-5">
            <p className="text-gray-700 dark:text-gray-200 text-[1.2rem]">
              {testimonials[activeIndex].feedback}
            </p>
            <div className="text-yellow-500 text-3xl">
              {"★".repeat(testimonials[activeIndex].stars)}
              {"☆".repeat(5 - testimonials[activeIndex].stars)}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {testimonials[activeIndex].name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonials[activeIndex].title}
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start items-end gap-4 mt-2">
            <button
              onClick={prevSlide}
              className="btn btn-ghost rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <MdOutlineArrowBackIos size={28} />
            </button>
            <button
              onClick={nextSlide}
              className="btn btn-ghost rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <MdArrowForwardIos size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
