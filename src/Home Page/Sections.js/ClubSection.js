import CourtsItem from "../Items.js/CourtsItem";
import GymItem from "../Items.js/GymItem";
import { Link } from "react-router-dom";

export default function ClubSection() {
  return (
    <section className="club-section">
      <div className="club-section-grid-div">
        <div className="club-section-grid">
          <div className="club-section-text-div">
            <h2 className="heading-secondary club-section-h2">
              Dive deep into our facilities!
            </h2>
            <p className="club-section-p">
              At My Tennis, we pride ourselves on offering state-of-the-art
              facilities to enhance your tennis experience. Our club boasts
              well-maintained, cushioned tennis courts that provide the perfect
              surface for players of all skill levels. Whether you're a seasoned
              pro or just starting out, you'll find our courts to be in
              impeccable condition, ensuring a smooth and enjoyable game every
              time you step on the court. Additionally, our club features modern
              amenities, including a spacious clubhouse with changing rooms, a
              pro shop stocked with the latest tennis gear, and a cozy lounge
              area for post-match relaxation. We are committed to creating a
              welcoming and inviting environment for all tennis enthusiasts,
              making us the ideal destination for your tennis passion.
            </p>
            <Link
              to="/gallery"
              className="club-section-Link club-section-btn1-display"
            >
              <button className="club-section-btn">
                Gallery{" "}
                <svg
                  className="gallery-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  class="ionicon"
                  viewBox="0 0 512 512"
                >
                  <rect
                    x="48"
                    y="80"
                    width="416"
                    height="352"
                    rx="48"
                    ry="48"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                  <circle
                    cx="336"
                    cy="176"
                    r="32"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="32"
                  />
                  <path
                    d="M304 335.79l-90.66-90.49a32 32 0 00-43.87-1.3L48 352M224 432l123.34-123.34a32 32 0 0143.11-2L464 368"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                </svg>
              </button>
            </Link>
          </div>
          <div className="club-section-img-div">
            <img
              className="club-section-img"
              src="/img/club-section-img.webp"
              alt="Different club facilities (tennis courts and gym)"
            />
            <Link
              to="/gallery"
              className="club-section-Link club-section-btn2-display"
            >
              <button className="club-section-btn">
                Gallery{" "}
                <svg
                  className="gallery-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  class="ionicon"
                  viewBox="0 0 512 512"
                >
                  <rect
                    x="48"
                    y="80"
                    width="416"
                    height="352"
                    rx="48"
                    ry="48"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                  <circle
                    cx="336"
                    cy="176"
                    r="32"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="32"
                  />
                  <path
                    d="M304 335.79l-90.66-90.49a32 32 0 00-43.87-1.3L48 352M224 432l123.34-123.34a32 32 0 0143.11-2L464 368"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <CourtsItem />
      <GymItem />
    </section>
  );
}
