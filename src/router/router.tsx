import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPath } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";
import { facultyPath } from "./faculty.routes";
import { studentPath } from "./student.routes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPath),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routeGenerator(facultyPath),
  },
  {
    path: "/student",
    element: <App />,
    children: routeGenerator(studentPath),
  },
  {
    path:"login",
    element:<Login/>
  },
  {
    path:"register",
    element:<Register/>
  }
]);

export default routes;
