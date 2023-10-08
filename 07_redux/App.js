import React, { Component } from "react";
import { Button } from "antd";
import createStore from "./components/store";

class App extends Component {
  state = { number: 10 };
  reducer(state = 0, action) {
    switch (action) {
      case "add":
        return state + 10;
      case "delete":
        return state - 10;
      default:
        console.log("未找到动作");
    }
  }
  store = createStore(this.reducer);
  componentDidMount() {
    this.store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
    return (
      <>
        <div>{this.store.getStore()}</div>
        <Button
          onClick={() => {
            this.store.dispatch("add");
          }}
        >
          +10
        </Button>
        <Button
          onClick={() => {
            this.store.dispatch("delete");
          }}
        >
          -10
        </Button>
      </>
    );
  }
}

export default App;
