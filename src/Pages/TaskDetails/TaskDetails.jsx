import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { FcBusinessman } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { Tooltip } from "react-tooltip";

const TaskDetails = () => {
  const task = useLoaderData();
  const [bidsCount, setBidsCount] = useState(task.bidsCount || 0);

  console.log(task);
  const { title, category, description, deadline, budget, name, email, _id } =
    task;

  const handleBids = () => {
    fetch(`http://localhost:5000/tasks/${_id}/bid`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          setBidsCount((prev) => prev + 1);
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto my-10">
      <div className="card bg-base-100 shadow-xl border hover:shadow-2xl transition p-5">
        <div className="text-center mb-10">
          <div
            className="flex justify-center items-center"
            data-tooltip-id="my-tooltip"
            data-tooltip-place="top"
            data-tooltip-content="Buyer"
          >
            <p>
              <FcBusinessman size={90} />
            </p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <p className="text-xl font-semibold">Buyer:</p>
            <h2 className=" font-semibold">{name}</h2>
          </div>
          <div className="flex justify-center items-center gap-2">
            <p>
              <MdEmail size={25} />
            </p>
            <p>{email}</p>
          </div>
        </div>

        <div className="card-body space-y-3">
          <p className="text-center text-lg font-semibold">
            Your Bid for: {bidsCount} opportunities.
          </p>
          <h2 className="card-title text-xl font-bold text-primary">
            Job Title: {title}
          </h2>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Category:</span> {category}
          </p>
          <div className="">
            <p className="font-semibold">Description:</p>
            <p className="text-sm text-gray-700 mt-1 line-clamp-3">
              {description}
            </p>
          </div>
          <div className="mt-2 text-sm space-y-3">
            <p>
              <span className="font-semibold">Deadline:</span> {deadline}
            </p>
            <p>
              <span className="font-semibold">Budget:</span> ${budget}
            </p>
          </div>
        </div>
        <button
          onClick={handleBids}
          className="btn bg-green-500 hover:bg-green-700 text-white"
        >
          Bid Now
        </button>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default TaskDetails;
