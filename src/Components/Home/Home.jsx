import React from "react";
import FeatureTask from "../FeatureTask/FeatureTask";
import JobSearch from "../JobSearch/JobSearch";
import Servises from "../Servises/Servises";
import { Helmet } from "react-helmet-async";
import Slider from "../TaskSlider/Slider";
import PopularCategories from "../PopularCategories/PopularCategories";
import ClientTestimonials from "../ClientTestimonials/ClientTestimonials";


const Home = () => {
  return (
    <div className="">
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

      {/* popular */}
      <section className="max-w-screen-xl mx-auto">
        <PopularCategories></PopularCategories>
      </section>

      {/* job search */}
      <section className="mt-20">
        <JobSearch></JobSearch>
      </section>

      {/* service section */}
      <section className=" ">
        {/* <Servises></Servises> */}
        <ClientTestimonials></ClientTestimonials>
      </section>
    </div>
  );
};

export default Home;
