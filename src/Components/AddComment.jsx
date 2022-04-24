import { Component } from "react";
import {Container, Row, Col, Form} from "react-bootstrap"


let elementID = document.getElementsByClassName(".elementID").value;



let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmNiZmE5MDIzOTAwMTVkOTY1YzYiLCJpYXQiOjE2NDk4NTE1ODMsImV4cCI6MTY1MTA2MTE4M30.1jc7LN9eMX4yZ7HWl4wazVJ2SyiKUzAHtFm0IglDnhY",
    },
  };

class AddComment extends Component {

    componentDidMount = () => {
        console.log(this.props.asin)
        /* this.fetchData(); */
    }
    
    state = {
            comment1: {
            comment: "",    
            rate: "",
            elementID: "",
            }
        }
    

        handleSubmit = async (e) => {
            e.preventDefault()
            const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + elementID, options);
            const parsedBody = await response.json();
            console.log(parsedBody)
            if (response.ok) {
                console.log(response)
                alert('SUCCESS! 🥳')
    /*             this.setState({comments: parsedBody}) */
                
                this.setState({
                        comment1: {
                            comment: "",    
                            rate: "",
                            elementID: "",
                        },
                  })
        
        
            } else {
                alert("something went wrong")
            }
        }
        

    
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                            <Form.Label>Your Comment</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Insert your comment"
                            value={this.state.comment1.comment}
                            
                            required
                            />
                            </Form.Group>
                            <Form.Group>
                          '  <Form.Label>Your Rating</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Insert your rating"
                            value={this.state.comment1.rate}
                            required
                            />
                            </Form.Group>
                            <Form.Group>
                          '  <Form.Label>ElementID</Form.Label>
                            <Form.Control
                            type="text"
                            className="elementID"
                            placeholder="Insert your elementID"
                            value={this.state.comment1.elementID}
                            required
                            />
                            </Form.Group>
                            
                            <button>Submit</button>
                    </Form>
                    
                    
                    </Col>
                </Row>
            </Container>



        )
    }
}

export default AddComment



