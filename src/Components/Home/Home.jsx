import React from "react";
import FeatureTask from "../FeatureTask/FeatureTask";
import JobSearch from "../JobSearch/JobSearch";
import Servises from "../Servises/Servises";
import { Helmet } from "react-helmet-async";
import Slider from "../TaskSlider/Slider";


const Home = () => {
  return (
    <div className="space-y-5">
      <Helmet>
        <title>Home | JobPond</title>
      </Helmet>
      {/* slider hero */}
      <section className=" ">
        <Slider></Slider>
      </section>



      {/* feature task section */}
      <section className="max-w-screen-xl mx-auto mt-10">
        <FeatureTask></FeatureTask>
      </section>

      {/* job search */}
      <section className="mt-20">
        <JobSearch></JobSearch>
      </section>

      {/* service section */}
      <section className="max-w-screen-xl mx-auto mt-20">
        <Servises></Servises>
      </section>

      
    </div>
  );
};

export default Home;
