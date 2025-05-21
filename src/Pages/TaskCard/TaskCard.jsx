import React from 'react';
import { Link } from 'react-router';

const TaskCard = ({task}) => {
  const { _id, title, category, description, deadline, budget } = task;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl border hover:shadow-2xl transition max-h-80 h-full">
        <div className="card-body">
          <h2 className="card-title text-xl font-bold text-primary">{title}</h2>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Category:</span> {category}
          </p>
          <div className="">
            <p className='font-semibold'>Description:</p>
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
          <div className="card-actions justify-end mt-4">
            <Link to={`/taskdetails/${_id}`}>
              <button className="btn btn-sm btn-primary">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;