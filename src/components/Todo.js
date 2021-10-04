import React from "react";
import "./Todo.css";
import Button from "./Button";
import Input from "./Input";

export default class TODO extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: "",
      todos: [
        {
          text: "",
          check: false
        }
      ]
    };
  }

  setTodo = event => {
    console.log(this.state.todoText);
    console.log("click");
    this.setState({ todoText: event.target.value });
  };

  addTodo = () => {
    let todo = {
      text: this.state.todoText,
      check: false
    };
    this.setState({ todos:[...this.state.todos, todo]});
    
    console.log(this.state.todos);
  };

  removeTodo = () => {
    let todos = this.state.todos;
    todos = todos.filter(todos => todos.check !== true);
    todos.check = false;
    this.setState({ todos });
  };

  clearAllTodos = () => {
    let todos = [];
    this.setState({ todos });
  };

  handleCheck = (event, index) => {
    let check = event.target.checked;
    let todos = this.state.todos;
    todos[index].check = check;
    this.setState({ todos });
    console.log(todos);
  };

  render() {
    return (
      <div className="container">
        <div className="controls">
          <h1> My awesome todo</h1>
          <Input
            data={{ type: "text", class: "input", setTodo: this.setTodo }}
          />
          <br />
          <Button
            data={{
              type: "button",
              value: "Add Todo",
              class: "add",
              method: this.addTodo
            }}
          />
          <Button
            data={{
              type: "button",
              value: "Remove Done Todos",
              class: "remove",
              method: this.removeTodo
            }}
          />
          <Button
            data={{
              type: "button",
              value: "Clear List",
              class: "clear",
              method: this.clearAllTodos
            }}
          />

          {this.state.todos.map((todo, index) => {
            if (todo.text !== "") {
              return (
                <ul key={index} className="list">
                  <li className="mycheck">
                    <input
                      className="check"
                      type="checkbox"
                      onChange={event => this.handleCheck(event, index)}
                    ></input>
                    <label>{todo.text}</label>
                  </li>
                </ul>
              );
            } else if (this.state.todos.length === 1) {
              return <p key={0}>No Todos</p>;
            }
            else return <p key={0}></p>;
          })}
        </div>
      </div>
    );
  }
}
