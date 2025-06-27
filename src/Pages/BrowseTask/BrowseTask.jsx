import React, { useEffect, useState } from "react";
import TaskCard from "../TaskCard/TaskCard";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import Loading from "../../Loading/Loading";
import { CiSearch } from "react-icons/ci";

const BrowseTask = () => {
  const [taskData, setTaskData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams();

    if (searchTerm) queryParams.append("search", searchTerm);
    if (sortOrder) queryParams.append("sort", sortOrder);
    if (filterCategory) queryParams.append("category", filterCategory);

    axios
      .get(
        `https://freelance-task-marketplace-server-lyart.vercel.app/tasks?${queryParams.toString()}`
      )
      .then((result) => {
        setTaskData(result.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchTerm, sortOrder, filterCategory]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-screen-xl mx-auto py-5">
      <Helmet>
        <title>Browse Task | JobPond</title>
      </Helmet>

      {/* Filter & Sort deadline and search */}
      <div className="mb-6 flex flex-col md:flex-row justify-between gap-4 bg-white px-5 py-10 rounded-xl shadow">
        <div className="">
          <select
            className="select select-bordered focus:outline-0 "
            onChange={(e) => setFilterCategory(e.target.value)}
            value={filterCategory}
          >
            <option value="">All Categories</option>
            <option value="Web Development">Web Development</option>
            <option value="Design">Design</option>
            <option value="Writing">Writing</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>

        {/* search option */}
        <div className="flex-1 w-full relative">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" input input-bordered focus:outline-0 rounded-full w-full pl-10"
          />
          <span className="absolute left-4  top-1/2 transform -translate-y-1/2 text-xl z-20">
            <CiSearch />
          </span>
          <select
            className="absolute right-0 select border-0 focus:outline-0 bg-transparent focus:bg-transparent rounded-full w-fit z-50 focus:shadow-0"
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
          >
            <option value="">Sort by Date</option>
            <option value="desc">Newest to Oldest</option>
            <option value="asc">Oldest to Newest</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 lg:px-0">
        {taskData.map((task) => (
          <TaskCard key={task._id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default BrowseTask;
