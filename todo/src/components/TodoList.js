import React from "react";
import Todo from "./Todo";
import AddTodoForm from "./AddTodoForm";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { Container } from 'reactstrap';


class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    

    addItem = input => {
        if(input !== "")
        this.props.addTodo(input)
        
    }

    render() {
        return(
            <div className="appContainer">
                <h1>Get $#!} Done</h1>
                <AddTodoForm addItem = {this.addItem}/>
                <Container>
                    {this.props.items.map( item => <Todo item={item}  key={item.id}/>)}
                </Container>
                <div className="footer">Brought to you by someone who never got her $#!} done</div>
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