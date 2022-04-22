import { Component } from "react";
import CommentArea from "./CommentArea";
import SingleComment from "./SingleComment";



class CommentsList extends Component {
   
    
    render () {
     return (
        <div>
            {this.props.commentsArray && this.props.commentsArray.length > 0 && this.props.commentsArray.map(comment => <SingleComment commentData={comment} />)}
        </div>

     )
 }   
}

export default CommentsList