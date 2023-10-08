import "./App.css";
import React, { useState, useEffect, useRef } from "react";

class ClassRef extends React.Component {
  constructor(props) {
    super(props);
    this.classInputRef = React.createRef();
  }
  componentDidMount() {
    console.log("我是类组件ref", this.classInputRef, this.props.ref);
  }
  render() {
    return (
      <div>
        <input value="000" ref={this.classInputRef}></input>
      </div>
    );
  }
}
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // 创建 ref 存储 textInput DOM 元素
    this.textInput = React.createRef();
    // this.textInput2 = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  componentDidMount() {
    // this.clickTextInput();
  }

  focusTextInput() {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：通过 "current" 取得 DOM 节点
    this.textInput.current.focus();
  }

  clickTextInput() {
    this.textInput2.current.click();
  }

  render() {
    // 告诉 React 我们想把 <input> ref 关联到构造器里创建的 `textInput` 上
    return (
      <div>
        <input type="text" ref={this.textInput} />

        <input
          type="button"
          // ref={this.textInput2}
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    console.log("类组件refs2", this.textInput);
    this.textInput.current.focusTextInput();
  }

  render() {
    return <CustomTextInput ref={this.textInput} />;
  }
}

function App() {
  const [data, setData] = useState("i am refs");
  const inputRef = useRef(null);
  // 这里必须声明 textInput，这样 ref 回调才可以引用它
  let textInput = null;
  useEffect(() => {
    inputRef.current.onChange = handleChange;
    console.log("我是函数式组件refs", inputRef, inputRef.current.onChange);
  }, []);
  const handleChange = (e) => {
    console.log(e.target.value);
    setData(e.target.value);
    textInput.focus();
  };
  return (
    <>
      <AutoFocusTextInput />
      <ClassRef />
      <input value={data} ref={inputRef} onChange={handleChange}></input>
      <input ref={(input) => (textInput = input)} />
    </>
  );
}

export default App;
