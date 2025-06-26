import React, { useEffect, useState } from "react";
import { MdNewReleases } from "react-icons/md";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import Loading from "../../Loading/Loading";
import FeatureTaskCard from "./FeatureTaskCard";

const FeatureTask = () => {
  // const [loading,setLoading]=useState(true)
  const [featuredTasks, setFeatureTask] = useState([]);

  useEffect(() => {
    fetch(
      "https://freelance-task-marketplace-server-lyart.vercel.app/tasks/featuretasks"
    )
      .then((res) => res.json())
      .then((data) => {
        setFeatureTask(data);
        // setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // if(loading){
  //   return <Loading></Loading>
  // }

  return (
    <div>
      {/* feature heading */}
      <div className="">
        <h2 className="text-3xl font-semibold mb-3 text-center text-green-500">
          <Typewriter
            words={["Featured Job Tasks"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          ></Typewriter>
        </h2>
        <div className="border-1 w-15 mx-auto mb-4"></div>

        <p
          className="text-xl  text-center"
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
    </div>
  );
};

export default FeatureTask;
