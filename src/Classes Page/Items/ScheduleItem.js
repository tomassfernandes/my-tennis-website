export default function ScheduleItem({ activeDay }) {
  const data = [
    {
      /*-----------------------------
    ------------- MONDAY ------------
    ---------------------------------*/
      className: "Adults",
      time: "8h00 - 9h30",
      coach: "Serena Sharpe",
      day: "monday",
    },
    {
      className: "Adults",
      time: "8h30 - 10h00",
      coach: "Jasper Jumpshot",
      day: "monday",
    },
    {
      className: "Group",
      time: "18h00 - 19h30",
      coach: "Winston Wimbledon",
      day: "monday",
    },

    /*-----------------------------
    ------------- TUESDAY ------------
    ---------------------------------*/

    {
      className: "Junior",
      time: "19h00 - 20h30",
      coach: "Harrison Hawk",
      day: "monday",
    },
    {
      className: "Adults",
      time: "8h00 - 9h30",
      coach: "Serena Sharpe",
      day: "tuesday",
    },
    {
      className: "Group",
      time: "9h30 - 11h00",
      coach: "Jasper Jumpshot",
      day: "tuesday",
    },
    {
      className: "Junior",
      time: "15h00 - 16h30",
      coach: "Winston Wimbledon",
      day: "tuesday",
    },
    {
      className: "Adults",
      time: "18h00 - 19h30",
      coach: "Serena Sharpe",
      day: "tuesday",
    },
    {
      className: "Group",
      time: "19h30 - 21h00",
      coach: "Jasper Jumpshot",
      day: "tuesday",
    },

    /*-----------------------------
    ------------- WEDNESDAY ------------
    ---------------------------------*/

    {
      className: "Junior",
      time: "8h00 - 9h30",
      coach: "Harrison Hawk",
      day: "wednesday",
    },
    {
      className: "Adults",
      time: "9h30 - 11h00",
      coach: "Winston Wimbledon",
      day: "wednesday",
    },

    /*-----------------------------
    ------------- THURSDAY ------------
    ---------------------------------*/

    {
      className: "Adults",
      time: "8h00 - 9h30",
      coach: "Serena Sharpe",
      day: "thursday",
    },
    {
      className: "Adults",
      time: "9h30 - 11h00",
      coach: "Jasper Jumpshot",
      day: "thursday",
    },
    {
      className: "Group",
      time: "15h00 - 16h30",
      coach: "Winston Wimbledon",
      day: "thursday",
    },
    {
      className: "Junior",
      time: "18h00 - 19h30",
      coach: "Harrison Hawk",
      day: "thursday",
    },
    {
      className: "Group",
      time: "19h30 - 21h00",
      coach: "Serena Sharpe",
      day: "thursday",
    },

    /*-----------------------------
    ------------- FRIDAY ------------
    ---------------------------------*/

    {
      className: "Adults",
      time: "8h00 - 9h30",
      coach: "Harrison Hawk",
      day: "friday",
    },
    {
      className: "Junior",
      time: "9h30 - 11h00",
      coach: "Winston Wimbledon",
      day: "friday",
    },
    {
      className: "Adults",
      time: "15h00 - 16h30",
      coach: "Jasper Jumpshot",
      day: "friday",
    },
    {
      className: "Adults",
      time: "18h00 - 19h30",
      coach: "Serena Sharpe",
      day: "friday",
    },
    {
      className: "Junior",
      time: "19h30 - 21h00",
      coach: "Harrison Hawk",
      day: "friday",
    },

    /*-----------------------------
    ------------- SATURDAY ------------
    ---------------------------------*/

    {
      className: "Group",
      time: "8h00 - 9h30",
      coach: "Winston Wimbledon",
      day: "saturday",
    },
    {
      className: "Junior",
      time: "9h30 - 11h00",
      coach: "Serena Sharpe",
      day: "saturday",
    },
    {
      className: "Adults",
      time: "15h00 - 16h30",
      coach: "Harrison Hawk",
      day: "saturday",
    },
    {
      className: "Group",
      time: "18h00 - 19h30",
      coach: "Winston Wimbledon",
      day: "saturday",
    },
    {
      className: "Junior",
      time: "19h30 - 21h00",
      coach: "Serena Sharpe",
      day: "saturday",
    },

    /*-----------------------------
    ------------- SUNDAY ------------
    ---------------------------------*/
    {
      time: "8h00 - 9h30",
      coach: "Jasper Jumpshot",
      day: "sunday",
    },
  ];

  const filteredData = data.filter(
    (item) => item.day.toLowerCase() === activeDay.toLowerCase()
  );

  return (
    <div>
      {filteredData.map((item, index) =>
        item.className ? (
          <div className="schedule-div" key={index}>
            <div className="schedule-class-type-div">
              <p>Class type</p>
              <h4>{item.className}</h4>
            </div>
            <div className="schedule-class-type-div">
              <p>Time</p>
              <h4>{item.time}</h4>
            </div>
            <div className="schedule-class-type-div">
              <p>Coach</p>
              <h4>{item.coach}</h4>
            </div>
            <button className="schedule-btn">Join Now</button>
          </div>
        ) : (
          <p className="no-classes-message">No Classes, check back later!</p>
        )
      )}
    </div>
  );
}
