import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../layouts/homeLayout/Home";
import Services from "../layouts/homeLayout/Services";
import About from "../layouts/homeLayout/About";
import Contact from "../layouts/homeLayout/Contact";
import ServiceDetails from "../layouts/homeLayout/ServiceDetails";
import Login from "../layouts/authLayout/Login";
import Register from "../layouts/authLayout/register";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "services",
        Component: Services,
      },
      {
        path: "services/:id",
        Component: ServiceDetails,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default Router;
