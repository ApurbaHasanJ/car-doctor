import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import OrderReview from "../pages/OrderReview/OrderReview";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoutes>
            <CheckOut />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://car-doctor-server-beige-gamma.vercel.app/services/${params.id}`),
      },
      {
        path: "/orderReviews",
        element: (
          <PrivateRoutes>
            <OrderReview />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default router;
