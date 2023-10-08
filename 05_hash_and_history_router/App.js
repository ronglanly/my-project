import "./App.css";
import HasRouter from "./components/hashRouter";
import HistoryRouter from "./components/historyRouter";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   let router = new HasRouter();
  //   let container = document.getElementById("container");
  //   console.log("我是contain", container);
  //   // 注册首页
  //   router.registerIndex(() => (container.innerHTML = "我是首页"));
  //   // 注册每个页面
  //   router.register("/page1", () => (container.innerHTML = "我是page1"));
  //   router.register("/page2", () => (container.innerHTML = "我是page2"));
  //   router.register("/page3", () => (container.innerHTML = "我是page3"));
  // }, []);
  let router = new HistoryRouter();
  useEffect(() => {
    let container = document.getElementById("container");
    router.registerIndex(() => (container.innerHTML = "我是首页"));
    router.register("/page1", () => (container.innerHTML = "我是page1"));
    router.register("/page2", () => (container.innerHTML = "我是page2"));
    router.register("/page3", () => (container.innerHTML = "我是page3"));
  }, []);
  const handleChange = () => {
    router.assign("/page2");
  };
  return (
    <div>
      <div id="nav">
        <a href="/page1">page1</a>
        <a href="/page2">page2</a>
        <a href="/page3">page3</a>
        <button onClick={handleChange}>page2</button>
      </div>
      <div id="container"></div>
    </div>
  );
}

export default App;
