import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../Register/Register";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import AddAToy from "../pages/AddAToy/AddAToy";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import UpdatedToy from "../pages/MyToys/UpdatedToy";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <Register></Register>,
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "addToy",
        element: (
          <PrivetRoute>
            <AddAToy></AddAToy>
          </PrivetRoute>
        ),
      },
      {
        path: "/toyDetails/:id",
        element: (
          <PrivetRoute>
            <ToyDetails></ToyDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-side-dun.vercel.app/allToys/${params.id}`
          ),
      },
      {
        path: "myToy",
        element: (
          <PrivetRoute>
            <MyToys></MyToys>
          </PrivetRoute>
        ),
      },
      {
        path: "/updatedToy/:id",
        element: <UpdatedToy></UpdatedToy>,
      },
    ],
  },
]);

export default router;
