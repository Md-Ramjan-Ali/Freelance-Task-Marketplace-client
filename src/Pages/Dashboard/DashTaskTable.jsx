import React from "react";
import { Link } from "react-router";

const DashTaskTable = ({ tasks }) => {
  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <table className="table  w-full">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Category</th>
            <th>Deadline</th>
            <th>Budget</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task, index) => (
            <tr
              key={task._id}
              className="hover:bg-gray-50 dark:hover:bg-gray-700 transition dark:text-white"
            >
              <td>{index + 1}</td>
              <td>{task.title}</td>
              <td>{task.category}</td>
              <td>
                {new Date(task.deadline).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </td>
              <td>${task.budget}</td>

              <td>
                <Link to={`/dash/taskdetails/${task._id}`}>
                  <button className="btn btn-sm btn-outline">See More</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashTaskTable;
