import React from "react";
import { Input, Button } from 'reactstrap';


class AddTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            todoField: ""
        }
    }

    addItem = event => {
        event.preventDefault();
        this.props.addItem(this.state.todoField)
        this.setState({
            todoField : ""
        })
    }

    updateField = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        return(
            <div>
                
                    <Input 
                        type="text"
                        value={this.state.todoField}
                        onChange={this.updateField}
                        placeholder="Add an item ..."
                        name="todoField"
                    />
                    <Button color="success" onClick={this.addItem}>Add Item</Button>
                
            </div>
        )
    }
}



export default AddTodoForm;