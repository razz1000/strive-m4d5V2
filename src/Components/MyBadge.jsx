import { Component } from "react"
import {Badge} from "react-bootstrap"




class MyBadge extends Component {
    render () {
        return ( 
    
    <div>
        <Badge variant={this.props.color}>{this.props.string}</Badge>{' '}
    </div>
        )}}

export default MyBadge 