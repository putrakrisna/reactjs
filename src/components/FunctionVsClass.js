import React, { useState, Component, useEffect } from "react";
import "../index.css";

function CustomButton(props) {
  return (
    <button className="custom-button">
      Custom Button
    </button>
  )
}

function FunctionComponent(props) {
  const [count, setCount] = useState(0); // declare initial state
  const [count2, setCount2] = useState(0); // declare initial state
  const [str, setStr] = useState(null); // declare initial state

  useEffect(() => {
    console.log('mount component');

    return function cleanup() {
      console.log('unmount component');
    }
  }, [])

  useEffect(() => {
    console.log('count updated: ', count);
    console.log('count2 updated: ', count2);
  }, [count,count2])

  //props.title = "coba ganti ah";

  function updateCount() {
    setCount(count + 1);
  }

  return (
    <>
      <h1 className="text-red">{props.title}</h1>
      <style jsx="true">{`
      p {
        color: red;
      }
    `}</style>
  <h2 
  style={{
    fontSize: '34px',
    fontWeight: 'bold',
  }}
  >
    {props.subTitle}
    </h2>
      <p>You clicked {count} times</p>
      <button onClick={updateCount}>
        Click me
      </button>

      <p>You clicked {count2} times</p>
      <button onClick={() => setCount2(count2 + 1)}>
        Click me
      </button>

  <p>Set String: {str}</p>
      <button onClick={() => setStr('Mas eX')}>
        Click me
      </button>
    </>
  )
}

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0,
      count2: 0
    };
  }
  setCount() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  incCount2() {
    this.setState(state => ({
      count2: state.count2 + 1
    }));
  }

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <p>You clicked {this.state.count2} times</p>
        <button onClick={() => this.incCount2()}>
          Click me
        </button>
      </>
    );
  }
}

function FunctionVsClass() {
  return (
    <div className="App">
      <FunctionComponent title="My Function Component" subTitle="12345XXXX"/>
      <hr/>
      <ClassComponent title="My Class Component"/>
    </div>
  );
}

export default FunctionVsClass;
