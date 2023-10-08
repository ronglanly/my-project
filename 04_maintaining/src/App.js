import React, { useRef, forwardRef, createRef } from "react";

const Foo = forwardRef((props, ref) => {
  const focus = () => {
    ref.current.focus();
  };
  return (
    <div>
      <input ref={ref}></input>
      <button onClick={focus}>聚焦</button>
    </div>
  );
});

function App() {
  // const inputRef = useRef("");
  const inputRef = createRef();
  const focus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <Foo ref={inputRef}></Foo>
      <button onClick={focus}>父组件聚焦</button>
    </div>
  );
}

export default App;
