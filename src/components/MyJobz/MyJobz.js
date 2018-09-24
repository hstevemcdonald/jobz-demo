import React from "react";

const MyJobz = props => (
  <div>
    <p>My Jobs</p>
    <div>
      {this.props.myjobz.map(myjob => {
        return <Myjob key={myjob.id} myjob={myjob} />;
      })}
    </div>
    <div>
      <Addjob addJobHandler={this.props.addJobHandler} />
    </div>
  </div>
);

export default MyJobz;
