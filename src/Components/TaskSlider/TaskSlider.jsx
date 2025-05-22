import React from 'react';
import sliderImg1 from '../../assets/Slider (1).jpg'
import sliderImg2 from '../../assets/Slider (2).jpg'
import sliderImg3 from '../../assets/Slider (3).jpg'

const TaskSlider = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-3 lg:p-0">
        <div className="carousel w-full  my-3 rounded-2xl">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={sliderImg1} className="w-full h-[450px]" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={sliderImg2} className="w-full h-[450px]" />
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
            <img src={sliderImg3} className="w-full h-[450px]" />
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