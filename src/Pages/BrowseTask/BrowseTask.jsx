import React from 'react';
import { useLoaderData } from 'react-router';
import TaskCard from '../TaskCard/TaskCard';

const BrowseTask = () => {

  const taskData=useLoaderData()

  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          taskData.map(task=><TaskCard key={task._id} task={task}></TaskCard>)
        }
      </div>
    </div>
  );
};

export default BrowseTask;