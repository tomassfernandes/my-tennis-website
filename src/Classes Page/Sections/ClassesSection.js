import React, { useState } from "react";
import ScheduleItem from "../Items/ScheduleItem";
import { Link } from "react-scroll";

export default function ClassesSection() {
  const [activeDay, setActiveDay] = useState("Monday");

  const handleDayClick = (day) => {
    setActiveDay(day);
  };

  return (
    <section className="classes-main-section">
      <div className="classes-main-img-div"></div>
      <p className="schedule-p">Find the classes that fit you!</p>
      <h1>Schedule</h1>
      <div className="days-table-div">
        <h3
          className={
            activeDay === "Monday"
              ? "classes-day-active"
              : "classes-day-non-active"
          }
          onClick={() => handleDayClick("Monday")}
        >
          Monday
        </h3>
        <h3
          className={
            activeDay === "Tuesday"
              ? "classes-day-active"
              : "classes-day-non-active"
          }
          onClick={() => handleDayClick("Tuesday")}
        >
          Tuesday
        </h3>
        <h3
          className={
            activeDay === "Wednesday"
              ? "classes-day-active"
              : "classes-day-non-active"
          }
          onClick={() => handleDayClick("Wednesday")}
        >
          Wednesday
        </h3>
        <h3
          className={
            activeDay === "Thursday"
              ? "classes-day-active"
              : "classes-day-non-active"
          }
          onClick={() => handleDayClick("Thursday")}
        >
          Thursday
        </h3>
        <h3
          className={
            activeDay === "Friday"
              ? "classes-day-active"
              : "classes-day-non-active"
          }
          onClick={() => handleDayClick("Friday")}
        >
          Friday
        </h3>
        <h3
          className={
            activeDay === "Saturday"
              ? "classes-day-active"
              : "classes-day-non-active"
          }
          onClick={() => handleDayClick("Saturday")}
        >
          Saturday
        </h3>
        <h3
          className={
            activeDay === "Sunday"
              ? "classes-day-active"
              : "classes-day-non-active"
          }
          onClick={() => handleDayClick("Sunday")}
        >
          Sunday
        </h3>
      </div>
      <div className="schedule-main-div">
        <ScheduleItem activeDay={activeDay} />
        <Link
          to="classes-section" // This should match the ID of your ClassesSection component
          smooth={true}
          duration={500} // Adjust the duration as needed
        >
          <button className="more-info-btn">More Info</button>
        </Link>
      </div>
    </section>
  );
}
