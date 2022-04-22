import { Component } from "react";
import SingleBook from "./SingleBook";
import CommentsList from "./CommentsList"
/*

props = {
    Rasmus:"hello"
    Aron:321
}

*/

let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmNiZmE5MDIzOTAwMTVkOTY1YzYiLCJpYXQiOjE2NDk4NTE1ODMsImV4cCI6MTY1MTA2MTE4M30.1jc7LN9eMX4yZ7HWl4wazVJ2SyiKUzAHtFm0IglDnhY",
    },
  };


class CommentArea extends Component {
  
componentDidMount = () => {
    console.log(this.props.asin)
    this.fetchData();
}

state = {
    comments: []
}

fetchData = async() => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, options);
    const parsedBody = await response.json();
    console.log(parsedBody)
    if (response.ok) {
        console.log(response)
        this.setState({comments: parsedBody})



    } else {
        alert("something went wrong")
    }

}



    render()
    {
  return(
            
            <div>
                {/* {this.props.asin}
                 */}
                 {this.state.comments && this.state.comments.length > 0 && <CommentsList commentsArray={this.state.comments}/> }
            </div>


        )
    }
}

export default CommentArea