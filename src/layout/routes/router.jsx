import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Auth/Register";
import Login from "../../Pages/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/register", Component: Register },
      { path: "/login", Component: Login },
    ],
  },
]);

export default router;
