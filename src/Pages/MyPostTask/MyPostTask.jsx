import React, { use } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import { useLoaderData } from "react-router";
import TaskCard from "../TaskCard/TaskCard";

const MyPostTask = () => {
  const { user } = use(AuthContext);

  const taskData = useLoaderData();
  console.log(taskData);

  const myTaskData = taskData.filter(
    (task) => task.name || task.email === user.displayName || user.email
  );
  console.log(myTaskData);

  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {myTaskData.map((task) => (
          <TaskCard key={task._id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default MyPostTask;
