export default function createStore(reducer, enhancer) {
  let currentState;
  let currentListeners = [];
  function getStore() {
    return currentState;
  }

  function dispatch(action) {
    currentState = reducer(currentState, action);
    // 通知订阅者
    currentListeners.forEach((listener) => listener());
    return currentState;
  }

  // 订阅动作
  function subscribe(listeners) {
    currentListeners.push(listeners);
    return currentListeners;
  }
  return { getStore, dispatch, subscribe };
}
