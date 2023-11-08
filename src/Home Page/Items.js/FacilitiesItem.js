export default function FacilitiesItem() {
  const FacilitiesItem = [
    { icon: "/svg/tennis-court.png", text: "New Courts" },
    { icon: "/svg/barbell.png", text: "Modern Equipment" },
    { icon: "/svg/handshake.png", text: "Professional Help" },
  ];
  return FacilitiesItem.map((item, index) => (
    <div className="facilities-div" key={index}>
      <img className="facilities-img" src={item.icon} alt={item.text} />
      <p>{item.text}</p>
    </div>
  ));
}
