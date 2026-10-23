import { NavLink } from "react-router-dom";
import { navLinks } from "../config/navLinks";

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
      <img src="/Logo.png" alt="AllPDFs logo" />      </NavLink>

      <nav className="nav-links">
        {navLinks.map((link) => (
          <NavLink key={link.path} to={link.path} end={link.path === "/"}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="nav-right"></div>
    </header>
  );
}