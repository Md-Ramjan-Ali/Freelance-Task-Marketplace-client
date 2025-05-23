import React from "react";
import sliderImg1 from "../../assets/Slider (12).jpg";
import sliderImg2 from "../../assets/Slider (13).jpg";
import sliderImg3 from "../../assets/Slider (4).jpg";
import { Link } from "react-router";

const TaskSlider = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-3 lg:p-0">
        <div className="carousel w-full  my-3 rounded-2xl">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={sliderImg1} className="w-full max-h-[450px] h-full " />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-20">
              <div className="bg-gray-900/50 p-5 rounded-2xl ">
                <div className="text-white text-center space-y-4">
                  <h2 className="text-3xl font-bold ">
                    Hire Experts for Any Task
                  </h2>
                  <p>
                    From web development to digital design, find freelancers
                    ready to tackle your project. Post your task today and
                    connect instantly with skilled professionals.
                  </p>
                  <Link to="/addtask">
                    <button className="btn bg-green-500 hover:bg-green-700 text-white outline-0 border-0">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={sliderImg2} className="w-full  max-h-[450px] h-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-4 bg-gray-900/50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold">Freelance Work Made Easy</h2>
              <p>
                Browse available tasks and submit bids that match your skills
                and budget. Whether you're a designer, developer, your next gig
                is just a click away.
              </p>
              <Link to="/browsetask">
                <button className="btn bg-green-500 hover:bg-green-700 text-white outline-0 border-0">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={sliderImg3} className="w-full  max-h-[450px] h-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-4 bg-gray-900/50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold">Stay on Deadline, Always</h2>
              <p>
                Set clear deadlines and budgets for every task you post. Our
                platform keeps everything organized so you can focus on results,
                not reminders.
              </p>
              <Link to="/myposttask">
                <button className="btn bg-green-500 hover:bg-green-700 text-white outline-0 border-0">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
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
