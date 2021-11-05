import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: "",
  };
  changeFu = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  submitFu = (e) => {
    e.preventDefault();
    this.props.Add(this.state);
    this.setState({
      content: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitFu}>
          <label>Type your plan:</label>
          <input
            type="text"
            onChange={this.changeFu}
            value={this.state.content}
          ></input>
        </form>
      </div>
    );
  }
}

export default AddTodo;
