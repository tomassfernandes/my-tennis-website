export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="Services" className="nav-link">
          Services
        </a>
        <a href="Services" className="nav-link">
          Classes
        </a>

        <img className="logo-img" src="/img/logo.png" alt="My Tennis logo" />

        <a href="Gallery" className="nav-link">
          Gallery
        </a>
        <a href="About" className="nav-link">
          About
        </a>
      </nav>
    </header>
  );
}
