import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "./index.css";
import Contact from "./routes/contact";
import ErrorPage from "./routes/Error";
import Root from "./routes/r1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },

  {
    path: "contacts/:contactId",
    element: <Contact />,
  }
]);

export default function App() {

  return <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
}