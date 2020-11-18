import React, { Component } from "react";
import Todos from "./Components/Todos";
import "./App.css";
import Header from "./Components/Layout/Header";
import AddTodo from "./Components/AddTodo";
export class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Buy Milk",
        completed: false,
      },
      {
        id: 2,
        title: "Buy candy",
        completed: false,
      },

      {
        id: 3,
        title: "Buy Lamps",
        completed: false,
      },
    ],
  };

  //toggle
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = (!todo.completed);
        }

        return todo;
      }),
    });
  };
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id != id)],
    });
  };
  addTodo = (title) => {
   const newTodo={
     id:this.state.todos.length+1,
     title,
     completed:false,
   };
   this.setState({ todos: [...this.state.todos, newTodo] })
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            markComplete={this.markComplete}
            todos={this.state.todos}
            deleteTodo={this.deleteTodo}
          />
          {console.log(this.state.todos.length)}
        </div>
      </div>
    );
  }
}

export default App;
