import React from "react";
import { Input, Button, Form, Container, Row, Col} from 'reactstrap';


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
                    
                    <Form onSubmit={this.addItem} className="col-sm-12">
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
                    <Button className="btn_fullWidth"color="success" type="submit">Add Item</Button>
                    
                    </Col>
                    </Form>
                    
                </Row>
            </Container>
        )
    }
}



export default AddTodoForm;