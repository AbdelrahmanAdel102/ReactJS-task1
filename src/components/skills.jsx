import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Tools from "./tools";

class Skills extends React.Component {
  render() {
    return (
      <div className="container-fluid bg-dark text-white mt-4">
        <div>
          <br />
          <div>
            <h2 className="d-flex justify-content-center mt-4">Skills</h2>
            <p className="d-flex justify-content-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed
              similique, expedita atque rerum praesentium eveniet reiciendis fuga!
              Ad repudiandae aut repellat tenetur totam rerum officiis
              perspiciatis nihil itaque libero?
            </p>
          </div>

          <div className="row justify-content-md-center">
            <div className="col-md-4">
              <p className="d-flex justify-content-md-center" id="line">My Foucs</p>
              <ul className="">
                <li>UI/UX Design</li>
                <li>Responsive Design</li>
                <li>Web Design</li>
                <li>Mobile App Design</li>
              </ul>
            </div>

            <div className="col-md-6 ">
              <Tools tName="HTML" value="90" />
              <Tools tName="CSS" value="90" />
              <Tools tName="JavaScript" value="85" />
              <Tools tName="React" value="80" />
              <Tools tName="PhotoShop" value="90" />
              <Tools tName="Adobe XD" value="70" />
              <Tools tName="Node.js" value="60" />
              <Tools tName="WordPress" value="40" />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Skills;
