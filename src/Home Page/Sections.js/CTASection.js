import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="background-color-div">
        <div className="cta-div">
          <h1 className="heading-primary">
            Your <span>tennis adventure</span> starts here!
          </h1>
          <p>
            Maximize your use of our facilities to elevate your tennis skills to
            the next level.
          </p>
          <Link to="/classes" className="cta-btn-Link">
            <button className="cta-button">
              Our Classes
              <svg
                className="arrow-svg"
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M216 352l96-96-96-96"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
