import React from "react";
import TaskSlider from "../TaskSlider/TaskSlider";
import FeatureTask from "../FeatureTask/FeatureTask";
import JobSearch from "../JobSearch/JobSearch";
import Servises from "../Servises/Servises";


const Home = () => {
  return (
    <div className="my-5">
      {/* slider hero */}
      <section className="max-w-screen-xl mx-auto ">
        <TaskSlider></TaskSlider>
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
