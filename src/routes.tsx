import { createBrowserRouter } from "react-router-dom";

import CategoryPage from "./components/pages/category";
import HomePage from "./components/pages/home";
import ProductPage from "./components/pages/product";
import DetailedCheckoutPage from "./components/pages/detailed-checkout";
import LayoutWrapper from "./components/layout";
import ErrorPage from "./components/pages/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "category/:categorySlug",
        element: <CategoryPage />,
      },
      {
        path: "category/:categorySlug/:productId",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "/checkout",
    element: <DetailedCheckoutPage />,
  },
]);
