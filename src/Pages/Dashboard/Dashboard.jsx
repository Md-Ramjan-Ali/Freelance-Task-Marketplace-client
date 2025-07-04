import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import axios from "axios";
import img from '../../assets/webdevCategory.jpg'

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [totalItems, setTotalItems] = useState(0);
  const [myItems, setMyItems] = useState(0);

  useEffect(() => {
    axios
      .get("https://freelance-task-marketplace-server-lyart.vercel.app/tasks")
      .then((res) => setTotalItems(res.data));

    axios
      .get(
        `https://freelance-task-marketplace-server-lyart.vercel.app/tasks?email=${user.email}`
      )
      .then((res) => {
        setMyItems(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user.email]);

  return (
    <div className="">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center dark:text-white">
          Welcome, {user.displayName}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-gray-700 dark:text-white rounded shadow h-[250px] text-center md:space-y-10">
            <h2 className="text-gray-500 dark:text-white text-xl">
              Total Job Tasks Available
            </h2>
            <h3 className="text-3xl ">
              <span className="font-bold">{totalItems.length}</span> Tasks
            </h3>
          </div>

          <div className="p-6 bg-white dark:bg-gray-700 dark:text-white rounded shadow h-[250px] text-center md:space-y-10">
            <h2 className="text-gray-500 dark:text-white text-xl">
              My post Task Available
            </h2>
            <h3 className="text-3xl ">
              <span className="font-bold">{myItems.length}</span> Tasks
            </h3>
          </div>

          <div className="p-6 bg-white dark:bg-gray-700 dark:text-white rounded shadow h-[250px] text-center md:space-y-10">
            <h2 className="text-gray-500 dark:text-white text-xl">
              Total Job Category
            </h2>
            <h3 className="text-3xl ">
              <span className="font-bold">4</span> Category
            </h3>
          </div>
        </div>
      </div>
      {/* profile */}
      <div className="card bg-base-100 dark:bg-gray-700 dark:text-white shadow-sm mt-5">
        <div className="">
          <figure>
            <img className="w-full h-[400px] object-cover" src={img} alt="" />
          </figure>
        </div>
        <div className="flex justify-center -mt-16 ">
          <img
            className="w-32 h-32 rounded-full border-4 border-green-500"
            src={user.photoURL}
            alt=""
          />
        </div>
        <div className="px-5">
          <h2 className="text-center text-2xl font-bold mt-10">My Profile</h2>
          <div className="flex justify-between mt-10 mb-5">
            <div className="text-xl text-gray-700 dark:text-white">
              <h2>Your Name</h2>
              <h2 className="font-bold">{user.displayName}</h2>
            </div>
            <div className="text-xl text-gray-700 dark:text-white">
              <h2>Your Email</h2>
              <h2 className="font-bold">{user.email}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
