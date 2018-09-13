import React from "react";
import Addjob from "./Addjob/Addjob";
import Myjob from "./Myjob/Myjob";

const Myjobs = props => {
  return (
    <div>
      <p>My Jobs</p>
      <div>
        {props.myjobs.map(myjob => {
          return <Myjob key={myjob.id} myjob={myjob} />;
        })}
      </div>
      <div>
        <Addjob addJobHandler={props.addJobHandler} />
      </div>
    </div>
  );
};

export default Myjobs;
