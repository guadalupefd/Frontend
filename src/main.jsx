import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { AuthProvider, useAuth } from "./auth/AuthProvider.jsx";
import router from "./router/router.jsx";


function AppWithAuth() {
  const { loading } = useAuth();

  if (loading) {return}

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <AppWithAuth/>
    </AuthProvider>
  </StrictMode>
);
