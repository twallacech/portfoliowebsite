import React from "react";

class AgeCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: ((Date.now() - 711676800000) / 31556908800).toFixed(20)
    };
  }

  tick() {
    this.setState({
      age: ((Date.now() - 711676800000) / 31556908800).toFixed(20)
    });
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 20);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <p className="age-counter">
        <span className="age">{this.state.age}</span>
        <br />
        <span className="yearsleft">{(90 - this.state.age).toFixed(20)} ETD</span>
      </p>
    );
  }
}

export default AgeCounter;



// WEBPACK FOOTER //
// ./src/AgeCounter.js