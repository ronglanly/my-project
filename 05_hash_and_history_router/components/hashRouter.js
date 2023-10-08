class HasRouter {
  constructor() {
    //用于存储不同hash值对应的回调函数
    this.routers = {};
    window.addEventListener("hashchange", this.load.bind(this), false);
  }

  // 注册每个视图
  register(hash, callback = function () {}) {
    this.routers[hash] = callback;
  }

  //用于注册首页
  registerIndex(callback = function () {}) {
    this.routers["index"] = callback;
  }

  //用于处理视图未找到的情况
  registerNotFound(callback = function () {}) {
    this.routers["404"] = callback;
  }
  //用于处理异常情况
  registerError(callback = function () {}) {
    this.routers["error"] = callback;
  }

  //用于调用不同视图的回调函数
  load() {
    try {
      let hash = window.location.hash.slice(1);
      let handler;
      //没有hash 默认为首页
      if (!hash) {
        handler = this.routers.index;
      } else if (!this.routers.hasOwnProperty(hash)) {
        //未找到对应hash值
        handler = this.routers["404"] || function () {};
      } else {
        handler = this.routers[hash];
        console.log("我是handler", typeof handler);
      }
      //执行注册的回调函数
      handler.call();
    } catch (e) {
      console.log(e);
    }
  }
}
export default HasRouter;
