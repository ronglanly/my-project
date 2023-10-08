import React, { Component } from "react";
import { Button } from "antd";
// import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Router from "./handleRouter/router";
import Link from "./handleRouter/link";
import Home from "./compontents/Home";
import TaoBao from "./compontents/TaoBao";
import JD from "./compontents/JD";
import VIP from "./compontents/VIP";
import HashRouter from "./handleRouter/HashRouter";
import BrowserRouter from "./handleRouter/BrowserRouter";

// BrowserRouter as Router
// HashRouter as Router
// MemoryRouter as Router
class App extends Component {
  hashRouter = new HashRouter();
  browserRouter = new BrowserRouter();
  handleClick = () => {
    // pushState
    // window.history.pushState({ page: 1 }, null, "/page");
    // window.history.go(-1);
    // window.addEventListener("popstate", (e) => {
    //   console.log(e);
    // });
    // hash模式
    // window.location.hash = "#page";
    // window.addEventListener("hashchange", (e) => {
    //   console.log("hash值改变", e);
    // });
  };
  handleClickBrowser = (e) => {
    e.preventDefault();
    window.history.pushState({}, null, "/page1");
    window.history.back();
  };
  handleClickBrowser2 = (e) => {
    e.preventDefault();
    window.history.pushState({}, null, "/page2");
    window.history.back();
  };
  render() {
    // this.hashRouter.init();
    // this.hashRouter.route("#page", () => {
    //   console.log("hashRouter");
    // });
    this.browserRouter.init();
    this.browserRouter.route("/page1", () => {
      console.log("browserRouter1");
    });
    this.browserRouter.route("/page2", () => {
      console.log("browserRouter2");
    });
    return (
      <>
        {/* <Router history={window.history}>
          <Link to="/">首页</Link>
          <Link to="/taobao">淘宝</Link>
          <Link to="/jd">京东</Link>
          <Link to="/vip">唯平会</Link>
          <Button onClick={this.handleClick}>popstate事件</Button> */}
        <a href="#" onClick={this.handleClickBrowser}>
          page1
        </a>
        <a href="#" onClick={this.handleClickBrowser2}>
          page2
        </a>
        <div id="content"></div>

        {/* <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/taobao" component={TaoBao} />
            <Route path="/jd" component={JD} />
            <Route path="/vip" component={VIP} />
          </Switch> */}
        {/* </Router> */}
      </>
    );
  }
}

export default App;
