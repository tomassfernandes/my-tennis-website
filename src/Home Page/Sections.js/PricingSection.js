import { useState } from "react";
import PricingItem from "../Items.js/PricingItem";

export default function PricingSection() {
  const [activeBtn, setActiveBtn] = useState("monthly");

  function onActive(btnType) {
    setActiveBtn(btnType);
  }

  return (
    <section className="pricing-section">
      <p className="what-we-offer-p">Choose your plan</p>
      <h2 className="heading-secondary">Pricing</h2>
      <div className="pricing-button-div">
        <button
          className={activeBtn === "monthly" ? "active-btn" : "non-active-btn"}
          onClick={() => onActive("monthly")}
        >
          Monthly
        </button>
        <button
          className={activeBtn === "yearly" ? "active-btn" : "non-active-btn"}
          onClick={() => onActive("yearly")}
        >
          Yearly
        </button>
      </div>
      <div className="pricing-grid-div">
        <div className="pricing-grid">
          {activeBtn === "monthly" && <PricingItem type="monthly" />}
          {activeBtn === "yearly" && <PricingItem type="yearly" />}
        </div>
      </div>
    </section>
  );
}
