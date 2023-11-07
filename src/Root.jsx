import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Link,
  Outlet,
  createHashRouter,
  createMemoryRouter,
} from "react-router-dom";
import "./App.css";
import App from "./App";
import About from "./views/About";
import Home from "./views/Home";
import Recipes from "./views/Recipes";
import ErrorPage from "./views/ErrorPage";
import Details from "./views/Details";
import RecipeTime from "./views/MyRecipeTime";
import FastFood from "./views/FastFood";
import SlowFood from "./views/SlowFood";
import TimeLayout from "./components/TimeLayout";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { app, auth } from "./config/firebaseConfig";
import Register from "./views/Register";
// import VideoBackground from "./images-videos/VideoBackground";

function Root() {
  console.log("app :>> ", app);
  console.log("auth :>> ", auth);
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
        <Route path="recipes/:recipeName" element={<Details />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        {/* Or mealtime? Like breakfast, lunch...? */}
        <Route path="recipeTime" element={<TimeLayout />}>
          <Route index element={<RecipeTime />} />
          <Route path="fastfood" element={<FastFood />} />
          <Route path="slowfood" element={<SlowFood />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
      {/* <VideoBackground /> */}
      <Outlet />
    </>
  );
}

export default Root;
