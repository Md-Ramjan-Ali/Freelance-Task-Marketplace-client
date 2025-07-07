import React from "react";
import { Helmet } from "react-helmet-async";
// import { AuthContext } from "../../AuthContext/AuthContext";
import { useLoaderData } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";

const UpdateTask = () => {
  // const { user } = use(AuthContext);

  const task = useLoaderData();
  
  const { title, name, email, description, deadline, category, budget, _id } =
    task;

  const handleUpdateTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateTask = Object.fromEntries(formData.entries());
   

    fetch(
      `https://freelance-task-marketplace-server-lyart.vercel.app/tasks/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateTask),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Update Task Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <Helmet>
        <title>Update Task | JobPond</title>
      </Helmet>
      <div className="card bg-base-100 dark:bg-gray-800 w-full shadow-sm dark:text-white">
        <h2 className="text-2xl font-bold text-center py-5 text-green-600 dark:text-white">
          <Typewriter
            words={[" Update Your Task"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          ></Typewriter>
        </h2>
        <div className="card-body">
          <form onSubmit={handleUpdateTask}>
            {/* task title */}
            <fieldset className="fieldset ">
              <label className=" text-[.885rem] font-semibold">
                Task Title
              </label>
              <input
                name="title"
                type="text"
                defaultValue={title}
                className="input input-bordered w-full dark:bg-gray-800 dark:border-1 dark:border-white"
                placeholder="Task Title"
                required
              />
            </fieldset>

            {/* Category */}
            <fieldset className="fieldset ">
              <label className=" text-[.885rem] font-semibold">Category </label>
              <select
                name="category"
                defaultValue={category}
                className="select select-bordered w-full dark:bg-gray-800 dark:border-1 dark:border-white"
                required
              >
                <option value="">Select Category</option>
                <option value="Web Development">Web Development</option>
                <option value="Design">Design</option>
                <option value="Writing">Writing</option>
                <option value="Marketing">Marketing</option>
              </select>
            </fieldset>

            {/* description */}
            <fieldset className="fieldset ">
              <label className=" text-[.885rem] font-semibold">
                Description
              </label>
              <textarea
                name="description"
                defaultValue={description}
                className="textarea textarea-bordered w-full dark:bg-gray-800 dark:border-1 dark:border-white"
                placeholder="Describe what needs to be done"
                required
              />
            </fieldset>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5">
              {/* deadline */}
              <fieldset className="fieldset ">
                <label className=" text-[.885rem] font-semibold">
                  Deadline
                </label>
                <input
                  type="date"
                  name="deadline"
                  defaultValue={deadline}
                  className="input input-bordered w-full dark:bg-gray-800 dark:border-1 dark:border-white"
                  required
                />
              </fieldset>

              {/* Budget */}
              <fieldset className="fieldset ">
                <label className=" text-[.885rem] font-semibold">Budget</label>
                <input
                  type="number"
                  name="budget"
                  defaultValue={budget}
                  className="input input-bordered w-full dark:bg-gray-800 dark:border-1 dark:border-white"
                  placeholder="Budget"
                  required
                />
              </fieldset>

              {/* User Email */}
              <fieldset className="fieldset ">
                <label className=" text-[.885rem] font-semibold">
                  User Email
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={email}
                  readOnly
                  className="input input-bordered w-full  cursor-not-allowed dark:bg-gray-800 dark:border-1 dark:border-white"
                />
              </fieldset>

              {/* User Name */}
              <fieldset className="fieldset ">
                <label className=" text-[.885rem] font-semibold">
                  User Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  readOnly
                  className="input input-bordered w-full  cursor-not-allowed dark:bg-gray-800 dark:border-1 dark:border-white"
                />
              </fieldset>
            </div>
            <div className="card-actions pt-5">
              <button className="btn bg-green-500 hover:bg-green-700 text-white  w-full">
                Update Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
