import React from "react";
import { RouterContext } from "./RouterContext";

// link接收一个参数to, 和他的子组件
export default class Link extends React.Component {
  static contextType = RouterContext;
  handleClick = (e) => {
    e.preventDefault();
    // 更新路由
    this.context.history.replaceState(this.props?.to);
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
