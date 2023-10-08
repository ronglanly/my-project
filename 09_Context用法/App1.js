import React, { useContext, useState } from "react";
import { Button } from "antd";

const TestContext = React.createContext();

// props由父到子进行传递，但是需要一层一层的传递
// 使用createContext，只需要在provider中设置，下面的每一次都可以拿到
// 方式一
const ContextChild = () => {
  const obj = useContext(TestContext);
  return (
    <>
      <div style={{ background: "pink" }}>{obj.name}</div>
    </>
  );
};
// 方式二
const ContextChild2 = () => {
  return (
    <TestContext.Consumer>
      {(value) => {
        return <div>使用consummer获取context得值{value.name}</div>;
      }}
    </TestContext.Consumer>
  );
};
// 方式三
const ContextChild3 = () => {
  return <div>class组件使用context值，挂载在class上得contextType属性</div>;
};
function App() {
  const [obj, setObj] = useState({ name: "ronglan" });
  const handlechange = () => {
    setObj({ ...obj, name: "luyu" });
  };
  return (
    <TestContext.Provider value={obj}>
      <ContextChild />
      <ContextChild2 />
      <ContextChild3 />
      <Button onClick={handlechange}>点我改变context得值</Button>
    </TestContext.Provider>
  );
}

export default App;
