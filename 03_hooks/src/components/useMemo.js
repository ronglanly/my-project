import "./App.css";
import { useState, useMemo } from "react";
import { Input } from "antd";

function App() {
  const [data, setData] = useState(123);
  const [data2, setData2] = useState("000");
  const handleData = (value) => {
    setData(value);
  };
  const handleData2 = (value) => {
    setData2(value);
  };
  const newData = useMemo(() => {
    console.log("我被改变了");
    return data + 1;
  }, [data]);
  return (
    <div>
      <span>{newData}</span>
      <Input
        onChange={(e) => {
          handleData(e.target.value);
        }}
      ></Input>
      <Input
        onChange={(e) => {
          handleData2(e.target.value);
        }}
      ></Input>
    </div>
  );
}

export default App;
