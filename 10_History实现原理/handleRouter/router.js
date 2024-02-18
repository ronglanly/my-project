import React from "react";
import { RouterContext } from "./RouterContext";

export default class Router extends React.Component {
  // 接收一个history和孩子

  render() {
    return (
      <RouterContext.Provider
        className="react-router"
        value={{ history: this.props.history }}
      >
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}
