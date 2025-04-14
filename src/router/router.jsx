import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import Home from "../pages/Home.jsx";
import Start from "../pages/Start.jsx";
import ProtectedRoute from "../pages/ProtectedRoute.jsx";
import UnprotectedRoute from "../pages/UnprotectedRoute.jsx";
import Token from "../pages/Token.jsx";
import LoginConsultant from "../pages/LoginConsultant.jsx"
import SignupConsultant from "../pages/SignupConsultant.jsx"
import Denied from "../pages/Denied.jsx"
import HomeConsultant from "../pages/HomeConsultant.jsx"
import Webcam from "../pages/Webcam.jsx";
import VerifyFacePage from "../pages/VerifyFace.jsx";
import Diary from "../pages/Diary.jsx";
import Donation from "../pages/Donation.jsx";

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
        path: "/token",
        element: <Token />,
      },
      {
          path: "/login",
          element: <Login />,
      },            
      {
          path: "/signup",
          element: <Signup />,
      },
      {
        path: "/login-consultant",
        element: <LoginConsultant />,
      },
      {
        path: "/signup-consultant",
        element: <SignupConsultant />,
      },
      {
        path: "/webcam",
        element: <Webcam />,
      },
      {
        path: "/verify-face",
        element: <VerifyFacePage />,
      },
      {
        path: "/denied",
        element: <Denied />,
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
      {
        path: "/home-consultant",
        element: <HomeConsultant />,
      },
      {
        path: "/diary",
        element: <Diary />,
      },
      {
        path: "/donation",
        element: <Donation />,
     },
    ],
  },
]);

export default router;