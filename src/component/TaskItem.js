import React, { Component } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.taskItem.task,
      isEditing: false,
    };
  }
  setEditingState = (isEditing) => {
    this.setState({ isEditing: isEditing });
  };
  deleteTask = () => {
    this.props.deleteTask(this.props.id);
  };
  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.editTask(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  };

  render() {
    return (
      // <tr>
      //   <td>{this.props.taskItem.task}</td>
      //   <td>
      //     <FaEdit />
      //     <RiCloseCircleLine />
      //   </td>
      // </tr>
      <div>
        {this.state.isEditing ? (
          <>
            <form onSubmit={this.handleSubmit}>
              <input
                value={this.state.task}
                onChange={this.handleChange}
                autoFocus
              />
            </form>
            <button type="submit" onClick={this.handleSubmit}>
              Save
            </button>
            <button onClick={() => this.setEditingState(false)}>Back</button>
          </>
        ) : (
          <>
            <div className="taskItem">
              <div className="taskItem-list">{this.props.taskItem.task}</div>
              <div className="icon">
                <FaEdit
                  className="edit"
                  onClick={() => this.setEditingState(true)}
                />
                <AiFillDelete className="close" onClick={this.deleteTask} />
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
