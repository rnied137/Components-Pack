import React, { useState, useEffect, useRef } from "react";

import "./DatePicker.css";

export const DatePicker = ({handleChange, ref}) => {
  const [currentDay, setCurrentDay] = useState(1);
  const [dayOfWeek, setDayOfWeek] = useState(0);
  const [days, setDays] = useState([]);
  const [year, setYear] = useState(2021);
  const [month, setMonth] = useState("February");
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef  = useRef(null);

  let weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const generateCalendar = (year, month) => {
    console.log("Right now i am using " + month + " / " + year);
    let firstDay = new Date(year, month, 1);
    console.log("First day of " + month + " - " + firstDay);
    let weekday = firstDay.getDay();
    setDayOfWeek(weekday);
    console.log("days of week " + weekday); //0 = sunday //1 == mon
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    console.log(daysInMonth + " in month" + month + " year" + year);
    const daysArray = Array.from(Array(daysInMonth).keys()).map(
      (i, index) => i + 1
    );
    console.log(daysArray);
    setDays(daysArray);
  };

  const isFirstDay = (day) => {
    if (day === 1) return true;
  };

  const changeOpenState = (e) => {
    setIsOpen(!isOpen);
  };

  const increaseMonth = () => {
    const currIndex = monthNames.indexOf(month);
    if (currIndex >= monthNames.length - 1) {
      setMonth(monthNames[0]);
      return;
    }
    setMonth(monthNames[currIndex + 1]);
  };

  const decreateMonth = () => {
    const currIndex = monthNames.indexOf(month);
    if (currIndex === 0) {
      setMonth(monthNames[monthNames.length - 1]);
      return;
    }
    setMonth(monthNames[currIndex - 1]);
  };

  const increaseYear = () => {
    if (year > 2100) return;
    setYear(year + 1);
  };

  const decreaseYear = () => {
    if (year === 1) return;
    setYear(year - 1);
  };


  
  useEffect(() => {
    // ref?.current.focus();
    // ref?.current.blur();
    datePickerRef?.current?.focus();
    datePickerRef?.current?.blur();
  },[month, year, currentDay])

  useEffect(() => {
    generateCalendar(year, monthNames.indexOf(month));
  }, [month, year]);

  return (
    <div className="container">
      {isOpen ? (
        <div className="calendar">
          <div className="calendar-inner">
            <div className="calendar-top">
              <div className="calendar-month">
                <i onClick={decreateMonth} className="fa fa-chevron-left"></i>

                <span>{month}</span>
                <i onClick={increaseMonth} className="fa fa-chevron-right"></i>
              </div>
              <div className="calendar-year">
                {" "}
                <i onClick={decreaseYear} className="fa fa-chevron-left"></i>
                <span> {year} </span>
                <i onClick={increaseYear} className="fa fa-chevron-right"></i>
              </div>{" "}
            </div>
            <div className="calendar-content">
              <div className="calendar-label">
                {weekdays.map((day, index) => (
                  <li>{day}</li>
                ))}
              </div>
              <div className="calendar-days">
                {dayOfWeek > 0
                  ? Array.from(
                      Array(dayOfWeek - 1).keys()
                    ).map((day, index) => <li className="day-empty"></li>)
                  : null}
                {days.map((day, index) => (
                  <li onClick={(e) => setCurrentDay(day)} className="day">
                    {day}
                  </li>
                ))}
              </div>
              <div className="choosen-date">{`${currentDay}/${month}/${year}`}</div>
      
            
            </div>
          </div>
        </div>
      ) : null}
      <input
         ref={datePickerRef}
        // ref={register}
        onBlur={(e) => handleChange(e)}
        onClick={(e) => changeOpenState(e)}
        className="datepicker"
        type="text"
        id="datepicker"
        placeholder="DD/MM/YYYY"
        name="date"
        value={`${currentDay} ${month} ${year}`}
      />
    </div>
  );
};