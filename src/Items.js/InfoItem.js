export default function InfoItem() {
  const infoItem = [
    { num: 8, text: "Courts" },
    { num: 12, text: "Coaches" },
    { num: 100, text: "Members" },
    { num: 2, text: "Gyms" },
  ];

  return (
    <>
      {infoItem.map((item, index) => (
        <div className="info-item-div" key={index}>
          <p className="info-item-num">
            {item.num >= 100 ? `${item.num}+` : item.num}
          </p>
          <p className="info-item-text">{item.text}</p>
        </div>
      ))}
    </>
  );
}
