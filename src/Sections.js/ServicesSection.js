import ServicesItem from "../Items.js/ServicesItem";

export default function ServicesSection() {
  return (
    <section className="services-section">
      <p className="what-we-offer-p">What we offer</p>
      <h2 className="heading-secondary">Services</h2>
      <div className="services-grid">
        <ServicesItem />
      </div>
    </section>
  );
}
