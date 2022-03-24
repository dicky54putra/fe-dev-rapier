import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const fnLogout = async () => {
    await localStorage.removeItem("isLogin");
    window.location.href = "/";
  };

  return (
    <div className="navbar">
      <span className="logo">
        <Link to="/">FeDevRapier</Link>
      </span>
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <button className="button outline" onClick={fnLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
