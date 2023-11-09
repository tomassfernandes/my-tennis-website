import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link href="Services" className="nav-link">
          Services
        </Link>
        <Link to="/classes" className="nav-link">
          Classes
        </Link>

        <img className="logo-img" src="/img/logo.png" alt="My Tennis logo" />

        <Link to="/gallery" className="nav-link">
          Gallery
        </Link>
        <Link href="About" className="nav-link">
          About
        </Link>
      </nav>
    </header>
  );
}
