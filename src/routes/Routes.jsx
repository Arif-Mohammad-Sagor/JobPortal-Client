import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import About from '../pages/About';
import DetailCompany from "../components/DetailCompany";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element:<About/>
        },
        {
            path: '/company/:companyId',
            element:<DetailCompany></DetailCompany>
      }
    ],
  },
]);
export default router;