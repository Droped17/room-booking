import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <HomePage /> }],
  },
]);

// Create Route
export default function Route() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
