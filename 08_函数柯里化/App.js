import React, { Component } from "react";
import { Button } from "antd";

class App extends Component {
  // 函数柯里化
  add = (x, y) => {
    return x + y;
  };
  addY = (x) => {
    return function (y) {
      return x + y;
    };
  };

  // 简单实现一个函数柯里化的方法
  // 思路一: 函数的个数就是参数的个数, 指定函数参数个数
  curry(fn, len = fn.length) {
    console.log("===>", fn, len);
    return this._curry.call(this, fn, len);
  }

  _curry(fn, len, ...args) {
    const _that = this;
    return function (...params) {
      let _args = [...args, ...params];
      if (_args.length >= len) {
        return fn.apply(this, _args);
      } else {
        return _that._curry.call(_that, fn, len, ..._args);
      }
    };
  }

  handleChangeAdd = () => {
    const addTen = this.addY("https://");
    let _fn = this.curry(function (a, b, c, d, e) {
      console.log(a, b, c, d, e);
    });
    console.log("函数柯里化", addTen(10));
    console.log("函数柯里化1", addTen("www.google.com"));
    console.log("函数柯里化2", _fn(1)(2)(2)(4)(5));
  };
  render() {
    return (
      <>
        <Button onClick={this.handleChangeAdd}>+10</Button>
      </>
    );
  }
}

export default App;
