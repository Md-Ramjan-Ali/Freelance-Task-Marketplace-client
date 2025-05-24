import React, { use } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";

const AddTask = () => {
  const { user } = use(AuthContext);

  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userTaskData = Object.fromEntries(formData.entries());
    console.log(userTaskData);

    fetch("http://localhost:5000/tasks",{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(userTaskData)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {

          console.log(data);
        }
      });
  };
  return (
    <div
      className="max-w-screen-xl mx-auto my-5"
    
    
    >
      <div className="card bg-base-100 w-full shadow-sm">
        <h2 className="label justify-center text-2xl font-bold pt-5">
          Add Job Task
        </h2>
        <div className="card-body">
          <form onSubmit={handleAddTask}>
            {/* task title */}
            <fieldset className="fieldset ">
              <label className="label text-[.885rem] font-semibold">
                Task Title
              </label>
              <input
                name="title"
                type="text"
                className="input input-bordered w-full"
                placeholder="Task Title"
                required
              />
            </fieldset>

            {/* Category */}
            <fieldset className="fieldset ">
              <label className="label text-[.885rem] font-semibold">
                Category
              </label>
              <select
                name="category"
                className="select select-bordered w-full"
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
              <label className="label text-[.885rem] font-semibold">
                Description
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full"
                placeholder="Describe what needs to be done"
                required
              />
            </fieldset>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5">
              {/* deadline */}
              <fieldset className="fieldset ">
                <label className="label text-[.885rem] font-semibold">
                  Deadline
                </label>
                <input
                  type="date"
                  name="deadline"
                  className="input input-bordered w-full"
                  required
                />
              </fieldset>

              {/* Budget */}
              <fieldset className="fieldset ">
                <label className="label text-[.885rem] font-semibold">
                  Budget
                </label>
                <input
                  type="number"
                  name="budget"
                  className="input input-bordered w-full"
                  placeholder="Budget"
                  required
                />
              </fieldset>

              {/* User Email */}
              <fieldset className="fieldset ">
                <label className="label text-[.885rem] font-semibold">
                  User Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  readOnly
                  className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                />
              </fieldset>

              {/* User Name */}
              <fieldset className="fieldset ">
                <label className="label text-[.885rem] font-semibold">
                  User Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={user.displayName}
                  readOnly
                  className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                />
              </fieldset>
            </div>
            <div className="card-actions pt-5">
              <button className="btn bg-green-500 hover:bg-green-700 text-white  w-full">
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
