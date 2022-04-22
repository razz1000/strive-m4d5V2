import { Component } from "react";
import {InputGroup, FormControl} from "react-bootstrap"

import SingleBook from "./SingleBook"
import {Row, Col} from "react-bootstrap"
import booksLibrary from "../Data/fantasy.json"


/* 
let filterFunction = (event) => {
    this.state.books.filter(book => book.title.toLowerCase().contains(this.state.search).toLowerCase())
    .map((book => ( 

        <SingleBook img={book.img}
        title={book.title}
        key={book.asin} />        

        )))}


 */

class FilterBookList extends Component {
    
    state = {
        
        search: "",
    }
    
    render () {
        return (

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) =>{
                    this.setState({search: e.target.value});
                    
                    
                        this.search.booksLibrary.filter(book => book.title.toLowerCase().includes(this.state.search)).map(book => (
                            <Col xs={3}>
                                <SingleBook book={book} />
                            </Col>
                        ))
                    
                

                
                }}
                    />
{/*                 <button onClick={filterFunction}>Search</button>
                */}

                

            </InputGroup>


        )
    }
}


export default FilterBookList

 