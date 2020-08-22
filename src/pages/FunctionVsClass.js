import React, { useState, Component } from "react";

function FunctionComponent(props) {
  const [count, setCount] = useState(0);
  props.title = "coba ganti ah";
  return (
    <>
      <h1>{props.title}</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  )
}

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  setCount() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setCount()}>
          Click me
        </button>
      </>
    );
  }
}

export default function FunctionVsClass() {
  return (
    <>
      <FunctionComponent title="Function Component" />

      <hr style={{margin: '32px 0px'}} />
      
      <ClassComponent title="Class Component" />
    </>
  );
}
