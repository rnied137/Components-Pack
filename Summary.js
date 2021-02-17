import React from "react";

import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";

export const Summary = ({
  curStep,
  setCurStep,
  trackInfo,
  trackData,
  widgetData,
  date,
}) => {

  const dispatch = useDispatch();
  const { register, handleSubmit, watch, setValue, errors } = useForm();


  const onSubmit = (data) => {
  console.log(data)
  dispatch({type:"ADD_TRACKS",payload:data});

  };


  if (curStep !== 3) return null;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Title choosen by YOU!</label>
        <input
          className="form-control"
          id="title"
          name="title"
          type="text"
          value={trackData.title} // Prop: The email input data

          ref={register}
        />
        <label htmlFor="text">Widget Text!</label>
        <input
          className="form-control"
          id="text"
          name="text"
          type="text"
          placeholder="Enter title"
          value={trackData.text} // Prop: The email input data
          ref={register}
        />

        <label htmlFor="text">Url!</label>
        <input
          className="form-control"
          id="text"
          name="url"
          type="text"
          placeholder="Enter title"
          value={trackData.url} // Prop: The email input data
          ref={register}
        />

        <label htmlFor="widgetTitle">Widget Title</label>
        <input
          className="form-control"
          id="widgetTitle"
          name="widgetTitle"
          type="text"
          value={widgetData.widgetTitle} // Prop: The email input data
          ref={register}
        />

        <label htmlFor="date">Widget Date</label>
        <input
          className="form-control"
          id="date"
          name="widgetYear"
          type="text"
          value={widgetData.date} // Prop: The email input data
          ref={register}
        />
        <input type="submit"/>
      </form>

      <button onClick={() => setCurStep(2)}>Go back!</button>
    </div>
  );
};
