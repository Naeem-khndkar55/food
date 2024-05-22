import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Cart from "../components/Cart/Cart";
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder";

const AppRouter = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/placeorder",
      element: <PlaceOrder />,
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default AppRouter;
