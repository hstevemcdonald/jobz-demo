// import React, { Component } from "react";
import { connect } from "react-redux";

import MyJobz from "../../components/MyJobz/MyJobz";

const mapStateToProps = state => {
  return { myjobz: state.myjobz };
};

export default connect(mapStateToProps)(MyJobz);
