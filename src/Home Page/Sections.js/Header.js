import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Header() {
  const navRef = useRef();

  function showNavBar() {
    navRef.current.classList.toggle("responsive-nav");
  }

  return (
    <header className="header">
      <div className="header-div">
        <Link to="/" className="logo-link">
          <img className="logo-img" src="/img/logo.png" alt="My Tennis logo" />
        </Link>
        <nav ref={navRef} className="nav">
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
            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M368 368L144 144M368 144L144 368"
                />
              </svg>
            </button>
          </div>
        </nav>
        <button className="nav-btn" onClick={showNavBar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M80 160h352M80 256h352M80 352h352"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
