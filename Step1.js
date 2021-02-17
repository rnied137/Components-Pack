import React from "react";

import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";

export const Step1 = ({ curStep, setCurStep, trackData, setTrackData }) => {
  const { register, handleSubmit, watch, setValue, errors } = useForm();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTrackData({ ...trackData, [e.target.name]: e.target.value });

    console.log(trackData);
  };

  if (curStep !== 1) return null;

  const onSubmit = (data) => {
    setCurStep(2);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {" "}
      <div className="form-row">
        <label htmlFor="title">Enter title</label>
        <input
          className="form-control"
          id="title"
          name="title"
          type="text"
          placeholder="Enter title"
          ref={register({ required: "You must add title" })}
          onChange={(e) => handleChange(e)}
          value={trackData.title}
        />
        {errors.title && <p>title cannot be empty</p>}
      </div>
      <div className="form-row">
        {" "}
        <label htmlFor="text">Enter text</label>
        <input
          className="form-control"
          id="text"
          name="text"
          type="text"
          placeholder="Enter text"
          ref={register({ required: "You must add text of new added track" })}
          onChange={handleChange}
          value={trackData.text}
        />
        {errors.text && <p>Text cannot be empty</p>}
      </div>
      <div className="form-row">
        {" "}
        <label htmlFor="url">Enter url</label>
        <input
          className="form-control"
          id="url"
          name="url"
          type="text"
          placeholder="Enter url"
          ref={register({ required: "Please add embedded track url" })}
          onChange={handleChange}
          value={trackData.url}
        />
        {errors.url && <p>Url cannot be empty</p>}
      </div>
      {!errors.url && !errors.text && !errors.title && (
        <input className="btn" type="submit" />
      )}
    </form>
  );
};
