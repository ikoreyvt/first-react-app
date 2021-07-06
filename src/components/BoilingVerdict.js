import React from "react";

class BoilingVerdict extends React.Component {
  render() {
    let message = ""
    if(parseFloat(this.props.temp) >= "100"){
      message = <p>It would boil</p>
    } else {
      message = <p>It will not boil</p>
    }
    return message;
  }
}

export default BoilingVerdict;