import React from 'react';
import jobImage1 from '../../assets/jobSearch (1).jpg'
import jobImage2 from '../../assets/jobSearch (2).jpg'
import { Link } from 'react-router';

const JobSearch = () => {
  return (
    <section className="card bg-base-200/50 dark:bg-gray-800 shadow-sm  transition pt-16 pb-28 px-10 md:px-30 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="lg:w-1/2 mb-12 lg:mb-0">
        <h2
          className="text-2xl md:text-4xl font-bold mb-6 text-center md:text-left dark:text-white"
          data-aos="zoom-in-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          Explore a faster, easier, <br /> and better job search
        </h2>
        <ul
          className="space-y-4"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          {[
            "Unmatched quality of remote, hybrid, and flexible jobs",
            "Premium skills tests, remote courses, career coaching, and more",
            "Unmatched quality of remote, hybrid, and flexible jobs",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✔</span>
              <span className='dark:text-white'>{item}</span>
            </li>
          ))}
        </ul>
        <Link to="/browsetask">
          <button
            className="mt-8 bg-green-500 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded"
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1800"
          >
            Browse Jobs
          </button>
        </Link>
      </div>

      {/* Right Image Section */}
      <div className=" relative flex items-center justify-center">
        <img
          src={jobImage1}
          alt="Main"
          className="rounded-lg w-full max-w-lg"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1200"
        />
        <img
          src={jobImage2}
          alt="Overlay"
          className="absolute bottom-[-40px] right-80 w-64 rounded-lg shadow-lg hidden md:flex"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        />
      </div>
    </section>
  );
};

export default JobSearch;