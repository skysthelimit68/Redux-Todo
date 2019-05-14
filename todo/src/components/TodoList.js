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
        this.props.addTodo({name: input, completed: false, id: this.props.counter})
        
    }

    render() {
        return(
            <div>
                <AddTodoForm addItem = {this.addItem}/>
                {this.props.items.map( item => <Todo item={item}  key={item.id}/>)}
            </div>
        )
    }
    

}

const mapStateToProps = state => {
    return {
        items : state.items, 
        counter : state.counter
    }
}


export default connect(
    mapStateToProps,
    { addTodo }
)(TodoList)