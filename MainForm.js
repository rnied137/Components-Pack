import React, { useState } from "react";

import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Summary } from "./Summary";

// import { useForm } from "react-hook-form";
import "./MainForm.css";

export const MainForm = () => {
  const [trackData, setTrackData] = useState({
    title: "",
    text: "",
    url: "",
  });

  const [widgetData, setWidgetData] = useState({
    widgetTitle: "",
    date: "",
  });

  const [curStep, setCurStep] = useState(1);
  const [date, setDate] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log("target name" + name + "\n");
    console.log("target value" + value + "\n");

    // setTrackData({ ...trackData, [event.target.name]: value });
    // console.log(trackData.title);
    //console.log(trackData.trackInfo);
  };

  const showDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      <Step1
        curStep={curStep}
        handleChange={handleChange}
        setCurStep={setCurStep}
        trackData={trackData}
        setTrackData={setTrackData}
      />
      <Step2
        curStep={curStep}
        setCurStep={setCurStep}
        handleChange={(e) => showDate(e)}
        widgetData={widgetData}
        setWidgetData={setWidgetData}
      />
      <Summary
        curStep={curStep}
        date={date}
        widgetData={widgetData}
        trackData={trackData}
        setCurStep={setCurStep}
      />
    </>
  );
};
