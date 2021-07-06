import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TempInput from "./TemperatureInput";

function toCelsius(fTemp) {
  return ((fTemp - 32) * 5) / 9;
}

function toFahrenheit(cTemp) {
  return (cTemp * 9) / 5 + 32;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: "",
      scale: "",
    };
  }

  changeTemp = (evt) => {
    this.setState({ temperature: evt.target.value, scale: evt.target.id });
  };

  render() {
    return (
      <div>
        <TempInput
          scale="celsius"
          temp={
            this.state.scale === "fahrenheit"
              ? toCelsius(this.state.temperature)
              : this.state.temperature
          }
          handleChange={this.changeTemp}
        />
        <TempInput
          scale="fahrenheit"
          temp={
            this.state.scale === "celsius"
              ? toFahrenheit(this.state.temperature)
              : this.state.temperature
          }
          handleChange={this.changeTemp}
        />
        <BoilingVerdict
          temp={
            this.state.scale === "fahrenheit"
              ? toCelsius(this.state.temperature)
              : this.state.temperature
          }
        />
      </div>
    );
  }
}

export default Calculator;
