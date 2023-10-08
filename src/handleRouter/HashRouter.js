class HashRouter {
  constructor() {
    this.routes = {};
    this.currentUrl = null;
  }

  // 一个hash值对应一个方法，发布订阅者模式
  route(hash, callBack) {
    this.routes[hash] = callBack || function () {};
  }

  updateCurrentUrl() {
    this.currentUrl = window.location.hash || "/";
    this.routes[this.currentUrl] && this.routes[this.currentUrl]();
  }

  init() {
    window.addEventListener("load", this.updateCurrentUrl.bind(this), false);
    window.addEventListener(
      "hashchange",
      this.updateCurrentUrl.bind(this),
      false
    );
  }
}

export default HashRouter;
