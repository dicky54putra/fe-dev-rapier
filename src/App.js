// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Users from "./Pages/Users";
import UsersUpdate from "./Pages/UsersUpdate";
import "./sass/styles.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user-update/:id" element={<UsersUpdate />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
