import React, { useEffect, useState } from "react";
import TaskCard from "../TaskCard/TaskCard";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import Loading from "../../Loading/Loading";

const BrowseTask = () => {
  const [taskData, setTaskData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://freelance-task-marketplace-server-lyart.vercel.app/tasks")
      .then((result) => {
        setTaskData(result.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }


  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <Helmet>
        <title>Browse Task | JobPond</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 lg:px-0">
        {taskData.map((task) => (
          <TaskCard key={task._id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default BrowseTask;
