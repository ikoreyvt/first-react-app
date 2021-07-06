import React from "react";

class TempInput extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>Enter a temperature in {this.props.scale}:</legend>
        <input
          type="text"
          value={this.props.temp}
          id={this.props.scale}
          onChange={this.props.handleChange}
        ></input>
      </fieldset>
    );
  }
}

export default TempInput;
