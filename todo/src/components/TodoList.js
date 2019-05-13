import React from "react";
import Todo from "./Todo";
import AddTodoForm from "./AddTodoForm";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    addItem = input => {
        this.props.addTodo({name: input, completed: false})
    }
    
    

    render() {
        return(
            <div>
                <AddTodoForm addItem = {this.addItem}/>
                {this.props.items.map((item, index) => <Todo item={item} index={index} />)}
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        items : state.items
    }
}


export default connect(
    mapStateToProps,
    { addTodo }
)(TodoList)