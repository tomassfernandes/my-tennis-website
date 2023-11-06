export default function PricingItem() {
  const data = [
    {
      mainIcon: "/svg/server-outline.svg",
      title: "Basic",
      price: "15€",
      payment: "/Month",
      yesIcon: "/svg/checkmark-outline.svg",
      noIcon: "/svg/close-outline.svg",
      text: "fsfwfefefefefww",
      feature1: "okdoekdeokd",
      feature2: "okdoekdeokd",
      feature3: "okdoekdeokd",
    },
    {
      mainIcon: "/svg/flash-outline.svg",
      title: "Plus",
      price: "30€",
      payment: "/Month",
      yesIcon: "/svg/checkmark-outline.svg",
      noIcon: "/svg/close-outline.svg",
      text: "fsfwfefefefefww",
      feature1: "okdoekdeokd",
      feature2: "okdoekdeokd",
      feature3: "okdoekdeokd",
    },
    {
      mainIcon: "/svg/diamond-outline.svg",
      title: "Premium",
      price: "40€",
      payment: "/Month",
      yesIcon: "/svg/checkmark-outline.svg",
      noIcon: "/svg/close-outline.svg",
      text: "fsfwfefefefefww",
      feature1: "okdoekdeokd",
      feature2: "okdoekdeokd",
      feature3: "okdoekdeokd",
    },
  ];

  return data.map((item) => (
    <div className="pricing-div">
      <img className="pricing-main-icon" src={item.mainIcon} />
      <h3>{item.title}</h3>
      <p>
        {item.price} <span>{item.payment}</span>
      </p>
      <div className="features-div"></div>
    </div>
  ));
}
