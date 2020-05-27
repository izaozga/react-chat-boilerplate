import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      step: 1,
    };
  }

  render() {
    return (
      <div style={{ border: "1px solid black", margin: 20, padding: 20 }}>
        <h1>Counter</h1>
        <div>Value: {this.state.counter}</div>
        <button
          onClick={() =>
            this.setState((state) => ({ counter: state.counter + state.step }))
          }
        >
          Increment
        </button>
        <div>
          <p>Step</p>
          <input
            type="number"
            value={this.state.step}
            onChange={(e) =>
              this.setState({ step: Number(e.target.value || 1) })
            }
          />
        </div>
      </div>
    );
  }
}

export default Counter;
