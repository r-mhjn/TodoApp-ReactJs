import React from "react";

export default class Input extends React.Component {
   

  render() {
    return (
      <input
        type={this.props.data.type}
        onChange={this.props.data.setTodo}
        className={this.props.data.class}
       
      />
    );
  }
}
