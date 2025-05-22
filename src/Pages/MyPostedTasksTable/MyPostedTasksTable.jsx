import React from "react";
import { Link } from "react-router";

const MyPostedTasksTable = ({ tasks, handleTaskDelete }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full text-sm">
          <thead className="bg-base-200 text-base font-semibold">
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Deadline</th>
              <th>Budget</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task._id}>
                <td>{index + 1}</td>
                <td className="font-medium">{task.title}</td>
                <td>{task.deadline}</td>
                <td>${task.budget}</td>
                <td className="space-x-3">
                  {/* Update Button */}
                  <Link to={`/updatetask/${task._id}`}>
                    <button className="btn btn-xs btn-outline hover:bg-green-700 hover:text-white btn-info">
                      Update
                    </button>
                  </Link>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleTaskDelete(task._id)}
                    className="btn btn-xs btn-outline hover:bg-green-700 hover:text-white  btn-error"
                  >
                    Delete
                  </button>

                  {/* Bids Button */}
                  <Link to={`/bidsview/${task._id}`}>
                    <button className="btn btn-xs btn-outline hover:bg-green-700 hover:text-white btn-success">
                      Bids
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedTasksTable;
