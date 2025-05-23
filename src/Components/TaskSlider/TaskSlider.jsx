import React from "react";
import sliderImg1 from "../../assets/Slider (12).jpg";
import sliderImg2 from "../../assets/Slider (13).jpg";
import sliderImg3 from "../../assets/Slider (4).jpg";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const TaskSlider = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-3 lg:p-0">
        <div className="carousel w-full  my-3 rounded-2xl">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={sliderImg1} className="w-full max-h-[450px] h-full " />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-20"
              
            >
              <div className="bg-gray-900/50 p-5 rounded-2xl ">
                <div className="text-white text-center space-y-4">
                  <h2
                    className="text-3xl font-bold "
                    data-aos="fade-down"
                    data-aos-delay={300}
                  >
                    <Typewriter
                      words={["Hire Experts for Any Task"]}
                      loop={true}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    ></Typewriter>
                  </h2>
                  <p data-aos="zoom-in" data-aos-delay={500}>
                    From web development to digital design, find freelancers
                    ready to tackle your project. Post your task today and
                    connect instantly with skilled professionals.
                  </p>
                  <Link to="/addtask" data-aos="fade-up" data-aos-delay={800}>
                    <button className="btn bg-green-500 hover:bg-green-700 text-white outline-0 border-0">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide3"
                className="btn btn-circle border-0 shadow-none bg-green-500 hover:bg-transparent text-white"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle border-0 shadow-none bg-green-500 hover:bg-transparent text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={sliderImg2} className="w-full  max-h-[450px] h-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-4 bg-gray-900/50 p-8 rounded-2xl">
              <h2
                className="text-3xl font-bold"
                data-aos="fade-down"
                data-aos-delay={300}
              >
                <Typewriter
                  words={["Freelance Work Made Easy"]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                ></Typewriter>
              </h2>
              <p data-aos="zoom-in" data-aos-delay={500}>
                Browse available tasks and submit bids that match your skills
                and budget. Whether you're a designer, developer, your next gig
                is just a click away.
              </p>
              <Link to="/browsetask" data-aos="fade-up" data-aos-delay={800}>
                <button className="btn bg-green-500 hover:bg-green-700 text-white outline-0 border-0">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide1"
                className="btn btn-circle border-0 shadow-none bg-green-500 hover:bg-transparent text-white"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-circle border-0 shadow-none bg-green-500 hover:bg-transparent text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={sliderImg3} className="w-full  max-h-[450px] h-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-4 bg-gray-900/50 p-8 rounded-2xl">
              <h2
                className="text-3xl font-bold"
                data-aos="fade-down"
                data-aos-delay={300}
              >
                <Typewriter
                  words={["Stay on Deadline, Always"]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                ></Typewriter>
              </h2>
              <p data-aos="zoom-in" data-aos-delay={500}>
                Set clear deadlines and budgets for every task you post. Our
                platform keeps everything organized so you can focus on results,
                not reminders.
              </p>
              <Link to="/myposttask" data-aos="fade-up" data-aos-delay={800}>
                <button className="btn bg-green-500 hover:bg-green-700 text-white outline-0 border-0">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide2"
                className="btn btn-circle border-0 shadow-none bg-green-500 hover:bg-transparent text-white"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-circle border-0 shadow-none bg-green-500 hover:bg-transparent text-white"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskSlider;
