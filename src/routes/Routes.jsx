import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import SignIn from "../components/SignIn";
import Register from "../components/Register";
import Home from "../components/Home";
import Users from "../components/Users";

// Access the base URL from the .env file
const API_BASE_URL = import.meta.env.VITE_API_URL;

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch(`${API_BASE_URL}/coffees`),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`${API_BASE_URL}/coffees/${params.id}`),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch(`${API_BASE_URL}/users`),
      },
    ],
  },
]);

export default Routes;
