export default function CoachesItem() {
  const data = [
    { name: "Serena Sharpe", img: "/img/coach-1.webp" },
    { name: "Jasper Jumpshot", img: "/img/coach-2.webp" },
    { name: "Winston Wimbledon", img: "/img/coach-3.webp" },
    { name: "Harrison Hawk", img: "/img/coach-4.webp" },
  ];

  return data.map((item) => (
    <div className="coaches-div">
      <img className="coaches-img" src={item.img} alt={item.name} />
      <p className="coaches-name">{item.name}</p>
    </div>
  ));
}
