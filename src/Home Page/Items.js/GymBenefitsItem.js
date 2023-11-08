export default function GymBenefitsItem() {
  const data = [
    { icon: "/svg/icon-strenght.png", text: "Enhanced Power" },
    { icon: "/svg/icon-injury.png", text: "Injury Prevention" },
    { icon: "/svg/icon-stamina.png", text: "Improved Endurance" },
  ];

  return data.map((item) => (
    <div className="gym-icons-div">
      <img className="gym-icon" src={item.icon} alt={`${item.text} icon`} />
      <p className="gym-icon-text">{item.text}</p>
    </div>
  ));
}
