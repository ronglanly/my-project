class BrowserRouter {
  constructor() {
    this.routes = {};
    this.currentUrl = null;
  }

  // 一个值对应一个方法，发布订阅者模式
  route(hash, callBack) {
    this.routes[hash] = callBack || function () {};
  }

  // url的改变一般只有三种方式，浏览器的前进后退，a标签，pushState, replaceState
  linkBind() {
    const allLinks = document.querySelectorAll("a[data-href]");
    for (let i = 0; i < allLinks.length; i++) {
      let currentLink = allLinks[i];
      // 监听a标签的点击事件
      currentLink.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          console.log("我被点击了");
          let currentUrl = currentLink.getAttribute("data-href");
          window.history.pushState({}, null, currentUrl);
          this.updateCurrentUrl(currentUrl);
        },
        false
      );
    }
  }
  updateCurrentUrl(url) {
    this.currentUrl = url;
    this.routes[this.currentUrl] && this.routes[this.currentUrl]();
  }

  init() {
    this.linkBind();
    window.addEventListener(
      "load",
      this.updateCurrentUrl.bind(this, "/"),
      false
    );
    window.addEventListener(
      "popstate",
      this.updateCurrentUrl.bind(this, window.location.pathname),
      false
    );
  }
}

export default BrowserRouter;
