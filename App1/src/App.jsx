import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./components/MainLayout";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import PostDetails from "./pages/PostDetails";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },

      { path: "/blog", element: <Blog /> },

      { path: "/about", element: <About /> },

      { path: "/blog/:postId", element: <PostDetails /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;


