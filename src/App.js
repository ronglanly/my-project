import React, { Component } from "react";
import Link from "./handleRouter/link";
import BrowserRouter from "./handleRouter/BrowserRouter2";
import Route from "./handleRouter/route";
import Home from "./compontents/Home";
import TaoBao from "./compontents/TaoBao";
import JD from "./compontents/JD";
import VIP from "./compontents/VIP";
class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Link to="/">首页</Link>
          <Link to="/taobao">淘宝</Link>
          <Link to="/jd">京东</Link>
          <Link to="/vip">唯平会</Link>
          <Link to="/yyy">404</Link>

          <Route path="/" exact component={Home} />
          <Route path="/taobao" component={TaoBao} />
          <Route path="/jd" component={JD} />
          <Route path="/vip" component={VIP} />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
