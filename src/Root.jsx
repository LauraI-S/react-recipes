import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import "./App.css";
import App from "./App";
import Home from "./views/Home";
import Recipes from "./views/Recipes";
import ErrorPage from "./views/ErrorPage";

import TimeLayout from "./components/TimeLayout";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { app, auth, db } from "./config/firebaseConfig";
import Register from "./views/Register";
import Login from "./components/Login";
import Chat from "./views/chat";

function Root() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />} errorElement={<ErrorPage />}>
        <Route path="home" element={<Home />} />
        <Route
          path="recipes"
          element={
            <ProtectedRoute>
              <Recipes />
            </ProtectedRoute>
          }
        />
        {/* <Route path="recipes/:recipeName" element={<Details />} /> */}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route
          path="chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
        {/* <Route path="about" element={<About />} /> */}
        {/* Or mealtime? Like breakfast, lunch...? */}
        {/* <Route path="recipeTime" element={<TimeLayout />}>
          <Route index element={<RecipeTime />} />
          <Route path="fastfood" element={<FastFood />} />
          <Route path="slowfood" element={<SlowFood />} />
        </Route> */}
      </Route>
    )
  );

  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />

        <Outlet />
      </AuthContextProvider>
    </>
  );
}

export default Root;
