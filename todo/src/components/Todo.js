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
    const close_style = props.item.completed? {color:"red"}: null;
        return (
            
                <Row className="todoList-row">
                    <Col xs="9" className={todoItem_style} key={props.item.id} onClick={completeToggle}>
                        <i className={fa_class}></i> {'  '}
                        {props.item.name}
                    </Col>
                    <Col xs="3" className="close-btn">
                    <button type="button" className="close" style={close_style} aria-label="Close" onClick={deleteTodo}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </Col>
                </Row>
         
        )
 
}

export default connect(
    null,
    { completeTodo, deleteTodo }
    )(Todo);
