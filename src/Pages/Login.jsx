import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { API_URI } from "../Helpers/Constant";
import useForm from "../Helpers/hooks/useForm";

export default function Login() {
  const { state: payload, fnUpdateState } = useForm({
    username: "",
    password: "",
  });

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");

    if (isLogin) {
      window.location.href = "/users";
    }
  });

  async function fnSubmit(event) {
    event.preventDefault();

    try {
      axios({
        method: "post",
        url: `${API_URI}/api/login`,
        data: payload,
      }).then(async (res) => {
        const data = res.data;
        console.log(data.data.session);
        if (data.status) {
          await localStorage.setItem("isLogin", data.data.session);
          window.location.href = "/users";
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login container">
      <h1 className="heading-1">Login</h1>
      <form action="" onSubmit={fnSubmit} className="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            onChange={fnUpdateState}
            value={payload.username}
            type="text"
            id="username"
            name="username"
            placeholder="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={fnUpdateState}
            value={payload.password}
            type="password"
            id="password"
            name="password"
            placeholder="password"
          />
        </div>
        <button type="submit" className="button primary">
          Login
        </button>
      </form>
    </div>
  );
}
