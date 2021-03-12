import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { TopAgents } from "./TopAgents";
import { SkillWidget } from "./SkillWidget";

function App() {
  return (
    <>
      <div className="App" style={{ display: "flex" }}>
        <TopAgents />
        <TopAgents chartColor="lightblue" />
      </div>
      <div>
        <SkillWidget fontColor="blue" />
        <SkillWidget color="purple" />
        <SkillWidget color="blue" />
        <SkillWidget color="red" />
        <SkillWidget color="lightgreen" fontColor="purple" percentValue="42" />
      </div>
    </>
  );
}

export default App;
