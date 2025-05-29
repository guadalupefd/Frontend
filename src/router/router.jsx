import { createBrowserRouter } from "react-router-dom";
import Denied from "../pages/Denied.jsx";
import Diary from "../pages/Diary.jsx";
import Donation from "../pages/Donation.jsx";
import Home from "../pages/Home.jsx";
import HomeConsultant from "../pages/HomeConsultant.jsx";
import Login from "../pages/Login.jsx";
import LoginConsultant from "../pages/LoginConsultant.jsx";
import ProtectedRoute from "../pages/ProtectedRoute.jsx";
import Signup from "../pages/Signup.jsx";
import SignupConsultant from "../pages/SignupConsultant.jsx";
import Start from "../pages/Start.jsx";
import Token from "../pages/Token.jsx";
import UnprotectedRoute from "../pages/UnprotectedRoute.jsx";
import VerifyFacePage from "../pages/VerifyFace.jsx";
import Webcam from "../pages/Webcam.jsx";
import EjercicesEmotion from "../pages/EjerciceEmotion.jsx";
import EmotionalReminder from "../pages/EmotionalReminder.jsx"
import Dashboard from "../pages/Dashboard.jsx";
import Nosotros from "../pages/Nosotros.jsx";
import Logout from "../pages/Logout.jsx"


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
      {
        path: "/EjerciceScreen",
        element: <EjercicesEmotion />, 
      },
      {
        path: "/emotionalReminder",
        element: <EmotionalReminder />
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/diary",
        element: <Diary />,
      },
      {
        path: "/home-consultant",
        element: <HomeConsultant />,
      },
      {
        path: "/Logout",
        element: <Logout />,
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/nosotros",
        element: <Nosotros />,
      },
    ],
  },
  
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      // {
      //   path: "/home",
      //   element: <Home />,
      // },
      // {
      //   path: "/diary",
      //   element: <Diary />,
      // },
      // {
      //   path: "/home-consultant",
      //   element: <HomeConsultant />,
      // },
      // {
      //   path: "/donation",
      //   element: <Donation />,
      // },
      // {
      //   path: "/EjerciceScreen",
      //   element: <EjercicesEmotion />, 
      // },
      // {
      //   path: "/emotionalReminder",
      //   element: <EmotionalReminder />
      // },
      // {
      //   path: "/dashboard",
      //   element: <Dashboard />,
      // }
    ],
  },
]);

export default router;