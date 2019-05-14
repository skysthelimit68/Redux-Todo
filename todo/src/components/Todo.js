import React from "react";
import { connect } from "react-redux";
import { completeTodo } from "../actions";
import { deleteTodo } from "../actions";
import { Row, Col } from 'reactstrap';



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
    const fa_class = props.item.completed ? "far fa-check-square" : "far fa-square"
        return (
            
                <Row className="todoList-row">
                    <Col xs="9" className={todoItem_style} key={props.item.id} onClick={completeToggle}>
                        <i className={fa_class}></i> {'  '}
                        {props.item.name}
                    </Col>
                    <Col xs="3" className="close-btn">
                    <button type="button" className="close" aria-label="Close" onClick={deleteTodo}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </Col>
                </Row>
         
        )
    
    
    /*
        return(
        <div className={todoItem_style} key={props.item.id} onClick={completeToggle}>
            <p>{props.item.name}</p>
            <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        )
        */
}

export default connect(
    null,
    { completeTodo, deleteTodo }
    )(Todo);
