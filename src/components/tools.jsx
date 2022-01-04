import React from 'react'
import { ProgressBar } from "react-bootstrap"
import { Badge } from 'react-bootstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";



class Tools extends React.Component {
    render() {
        return (
            <div className='row'>
                <Badge bg="secondary" className='col-md-3 mt-2'>{this.props.tName}</Badge>
                <div className='col mt-2'>
                <ProgressBar now={this.props.value} />
                </div>

            </div>
        )
    }
}

export default Tools;