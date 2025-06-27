import { createBrowserRouter } from "react-router";
import Root from "../MainLayout/Root";
import Home from "../Components/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AuthLayout from "../MainLayout/AuthLayout";
import AddTask from "../Pages/AddTask/AddTask";
import BrowseTask from "../Pages/BrowseTask/BrowseTask";
import MyPostTask from "../Pages/MyPostTask/MyPostTask";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import Privacy from "../Pages/Privacy/Privacy";
import Terms from "../Pages/Terms/Terms";
import TaskDetails from "../Pages/TaskDetails/TaskDetails";
import UpdateTask from "../Pages/UpdateTask/UpdateTask";
import DashboardLayout from "../MainLayout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashBrowseTask from "../Pages/Dashboard/DashBrowseTask";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/browsetask",
        Component: BrowseTask,
      },
      {
        path: "/taskdetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://freelance-task-marketplace-server-lyart.vercel.app/tasks/${params.id}`
          ),
        element: (
          <PrivetRouter>
            <TaskDetails></TaskDetails>
          </PrivetRouter>
        ),
      },
      {
        path: "/terms",
        Component: Terms,
      },
      {
        path: "/privacy",
        Component: Privacy,
      },
    ],
  },
  {
    path: "/dash",
    Component: DashboardLayout,
    children: [
      {
        path: "/dash/dashboard",
        element: (
          <PrivetRouter>
            <Dashboard></Dashboard>
          </PrivetRouter>
        ),
      },
      {
        path: "/dash/dashBrowseTask",
        element: (
          <PrivetRouter>
            <DashBrowseTask></DashBrowseTask>
          </PrivetRouter>
        ),
      },
      {
        path: "/dash/addtask",
        element: (
          <PrivetRouter>
            <AddTask></AddTask>
          </PrivetRouter>
        ),
      },
      {
        path: "/dash/myposttask",
        loader: () =>
          fetch(
            "https://freelance-task-marketplace-server-lyart.vercel.app/tasks"
          ),
        element: (
          <PrivetRouter>
            <MyPostTask></MyPostTask>
          </PrivetRouter>
        ),
      },
      {
        path: "/dash/updatetask/:id",
        loader: ({ params }) =>
          fetch(
            `https://freelance-task-marketplace-server-lyart.vercel.app/tasks/${params.id}`
          ),
        element: (
          <PrivetRouter>
            <UpdateTask></UpdateTask>
          </PrivetRouter>
        ),
      },
      {
        path: "/dash/taskdetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://freelance-task-marketplace-server-lyart.vercel.app/tasks/${params.id}`
          ),
        element: (
          <PrivetRouter>
            <TaskDetails></TaskDetails>
          </PrivetRouter>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
