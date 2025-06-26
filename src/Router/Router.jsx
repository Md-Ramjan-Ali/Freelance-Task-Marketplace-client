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
        path: "/addtask",
        element: (
          <PrivetRouter>
            <AddTask></AddTask>
          </PrivetRouter>
        ),
      },
      {
        path: "/browsetask",
        // loader: () =>
        //   fetch(
        //     "https://freelance-task-marketplace-server-lyart.vercel.app/tasks"
        //   ),
        Component: BrowseTask,
      },
      {
        path: "/myposttask",
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
        path: "/updatetask/:id",
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
