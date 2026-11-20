import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <footer className="bg-dark text-white text-center py-4">
        <p className="mb-0">© 2026 Adasa. All Rights Reserved.</p>
      </footer>
    </>
  );
}

