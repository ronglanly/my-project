import "./App.css";
import { Link, Router, BrowserRouter } from "react";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/form">表单</Link>
        <Link to="/list">列表</Link>
      </div>
      <div>
        <Router path="/form" />
        <Router path="/form" />
      </div>
    </BrowserRouter>
  );
};

export default App;
