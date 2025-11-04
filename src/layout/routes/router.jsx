import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Auth/Register";
import Login from "../../Pages/Auth/Login";
import MyBid from "../../Components/MyBid/MyBid";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../../Pages/Auth/Profile/Profile";
import CreateProduct from "../../Pages/Create/CreateProduct";
import ProductDetails from "../../Components/ProductDetails/ProductDetails";
import AllProducts from "../../Components/AllProducts/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "/all-products",
        loader: () => fetch(`http://localhost:3000/products`),
        Component: AllProducts,
      },
      {
        path: "/my-bid",
        element: (
          <PrivateRoute>
            <MyBid></MyBid>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/create-product",
        element: (
          <PrivateRoute>
            <CreateProduct></CreateProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },

      { path: "/register", Component: Register },
      { path: "/login", Component: Login },
    ],
  },
]);

export default router;
