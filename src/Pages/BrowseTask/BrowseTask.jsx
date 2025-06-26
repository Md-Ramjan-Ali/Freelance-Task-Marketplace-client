import React from 'react';
import { useLoaderData } from 'react-router';
import TaskCard from '../TaskCard/TaskCard';
import { Helmet } from 'react-helmet-async';

const BrowseTask = () => {

  const taskData=useLoaderData()

  return (
    <div className="max-w-screen-xl mx-auto py-10">
       <Helmet>
              <title>Browse Task | JobPond</title>
            </Helmet>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 lg:px-0"
       
      >
        {taskData.map((task) => (
          <TaskCard key={task._id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default BrowseTask;