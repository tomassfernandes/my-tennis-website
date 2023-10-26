export default function AboutItem() {
  const AboutItem = [
    { num: "8", text: "Courts" },
    { num: "12", text: "Coaches" },
    { num: "100+", text: "Members" },
    { num: "2", text: "Gyms" },
  ];

  return <div>{AboutItem.map((item) => item.num)}</div>;
}
