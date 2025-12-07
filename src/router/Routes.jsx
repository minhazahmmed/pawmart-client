import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import PrivateRoutes from "./PrivateRoutes";
import ServiceDetails from "../pages/ServiceDetails";
import ForgetPass from "../pages/ForgetPass";
import Error from "../pages/Error";
import ScrollToTop from "../component/ScrollToTop";
import AddService from "../pages/AddService";
import MyServices from "../pages/MyServices";
import UpdateService from "../pages/UpdateService";
import MyOrders from "../pages/MyOrders";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <RootLayout />
      </>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <ServiceDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/forget/:email",
        element: <ForgetPass />,
      },
      {
        path: "/add-services",
        element: (
          <PrivateRoutes>
            <AddService />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-services",
        element: (
          <PrivateRoutes>
            <MyServices />
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-service/:id",
        element: (
          <PrivateRoutes>
            <UpdateService />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoutes>
            <MyOrders />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
