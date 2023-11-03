import CourtsItem from "../Items.js/CourtsItem";
import GymItem from "../Items.js/GymItem";

export default function ClubSection() {
  return (
    <section className="club-section">
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
            pro or just starting out, you'll find our courts to be in impeccable
            condition, ensuring a smooth and enjoyable game every time you step
            on the court. Additionally, our club features modern amenities,
            including a spacious clubhouse with changing rooms, a pro shop
            stocked with the latest tennis gear, and a cozy lounge area for
            post-match relaxation. We are committed to creating a welcoming and
            inviting environment for all tennis enthusiasts, making us the ideal
            destination for your tennis passion.
          </p>
          <button className="club-section-btn">View More</button>
        </div>
        <div className="club-section-img-div">
          <img
            className="club-section-img"
            src="/img/club-section-img.webp"
            alt="Different club facilities (tennis courts and gym)"
          />
        </div>
      </div>
      <CourtsItem />
      <GymItem />
    </section>
  );
}
