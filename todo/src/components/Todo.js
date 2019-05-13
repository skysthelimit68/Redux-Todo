import React from "react";
import { connect } from "react-redux";
import { completeTodo } from "../actions"


let itemIndex = null;

const Todo = props =>  {

    
    const completeToggle = event => {
        event.preventDefault();
        console.log(props.index)
    }


       
    const todoItem_style = props.item.completed ? "strike-thru" : null;
    itemIndex = props.index;

    
        return(
        <div className={todoItem_style} key={props.index} onClick={completeToggle}>
            <p>{props.item.name}</p>
        </div>
        )
   
    
}

const mapStateToProps = state => {
    return {
        itemFromRedux : state.items[itemIndex]
    }
}

export default connect(
    mapStateToProps,
    { completeTodo }
    )(Todo);
