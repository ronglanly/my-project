import React, { useRef, forwardRef, createRef,useState, useEffect } from "react";

// useRef实际上就是函数组件的实例属性
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

const Count = () =>{
  const [count,setCount] = useState(0);
  const preCountRef = useRef(0);

  useEffect(()=>{
    preCountRef.current = count;
  })
  const preCount = preCountRef.current;
  return (
    <div>
      <h1>now:{count},before:{preCount}{console.log('我被执行了')}</h1>
      <button onClick={()=>{setCount(count+1)}}>点我加1</button>
    </div>
  );
}

function App() {
  // const inputRef = useRef("");
  const inputRef = createRef();
  const focus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <Foo ref={inputRef}></Foo>
      <Count/>
      <button onClick={focus}>父组件聚焦</button>
    </div>
  );
}

export default App;
