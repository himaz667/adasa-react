import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container">

        <NavLink className="navbar-brand fw-bold text-primary fs-3" to="/">
          Adasa
        </NavLink>

        <div className="navbar-nav ms-auto gap-3">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active text-primary fw-bold" : "nav-link text-dark"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "nav-link active text-primary fw-bold" : "nav-link text-dark"
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active text-primary fw-bold" : "nav-link text-dark"
            }
          >
            About
          </NavLink>

        </div>
      </div>
    </nav>
  );
}
