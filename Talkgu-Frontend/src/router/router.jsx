import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import Home from "../pages/Home.jsx";
import Start from "../pages/Start.jsx";
import ProtectedRoute from "../pages/ProtectedRoute.jsx";
import UnprotectedRoute from "../pages/UnprotectedRoute.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <UnprotectedRoute />,
        children: [
            {
                path: "/",
                element: <Start />,
            },
            {
                path: "/login",
                element: <Login />,
            },            
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
      },

  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

export default router;