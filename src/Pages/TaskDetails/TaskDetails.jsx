import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";
import { FcBusinessman } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

const TaskDetails = () => {
  const {user}=use(AuthContext)
  console.log(user);
  const {displayName, email, photoURL}=user
  const task = useLoaderData();
  console.log(task);
  const { title, category, description, deadline, budget } = task;

  return (
    <div className="max-w-4xl mx-auto my-10">
      <div className="card bg-base-100 shadow-xl border hover:shadow-2xl transition p-5">
        <div className="text-center mb-10">
          <div className=" tooltip tooltip-top" data-tip="Author">
            <figure>
              <img
                className="w-36 h-36 rounded-full"
                src={photoURL}
                alt="Movie"
              />
            </figure>
          </div>
          <div className="flex justify-center items-center gap-2">
            <p>{/* <FcBusinessman size={30} /> */}</p>
            <p className="text-xl font-semibold">Buyer:</p>
            <h2 className=" font-semibold">{displayName}</h2>
          </div>
          <div className="flex justify-center items-center gap-2">
            <p>
              <MdEmail size={30} />
            </p>
            <p>{email}</p>
          </div>
        </div>

        <div className="card-body space-y-3">
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
          <div className="mt-2 text-sm">
            <p>
              <span className="font-semibold">Deadline:</span> {deadline}
            </p>
            <p>
              <span className="font-semibold">Budget:</span> ${budget}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
