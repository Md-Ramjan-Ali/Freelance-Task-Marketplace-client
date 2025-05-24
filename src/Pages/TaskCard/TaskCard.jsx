import React from 'react';
import { MdTaskAlt } from 'react-icons/md';
import { Link } from 'react-router';

const TaskCard = ({task}) => {
  const { _id, title, category, description, deadline, budget } = task;
  return (
    <div>
      <div
        className="card bg-base-100 shadow-xl border hover:shadow-2xl transition max-h-full h-full"
       
      >
        <div className="card-body">
          <div className="flex gap-2 mb-2">
            <span>
              <MdTaskAlt size={24} className='text-orange-500'/>
            </span>
            <h2 className="card-title text-xl font-bold text-green-500">
              {title}
            </h2>
          </div>
          <p className="text-sm">
            <span className="font-semibold">Category:</span> {category}
          </p>
          <div className="">
            <p className="font-semibold">Description:</p>
            <p className="text-sm mt-1 line-clamp-3">
              {description}
            </p>
          </div>
          <div className="mt-2 text-sm space-y-2">
            <p>
              <span className="font-semibold">Deadline:</span> {deadline}
            </p>
            <p>
              <span className="font-semibold">Budget:</span> ${budget}
            </p>
          </div>
          <div className="  mt-4">
            <Link to={`/taskdetails/${_id}`}>
              <button className="btn bg-green-500 hover:bg-green-700 text-white w-full">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;