import React, { useState } from "react";
import { Link } from "react-router";
import EmtyTask from "../../Components/EmtyTask/EmtyTask";
import { Typewriter } from "react-simple-typewriter";

const MyPostedTasksTable = ({ tasks, handleTaskDelete }) => {
  const [bidsCount, setBidsCount] = useState(null);

  if (tasks.length === 0) {
    return <EmtyTask></EmtyTask>;
  }

  return (
    <div data-aos="zoom-in-up" data-aos-easing="linear">
      <h2 className="text-3xl font-semibold text-center mb-4 text-green-500 dark:text-white">
        <Typewriter
          words={[" My All Posted Task"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        ></Typewriter>
      </h2>
      <div className="w-36 mx-auto border-1 mb-10 dark:text-white"></div>
      <div className="overflow-x-auto">
        <table className="table dark:text-white w-full text-sm">
          <thead className="bg-base-200 dark:bg-gray-800 dark:text-white text-base font-semibold">
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
                <td className="grid grid-cols-1 lg:grid-cols-3 lg:space-x-3 space-y-2 lg:space-y-0 w-fit">
                  {/* Update Button */}
                  <Link to={`/dash/updatetask/${task._id}`}>
                    <button className="btn btn-xs btn-outline hover:bg-green-700 hover:text-white btn-info max-w-14 w-full">
                      Update
                    </button>
                  </Link>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleTaskDelete(task._id)}
                    className="btn btn-xs btn-outline hover:bg-green-700 hover:text-white  btn-error max-w-14 w-full"
                  >
                    Delete
                  </button>

                  {/* Bids Button */}

                  <button
                    onClick={() => {
                      setBidsCount(task);
                      document.getElementById("my_bids_modal").showModal();
                    }}
                    className="btn btn-xs btn-outline hover:bg-green-700 hover:text-white btn-success max-w-14 w-full"
                  >
                    Bids
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="">
        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog
          id="my_bids_modal"
          className="modal modal-middle  sm:modal-middle "
        >
          <div className="modal-box">
            <h2 className="text-2xl font-semibold text-center mb-4 text-green-500">
              All Bids for This Task
            </h2>
            <div className="w-15 mx-auto border-1 text-green-500"></div>
            <div className="mt-5 space-y-3">
              <h2 className=" text-lg text-center">
                <span className="font-bold">Bids for:</span>{" "}
                <span>{bidsCount?.title || "Task"}</span>
              </h2>
              <p className="text-lg text-center">
                Total Bids:{" "}
                <span className="font-bold">{bidsCount?.bidsCount ?? 0}</span>
              </p>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn bg-green-500 hover:bg-green-700 text-white">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyPostedTasksTable;
