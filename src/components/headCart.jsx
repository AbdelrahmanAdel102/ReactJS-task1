import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Bttn from "./bttn";
import pic from "./Home.jpg"


class MyHead extends React.Component {
    render() {
        return (
            <div>
                <div className="card bg-dark text-white">
                    <img src={pic} className="card-img" alt="as logo" style={{height: "500px"}} />
                        <div className="card-img-overlay" id="d">
                            <div id="center">
                            <h5 className="card-title fs-1">Abdelrahman Adel Mekky</h5>
                            <p className="card-text fs-3">Web Developer</p>
                            <Bttn name="Contact Me"/>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default MyHead;
