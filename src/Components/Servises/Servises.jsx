import React from "react";
import { FaCode } from "react-icons/fa";

const Servises = () => {
  return (
    <section className=" text-center">
      <h2
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        Services We Can Help You
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1 */}
        <div
          className="bg-white border rounded-xl shadow hover:shadow-lg p-6 flex flex-col items-center"
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-md bg-blue-100 mb-4">
            <span className="text-2xl">
              <FaCode size={40} />
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            Graphics & Design
          </h3>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white border rounded-xl shadow hover:shadow-lg p-6 flex flex-col items-center"
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-md bg-purple-100 mb-4">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            Digital Marketing
          </h3>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white border rounded-xl shadow hover:shadow-lg p-6 flex flex-col items-center"
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-md bg-yellow-100 mb-4">
            <span className="text-2xl">📢</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            Writing & Translation
          </h3>
        </div>

        {/* Card 4 */}
        <div
          className="bg-white border rounded-xl shadow hover:shadow-lg p-6 flex flex-col items-center"
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-md bg-red-100 mb-4">
            <span className="text-2xl">🎬</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            Video & Animation
          </h3>
        </div>

        {/* Card 5 */}
        <div
          className="bg-white border rounded-xl shadow hover:shadow-lg p-6 flex flex-col items-center"
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-md bg-pink-100 mb-4">
            <span className="text-2xl">🎵</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Music & Audio</h3>
        </div>

        {/* Card 6 */}
        <div
          className="bg-white border rounded-xl shadow hover:shadow-lg p-6 flex flex-col items-center"
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-100 mb-4">
            <span className="text-2xl">👨‍💻</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            Programming & Tech
          </h3>
        </div>

        {/* Card 7 */}
        <div
          className="bg-white border rounded-xl shadow hover:shadow-lg p-6 flex flex-col items-center"
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-md bg-green-100 mb-4">
            <span className="text-2xl">🤖</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">AI Services</h3>
        </div>

        {/* Card 8 */}
        <div
          className="bg-white border rounded-xl shadow hover:shadow-lg p-6 flex flex-col items-center"
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-100 mb-4">
            <span className="text-2xl">🎥</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            Video Explainer
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Servises;
