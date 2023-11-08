export default function ScheduleItem() {
  const data = [
    { className: "Group", time: "11h00 - 12h30", coach: "HYHTTTH" },
    { className: "Group", time: "11h00 - 12h30", coach: "HYHTTTH" },
    { className: "Group", time: "11h00 - 12h30", coach: "HYHTTTH" },
  ];

  return data.map((item) => (
    <div className="schedule-div">{item.className}</div>
  ));
}
