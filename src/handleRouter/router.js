import React from "react";
import { RouterContext } from "./RouterContext";

export default class Router extends React.Component {
  // 接收一个history和孩子,history由上层传下来

  static computeRootMatch(pathname) {
    return { path: "/", url: "/", params: {}, isExact: pathname === "/" };
  }
  constructor(props) {
    super(props);
    this.state = {
      location: props.history.location,
    };

    // 监听路由
    this.unlisten = props.history.listen((location) => {
      this.setState({ location: location.location });
      console.log("路由改变了", location.location);
    });
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }

  render() {
    return (
      <RouterContext.Provider
        className="react-router"
        value={{
          history: this.props.history,
          location: this.state.location,
          match: Router.computeRootMatch(this.state.location.pathname),
        }}
      >
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}
