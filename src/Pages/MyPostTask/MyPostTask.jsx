import React, { use, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import { useLoaderData } from "react-router";
import MyPostedTasksTable from "../MyPostedTasksTable/MyPostedTasksTable";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyPostTask = () => {
  const { user } = use(AuthContext);

  const initialTaskData = useLoaderData();
  const [taskData, setTaskData] = useState(initialTaskData);

  const myTaskData = taskData.filter((task) => task.email === user.email);

  // console.log(myTaskData);

  const handleTaskDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://freelance-task-marketplace-server-lyart.vercel.app/tasks/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "success",
              });
            }
          });

        const remainingTask = taskData.filter((task) => task._id !== id);
        setTaskData(remainingTask);
      }
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <Helmet>
        <title>My Task | JobPond</title>
      </Helmet>
      <div className="">
        <MyPostedTasksTable
          tasks={myTaskData}
          handleTaskDelete={handleTaskDelete}
        ></MyPostedTasksTable>
      </div>
    </div>
  );
};

export default MyPostTask;
