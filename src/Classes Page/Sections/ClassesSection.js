import ScheduleItem from "../Items/ScheduleItem";

export default function ClassesSection() {
  return (
    <section className="classes-main-section">
      <div className="classes-main-img-div"></div>
      <p className="schedule-p">Find the classes that fit you!</p>
      <h1>Schedule</h1>
      <div className="days-table-div">
        <h3 className="classes-day-active">Monday</h3>
        <h3 className="classes-day-non-active">Tuesday</h3>
        <h3 className="classes-day-non-active">Wednesday</h3>
        <h3 className="classes-day-non-active">Thursday</h3>
        <h3 className="classes-day-non-active">Friday</h3>
        <h3 className="classes-day-non-active">Saturday</h3>
        <h3 className="classes-day-non-active">Sunday</h3>
      </div>
      <div className="schedule-main-div">
        <ScheduleItem />
      </div>
    </section>
  );
}
