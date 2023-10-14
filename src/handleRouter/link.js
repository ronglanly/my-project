import React from "react";
import { RouterContext } from "./RouterContext";

// link接收一个参数to, 和他的子组件
export default class Link extends React.Component {
  // 消费value contextType consumer useContext
  static contextType = RouterContext;
  handleClick = (e) => {
    e.preventDefault();
    // 更新路由
    const history = this.context.history;
    history.push(this.props?.to);
  };
  render() {
    const { to, children, ...restProps } = this.props;
    return (
      <a href={to} onClick={this.handleClick} {...restProps}>
        {children}
      </a>
    );
  }
}
