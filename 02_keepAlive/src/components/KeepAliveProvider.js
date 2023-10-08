import { useReducer } from "react";

const KeepAliveProvider = (props) => {
  let [cacheStates, dispatch] = useReducer(cacheReducer, {});
};

export default KeepAliveProvider;
