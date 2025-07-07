import React from 'react';
import {  Outlet } from 'react-router';
import DashRoutes from '../Pages/Dashboard/DashRoutes';
import DashNavbar from '../Pages/Dashboard/DashNavbar';

const DashboardLayout = () => {
  return (
    <div className="bg-base-200 dark:bg-gray-900 min-h-screen">
      <DashNavbar></DashNavbar>
      <div className="max-w-screen-xl mx-auto  w-full flex flex-col md:flex-row gap-10 mt-5 relative">
        <DashRoutes></DashRoutes>

        <main className="md:flex-1 w-full p-6 bg-white dark:bg-gray-800 shadow-xl rounded-xl min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;