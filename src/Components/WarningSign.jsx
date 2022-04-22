import { Component } from "react";
import {Alert} from "react-bootstrap"
import MyBadge from "./MyBadge";




class WarningSign extends Component {
    render () {
        return (

           <div>
            <Alert variant="danger">
            {this.props.dangerText}
          </Alert>
          </div>

        )
    }
}

export default WarningSign