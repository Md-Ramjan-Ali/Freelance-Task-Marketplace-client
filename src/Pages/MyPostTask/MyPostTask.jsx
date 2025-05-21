import React, { use } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import { useLoaderData } from "react-router";
import MyPostedTasksTable from "../MyPostedTasksTable/MyPostedTasksTable";
import Swal from "sweetalert2";

const MyPostTask = () => {
  const { user } = use(AuthContext);

  const taskData = useLoaderData();

  const myTaskData = taskData.filter(
    (task) => task.name || task.email === user.displayName || user.email
  );

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

        fetch(`http://localhost:5000/tasks/${id}`,{
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });

        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto my-10">
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
