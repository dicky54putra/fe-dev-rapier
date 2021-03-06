import axios from "axios";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../Helpers/Auth";
import useForm from "../Helpers/hooks/useForm";
import { API_LOGIN_JSON } from "../Helpers/RouteApi";

export default function Login() {
  const { state: payload, fnUpdateState } = useForm({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  Auth("login-page");

  const formRef = useRef();

  function fnSubmit(event) {
    event.preventDefault();
    const currentForm = formRef.current;
    if (!currentForm.checkValidity()) {
      currentForm.classList.add("was-validate");
      return;
    }

    try {
      axios({
        method: "get",
        url: API_LOGIN_JSON,
        data: payload,
      }).then(async (res) => {
        const data = res.data;
        if (data.status) {
          await localStorage.setItem("isLogin", data.data.session);
          navigate("users");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login container">
      <h1 className="heading-1">Login</h1>
      <form
        action=""
        ref={formRef}
        onSubmit={fnSubmit}
        className="form"
        noValidate>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            onChange={fnUpdateState}
            value={payload.username}
            type="text"
            id="username"
            name="username"
            placeholder="username"
            required="required"
          />
          <small className="invalid-caption">
            Username tidak boleh kosong!
          </small>
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
            required="required"
          />
          <small className="invalid-caption">
            Password tidak boleh kosong!
          </small>
        </div>
        <button type="submit" className="button primary">
          Login
        </button>
      </form>

      <p className="body-1">
        Sudah punya akun? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
