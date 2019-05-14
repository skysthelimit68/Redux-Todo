import React from "react";
import { Input, Button, Container, Row, Col} from 'reactstrap';


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
            <Container className="addTodoForm">
                <Row>
                    <Col sm="12" md="9">
                    <Input 
                        type="text"
                        value={this.state.todoField}
                        onChange={this.updateField}
                        placeholder="Add an item ..."
                        name="todoField"
                    />
                    </Col>
                    <Col sm="12" md="3">
                    <Button className="btn_fullWidth"color="success" onClick={this.addItem}>Add Item</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}



export default AddTodoForm;