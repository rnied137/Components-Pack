import React from "react";
import { DatePicker } from "../DatePicker";

import { useForm } from "react-hook-form";

export const Step2 = ({ curStep, setCurStep, widgetData, setWidgetData }) => {
  const { register, handleSubmit, watch, setValue, errors } = useForm();

  const [date, setDate] = React.useState("");

  if (curStep !== 2) return null;

  const local_handleChange = (event) => {
    setDate(event.target.value);
  };

  const handleChange = (e) => {
    setWidgetData({ ...widgetData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const onSubmit = (data) => {
    setCurStep(3);
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="trackInfo">Track info</label>
        <DatePicker
          handleChange={(e) => handleChange(e)}
          id="date"
          name="date"
        />
        <div className="form-row">
          {" "}
          <label htmlFor="widgetTitle">Enter widgetTitle</label>
          <input
            className="form-control"
            id="widgetTitle"
            name="widgetTitle"
            type="text"
            placeholder="Enter widgetTitle"
            value={widgetData.widgetTitle}
            onChange={(e) => handleChange(e)}
            ref={register({ required: "You must add title" })}
          />
          {errors.widgetTitle && <p>Widget title should not be empty</p>}
          {/* {errors.widgetTitle && <p>widgetTitle Error</p>} */}
        </div>
       
        <input className="btn" type="submit" />
      </div>
      
    </form>
 <button
 className="btn btn-secondary"
 type="button"
 onClick={() => setCurStep(1)}
>
 Previous
</button>
    </>
  );
};
