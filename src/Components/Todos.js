import React, { Component } from 'react'
import TodoList from './TodoList';
import PropTypes from 'prop-types';
export class Todos extends Component {
  
    render() {
        return (
            
          this.props.todos.map(
            (todo)=>(
            <TodoList todo={todo} key={todo.id} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo} />
            )
          )
          
        )
    }
}

Todos.propTypes  = {
  todos:PropTypes.array.isRequired,
}
export default Todos
