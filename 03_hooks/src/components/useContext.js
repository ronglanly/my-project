import "./App.css";
import React, { useContext, useState } from "react";

const TestContext = React.createContext();

// props由父到子进行传递，但是需要一层一层的传递
// 使用createContext，只需要在provider中设置，下面的每一次都可以拿到
const ContextChild = () => {
  const obj = useContext(TestContext);
  return (
    <>
      <div style={{ background: "pink" }}>{obj.name}</div>
    </>
  );
};
function App() {
  const [obj, setObj] = useState({ name: "ronglan" });
  const handlechange = () => {
    setObj({ ...obj, name: "luyu" });
  };
  return (
    <TestContext.Provider value={obj}>
      <ContextChild />
      <div onClick={handlechange}>{obj.name}</div>
    </TestContext.Provider>
  );
}

export default App;
import "./App.css";
import React, { useReducer } from "react";

function App() {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + action.num;
      case "decrement":
        return state - action.num;
      case "reset":
        return 0;
      default:
        return state;
    }
  };
  // store,reducer,action是useReducer的三大核心概念
  // dispatch接收Action作为参数，当dispatch调用时，会将Action告诉Reducer，Reducer通过Action修改Store， store改变会更新视图view
  // 当store变得复杂，改变store状态的reducer也会变得复杂
  // 拆分store,拆分reducer
  // 使用场景
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ width: "200px", margin: "auto" }}>
      <div style={{ width: "40px", margin: "100px auto", fontSize: "40px" }}>
        {state}
      </div>
      <button onClick={() => dispatch({ type: "increment", num: 10 })}>
        递增
      </button>
      <button onClick={() => dispatch({ type: "decrement", num: 20 })}>
        递减
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>重置</button>
    </div>
  );
}

export default App;
