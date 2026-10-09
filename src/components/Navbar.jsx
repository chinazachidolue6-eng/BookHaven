import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* logo */}
      <a href="/" className="navbar-logo">
        <span className="logo-icon">📖</span>
        <span>BookHaven</span>
      </a>

      {/* Desktop view */}

      <div className="navbar-links">
        <a href="/" className="active">
          Home
        </a>
        <a href="/categories">Categories</a>
        <Link to="/favorites">Favorites</Link>
      </div>

      {/* Desktop actions */}

      <div className="navbar-actions">
        <div className="navbar-search">
          <span>🔍</span>
          <input type="text" placeholder="Search books..." />
          <span>🔍</span>
        </div>

        <button className="icon-button" aria-label="Profile">
          🤵
        </button>
      </div>

      {/* Mobile actions */}

      <div className="mobile-actions">
        <button className="icon-button" aria-label="Open menu">
          =
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
