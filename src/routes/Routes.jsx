import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import SignIn from "../components/SignIn";
import Register from "../components/Register";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: () => fetch("http://localhost:5000/coffees"),
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default Routes;
