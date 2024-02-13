import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
//Pages
import Home from "./pages/Home.jsx";
import CreateBooks from "./pages/CreateBooks.jsx";
import ShowBook from "./pages/ShowBook.jsx";
import EditBook from "./pages/EditBook.jsx";
import DeleteBooks from "./pages/DeleteBooks.jsx";
import ErrorElement from "./pages/ErrorElement.jsx";
import AuthPages from "./pages/AuthPages.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/books/create",
        element: <CreateBooks />,
      },
      {
        path: "/books/details/:id",
        element: <ShowBook />,
      },
      {
        path: "/books/edit/:id",
        element: <EditBook />,
      },
      {
        path: "/books/delete/:id",
        element: <DeleteBooks />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/auth/registration",
        element: <AuthPages />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
