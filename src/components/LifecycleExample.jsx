import React, { Component } from "react";

// child component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor: Component is being initialized");
  }

  componentDidMount() {
    console.log("componentDidMount: Component is mounted to the DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Component has updated");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component is about to be unmounted");
  }

  // click event to update the count
  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log("Render: Component is rendering");
    return (
      <div>
        <h2>Component Lifecycle Example</h2>
        {/* current count */}
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment Count</button>
      </div>
    );
  }
}

//  parent
class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    // state is true - app is shown ( Conditonal rendering )
    this.state = {
      showApp: true,
    };
  }

  // toggle function
  toggleComponent = () => {
    this.setState((prevState) => ({
      showApp: !prevState.showApp,
    }));
  };

  render() {
    return (
      <div>
        <h1>LifecycleExample</h1>
        <button onClick={this.toggleComponent}>Toggle App Component</button>
        {/* conditional rendering  */}
        {this.state.showApp && <App />}
      </div>
    );
  }
}

export default LifecycleExample;
