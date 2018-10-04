import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import AddJob from "../../components/AddJob/AddJob";
import addJob from "../../actions/index";
import uuidv1 from "uuid";

const mapDispatchToProps = dispatch => {
  return {
    addJob: job => dispatch(addJob(job))
  };
};

class AddJobContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.redirect = false;
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e, key) {
    let newState = { ...this.state };
    newState[key] = e.target.value;
    this.setState(newState);
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const { company, title, location, description } = this.state;
    const id = uuidv1();
    this.props.addJob({
      id,
      company,
      title,
      location,
      description
    });
    this.setState({});
    this.redirect = true;
  }

  render(props) {
    if (this.redirect) {
      return <Redirect to="/myjobz" />;
    }
    return (
      <AddJob
        {...props}
        change={this.onChangeHandler}
        onSubmit={this.onSubmitHandler}
      />
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddJobContainer);
