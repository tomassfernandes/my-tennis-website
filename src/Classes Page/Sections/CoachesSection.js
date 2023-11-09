import CoachesItem from "../Items/CoachesItem";

export default function CoachesSection() {
  return (
    <section className="coaches-section">
      <p className="who-we-are-p coaches-p">Our trusted professionals</p>
      <h2 className="heading-secondary coaches-h2">Coaches</h2>
      <div className="coaches-main-div">
        <CoachesItem />
      </div>
    </section>
  );
}
