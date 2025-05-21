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
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="card bg-base-100 w-full shadow-sm">
        <h2 className="text-2xl font-bold text-center py-5">Add Task</h2>
        <div className="card-body">
          <form onSubmit={handleAddTask}>
            {/* task title */}
            <fieldset className="fieldset ">
              <label className="label">Task Title</label>
              <input
                name="title"
                type="text"
                // value={formData.title}
                // onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Task Title"
                required
              />
            </fieldset>

            {/* Category */}
            <fieldset className="fieldset ">
              <label className="label">Category </label>
              <select
                name="category"
                // value={formData.category}
                // onChange={handleChange}
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
              <label className="label">Description</label>
              <textarea
                name="description"
                // value={formData.description}
                // onChange={handleChange}
                className="textarea textarea-bordered w-full"
                placeholder="Describe what needs to be done"
                required
              />
            </fieldset>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5">
              {/* deadline */}
              <fieldset className="fieldset ">
                <label className="label">Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  // value={formData.deadline}
                  // onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </fieldset>

              {/* Budget */}
              <fieldset className="fieldset ">
                <label className="label">Budget</label>
                <input
                  type="number"
                  name="budget"
                  // value={formData.budget}
                  // onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="Budget"
                  required
                />
              </fieldset>

              {/* User Email */}
              <fieldset className="fieldset ">
                <label className="label">User Email</label>
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
                <label className="label">User Name</label>
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
              <button className="btn btn-primary text-white  w-full">
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
