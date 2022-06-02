import React, { Component } from "react";

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }
  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTask(this.state.task);
    this.setState({ task: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <input
          className="input"
          type="text"
          placeholder="e.g eggs"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    );
  }
}