import "./App.css";

import React from "react";
import { TopAgents } from "./TopAgents";
import { SkillWidget } from "./SkillWidget";
import { Circle } from "./Circle";
import { TimelineVertical } from "./TimelineVertical";
import { Card } from "./Card";
import { AbsenceBalance } from "./AbsenceBalance";

function App() {
  return (
    <>
      <div className="App" style={{ display: "flex" }}>
        <TopAgents />
      </div>
      <div>
        <Card backgroundColor="gray" opacity="0.8" width="350px">
          <SkillWidget fontColor="blue" />
        </Card>
        <Card backgroundColor="rgba(136,35,66,0.6)" width="350px">
          <SkillWidget color="purple" fontColor="black"  />
        </Card>
        <Card width="450px">
          <SkillWidget color="blue" percentValue="15" computeColor={true} fontColor="black" />
        </Card>
        <Card backgroundColor="orange" opacity="0.6" width="350px">
          <SkillWidget percentValue="11" color="red" fontColor="pink"  />
        </Card>
        <Card width="350px">
          <SkillWidget
            color="lightgreen"
            fontColor="purple"
            percentValue="52"
            computeColor={true}
          />
        </Card>
        <TimelineVertical />
      </div>

      <div>
        <AbsenceBalance />
      </div>
    </>
  );
}

export default App;
