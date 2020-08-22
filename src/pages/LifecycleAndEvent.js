import React, { useState , useEffect } from "react";

export default function LifecycleAndEvent(props) {
  const [count, setCount] = useState(0);

  // mount : useEffect(() => { ... } , [])
  // unmount : return function inside useEffect
  // update : useEffect(() => { ... } , [varToWatch])

  useEffect(() => {
    console.log('mount component');

    return function cleanup() {
      console.log('unmount component');
    }
  }, [])

  useEffect(() => {
    console.log('count updated: ', count);
  }, [count])

  return (
    <>
      <h1>Lifecycle And Event</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <br/><br/>
    
      {/* conditional render */}
      {count>0 && (
        <p> Count Sudah lebih dari 0.</p>
      )}
      {count===0 && (
        <p> Count masih 0!</p>
      )}
    </>
  )
}


