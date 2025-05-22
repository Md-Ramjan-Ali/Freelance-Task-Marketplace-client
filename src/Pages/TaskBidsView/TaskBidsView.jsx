import React, { use } from 'react';
import { AuthContext } from '../../AuthContext/AuthContext';
import { useLoaderData } from 'react-router';

const TaskBidsView = () => {
  const {user}=use(AuthContext)
  const taskData=useLoaderData()

  console.log(user,taskData);
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="card bg-base-100 shadow-xl border hover:shadow-2xl transition p-5">
        <h2 className="text-xl font-semibold text-center mb-4">All Bids for This Task</h2>
      </div>
    </div>
  );
};

export default TaskBidsView;