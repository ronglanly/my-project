import React, { Component } from "react";
import { RouterContext } from "./RouterContext";
import { matchPath } from "./matchPath";

export default class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const { path, children, component, render } = this.props;
          const { location, match: routeMatch } = context;
          const match = path ? matchPath(location, this.props) : routeMatch;
          console.log("match", match);
          const props = {
            ...context,
            location,
            match,
          };
          // match children component render null
          // no match  children()>null
          return match
            ? children
              ? typeof children === "function"
                ? children(props)
                : children
              : component
              ? React.createElement(component, props)
              : render
              ? this.render()
              : null
            : typeof children === "function"
            ? children(props)
            : null;
        }}
      </RouterContext.Consumer>
    );
  }
}
