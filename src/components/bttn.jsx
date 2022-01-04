import React from "react";
import { Button } from "react-bootstrap";

class Bttn extends React.Component {
    
  render() {
    return (
      <>
        <Button variant="secondary">{this.props.name}</Button>
      </>
    );
  }
}

export default Bttn;
