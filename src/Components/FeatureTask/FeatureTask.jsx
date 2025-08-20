import React, { useEffect, useState } from "react";
import { MdNewReleases, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import Loading from "../../Loading/Loading";
import FeatureTaskCard from "./FeatureTaskCard";
import axios from "axios";

const FeatureTask = () => {
  const [loading,setLoading]=useState(true)
  const [featuredTasks, setFeatureTask] = useState([]);

  useEffect(() => {
    axios.get(
      "https://freelance-task-marketplace-server-lyart.vercel.app/tasks/featuretasks"
    ).then((result) => {
        setFeatureTask(result.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if(loading){
    return <Loading></Loading>
  }

  return (
    <div>
      {/* feature heading */}
      <div className="">
        <h2 className="text-3xl font-semibold mb-3 text-center text-green-500 dark:text-white">
          Featured Job Tasks
        </h2>
        <div className="border-1 w-15 mx-auto mb-4 dark:text-white"></div>

        <p
          className="text-xl  text-center dark:text-white"
          data-aos="zoom-in"
          data-aos-easing="linear"
        >
          Explore Trending Offers and Find Dream Job
        </p>
      </div>

      {/* feature card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-2 lg:px-0">
        {featuredTasks.map((task) => (
          <FeatureTaskCard key={task._id} task={task}></FeatureTaskCard>
        ))}
      </div>

      <div className="text-center  mt-8">
        <Link to="browsetask">
          <button className="btn bg-white hover:bg-green-600 hover:text-white p-7 text-[1rem] dark:bg-gray-800 font-semibold text-gray-600 dark:text-white">
            <span>Explore More Projects</span>
            <span>
              <MdOutlineKeyboardArrowRight size={24} />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureTask;
