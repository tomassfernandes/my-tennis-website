import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo-link">
          <img className="logo-img" src="/img/logo.png" alt="My Tennis logo" />
        </Link>
        <div className="nav-links-div">
          <Link to="/classes" className="nav-link">
            Classes
          </Link>

          <Link to="/gallery" className="nav-link">
            Gallery
          </Link>

          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
