import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {
  Register,
  Login,
  Error,
  DashboardLayout,
  Landing,
  HomeLayout,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
} from "./pages";
import { Children } from "react";


export const checkDeafultTheme = () => {
  const isDarkTheme = localStorage.getItem("dark-theme")=== "true";
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDeafultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout  />,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          {
            path: "stats",
            element: <Stats />,
          },

          {
            path: "all-jobs",
            element: <AllJobs />,
          },

          {
            path: "profile",
            element: <Profile />,
          },

          {
            path: "admin",
            element: <Admin />,
          },
        ],
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
