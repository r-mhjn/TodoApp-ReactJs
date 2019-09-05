import React from "react";
// import "./Todo.css";

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <button
        type={this.props.data.type}
        className={this.props.data.class}
        onClick={this.props.data.method}
      >
        {this.props.data.value}
      </button>
    );
  }
}
