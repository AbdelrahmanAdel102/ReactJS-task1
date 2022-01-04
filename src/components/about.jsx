import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Bttn from "./bttn";

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-4">
            <h2 className="fs-1">About Me</h2>
          </div>

          <div className="col-7">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis, voluptas quo doloribus maxime alias totam quia nostrum
              exercitationem, saepe fuga aspernatur neque impedit ipsa.
              Similique illum voluptatem natus earum ipsum!
            </p>
            <Bttn name="Download Resume" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
