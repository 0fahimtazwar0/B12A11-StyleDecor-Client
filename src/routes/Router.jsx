import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../layouts/homeLayout/Home";
import Services from "../layouts/homeLayout/Services";
import About from "../layouts/homeLayout/About";
import Contact from "../layouts/homeLayout/Contact";

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
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);

export default Router;
