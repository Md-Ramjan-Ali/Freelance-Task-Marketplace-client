import React, { useEffect, useState } from "react";
import { MdNewReleases } from "react-icons/md";
import { Link } from "react-router";

const FeatureTask = () => {
  const [featuredTasks, setFeatureTask] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks/featuretasks")
      .then((res) => res.json())
      .then((data) => {
        setFeatureTask(data);
      });
  }, []);

  // console.log(featuredTasks);
  return (
    <div>
      {/* feature heading */}
      <div className="">
        <h2 className="text-3xl font-bold mb-3 text-center">Featured Tasks</h2>
        <div className="border-1 w-15 mx-auto mb-4"></div>
        <p className="text-2xl text-base-400  text-center">
          Explore Trending Offers and Find Dream Job
        </p>
      </div>

      {/* feature card */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {featuredTasks.map((task) => (
          <div
            key={task._id}
            className="card bg-base-100 shadow-xl border"
            data-aos="zoom-in-up"
            
            data-aos-easing="linear"
            data-aos-duration="600"
          >
            <div className="card-body">
              <div className="flex gap-1">
                <span>
                  <MdNewReleases size={24} />
                </span>
                <h2 className="card-title text-primary">{task.title}</h2>
              </div>
              <p>
                <strong>Category:</strong> {task.category}
              </p>
              <p>
                <strong>Deadline: </strong>
                {new Date(task.deadline).toLocaleDateString()}
              </p>
              <p>
                <strong>Budget:</strong> ${task.budget}
              </p>
              <div className="">
                <p>
                  <strong>Description:</strong>
                </p>
                <p>{task.description}</p>
              </div>
              <div className="card-actions justify-end">
                <Link to={`/taskdetails/${task._id}`}>
                  <button className="btn bg-green-500 hover:bg-green-700 text-white font-semibold">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureTask;
