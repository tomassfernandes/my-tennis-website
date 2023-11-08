import InfoItem from "../Items.js/InfoItem";
import FacilitiesItem from "../Items.js/FacilitiesItem";

export default function InfoSection() {
  return (
    <section className="about-section">
      <div className="info-grid">
        <InfoItem />
      </div>
      <div className="who-we-are-grid">
        <div className="who-we-are-left-div">
          <p className="who-we-are-p">Who we are</p>
          <h2 className="heading-secondary">Exceptional Tennis Facilities</h2>
          <p className="who-we-are-second-p">
            A place where tennis enthusiasts find their passion and skill
            embraced
          </p>
          <div className="facilities-grid">
            <FacilitiesItem />
          </div>
        </div>
        <div className="who-we-are-img-div">
          <img
            className="who-we-are-img"
            src="/img/tennis-player.webp"
            alt="Tennis player"
          />
        </div>
      </div>
    </section>
  );
}
