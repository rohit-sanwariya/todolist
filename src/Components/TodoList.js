import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class TodoList extends Component {
    getStyle = () => {
        return {
            color: this.props.todo.completed ? "#333" : "##292b2c",
            textDecoration: this.props.todo.completed ? "line-through #333" : "none",
            backgroundColor: "#f4f4f4",
            padding: '10px',
            borderBottom: "1ps #333 dotted"
        }
    }
   

    render() {
        const {id,title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id) }   ></input>
                {" "}  { title}
                <button style={btnstyle} onClick={this.props.deleteTodo.bind(this,id)}>
                    X
                </button>
            </div>
        )
    }
}
TodoList.propTypes = {
    todo: PropTypes.object.isRequired,
}


const btnstyle ={
    backgroundColor:"#d9534f",
    padding:"5px 10px",
    margin:"5px 10px",
    color:"#f3f3f3",
    border:"none",
    borderRadius:"50%",
    cursor:"pointer",
    float:"right",

}
export default TodoList
