import React, { useState, useEffect } from "react";
import "./Calendar.css";
import moment from "moment";

export const Calendar = () => {
  const [days, setDays] = useState([]);
  const [today, setToday] = useState(false);

  useEffect(() => {
    let monthDate = moment().startOf("month");
    let array = [...Array(monthDate.daysInMonth())].map((_, i) =>
      monthDate.clone().add(i, "day")
    );
    setDays(array);
    console.log("days" + days);
    return () => {
      console.log("cleanup");
    };
  }, []);

  const isToday = (day) => {
    return moment().isSame(day, "day");
  };

  const columns = (index) => {
    if (index == 0) {
      return days[0].day() + 1;
    }
  };

  return (
    <>
      <div className="calendar-labels">
        <div>FRI</div>
        <div>SAT</div>
        <div>SUN</div> <div>FRI</div>
        <div>MON</div>
        <div>TUE</div>
        <div>WED</div>
      </div>
      <div className="calendar">
        {
          days.map((day, index) => {
            let p = columns(index) | index;
            return isToday(day) ? (
              <div className="today" key={p}>
                {day.format("D")}
              </div>
            ) : (
              <div className="days" key={p}>
                {day.format("D")}
              </div>
            );
          })
          //days.map((day, index)=>moment().format(day,'D'))
        }
      </div>
    </>
  );
};
