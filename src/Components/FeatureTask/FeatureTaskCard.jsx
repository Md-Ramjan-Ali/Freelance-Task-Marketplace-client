import React from "react";
import cardImg from "../../assets/cardImage.png";
import { Link } from "react-router";

const FeatureTaskCard = ({ task }) => {
  const {
    name,
    title,
    category,
    deadline,
    budget,
    description,
    clientImage,
    _id,
  } = task;
  return (
    <div
      className="flex flex-col justify-between bg-white dark:bg-gray-800  rounded-xl shadow-md overflow-hidden "
      data-aos="zoom-in-up"
      data-aos-easing="linear"
    >
      <div className="space-y-4 p-5 ">
        <p className="text-sm text-gray-500 dark:text-white">
          {new Date(deadline).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h2 className="text-xl font-medium text-gray-600 dark:text-white">
          {title}
        </h2>

        <div className="flex justify-between bg-gray-100 dark:bg-gray-500 text-gray-800 text-sm p-4 rounded-md dark:text-white">
          <span>Fixed price project</span>
          <span className="font-semibold">${budget}</span>
        </div>
        <p className="line-clamp-2 text-gray-600 text-sm dark:text-white">
          {description}
        </p>
        <p className="bg-purple-100 dark:bg-gray-500 text-purple-700 dark:text-white text-xs font-medium px-3 py-1 w-fit rounded-full">
          {category}
        </p>
      </div>

      {/* client section */}
      <div className="flex items-center justify-between bg-base-200 dark:bg-gray-800 p-4 mt-3">
        <div className="flex items-center space-x-2">
          <img
            className="w-8 h-8 rounded-full"
            src={clientImage || cardImg}
            alt=""
          />
          <span className="text-sm font-medium text-gray-800 dark:text-white">
            {name}
          </span>
        </div>
        <Link to={`/taskdetails/${_id}`}>
          <button className="bg-white dark:bg-gray-500 dark:text-white text-sm transition text-gray-800 font-medium px-4 py-2 rounded-md hover:bg-green-500 hover:text-white">
            View Job
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureTaskCard;
