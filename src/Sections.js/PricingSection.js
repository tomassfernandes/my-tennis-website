import PricingItem from "../Items.js/PricingItem";

export default function PricingSection() {
  return (
    <section className="pricing-section">
      <p className="what-we-offer-p">Choose your plan</p>
      <h2 className="heading-secondary ">Pricing</h2>
      <div className="pricing-button-div">
        <button className="monthly-btn">Monthly</button>
        <button className="yearly-btn">Yearly</button>
      </div>
      <div className="pricing-grid">
        <PricingItem />
      </div>
    </section>
  );
}
