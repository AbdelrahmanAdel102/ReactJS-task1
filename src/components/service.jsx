import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Service extends React.Component {
    render() {
        return (
            <>
                <div className="col-4 g-4 " >
                    <div id="serv" style={{ backgroundColor: this.props.color }}>
                        <h5
                            className="d-flex align-items-center justify-content-center details"
                            id="line">
                            {this.props.title}
                        </h5>
                    </div>
                </div>
            </>
        )
    }
}


export default Service;
