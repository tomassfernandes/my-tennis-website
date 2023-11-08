export default function ServicesItem() {
  const servicesItem = [
    { img: "/svg/lessons-programs.svg", text: "Lessons and Programs" },
    { img: "/svg/youth-develop.svg", text: "Youth Development" },
    { img: "/svg/personal-trainer.svg", text: "Personal Trainer" },
  ];

  return (
    <>
      {servicesItem.map((item, index) => (
        <div className="services-item-div" key={index}>
          <img
            className="services-img"
            src={item.img}
            alt={`${item.text} illustration`}
          />
          <p className="services-item-text">{item.text}</p>
        </div>
      ))}
    </>
  );
}
