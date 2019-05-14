import React from "react";
import { connect } from "react-redux";
import { completeTodo } from "../actions";
import { deleteTodo } from "../actions";
import {  Button } from 'reactstrap';


const Todo = props =>  {
    
    const completeToggle = event => {
        event.preventDefault();
        props.completeTodo(props.item.id)
    }

    const deleteTodo = event => {
        event.preventDefault();
        props.deleteTodo(props.item.id)
    }
    
    const todoItem_style = props.item.completed ? "strike-thru" : null;

        return(
        <div className={todoItem_style} key={props.item.id} onClick={completeToggle}>
            <p>{props.item.name}</p>
            <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        )
}

export default connect(
    null,
    { completeTodo, deleteTodo }
    )(Todo);
