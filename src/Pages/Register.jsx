import axios from "axios";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { API_URI } from "../Helpers/Constant";
import useForm from "../Helpers/hooks/useForm";

export default function Register() {
  const { state: payload, fnUpdateState } = useForm({
    email: "",
    nama: "",
    username: "",
    password: "",
  });

  const formRef = useRef();

  async function fnSubmit(event) {
    event.preventDefault();

    const currentForm = formRef.current;
    if (!currentForm.checkValidity()) {
      currentForm.classList.add("was-validate");
      return;
    }

    try {
      axios({
        method: "post",
        url: `${API_URI}/api/register`,
        data: payload,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="register container">
      <h1 className="heading-1">Register</h1>
      <form
        action=""
        ref={formRef}
        onSubmit={fnSubmit}
        className="form"
        noValidate
      >
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            onChange={fnUpdateState}
            value={payload.email}
            type="email"
            id="email"
            name="email"
            placeholder="email"
            required
          />
          <small className="invalid-caption">Email tidak valid!</small>
        </div>
        <div className="form-group">
          <label htmlFor="nama">Nama</label>
          <input
            onChange={fnUpdateState}
            value={payload.nama}
            type="text"
            id="nama"
            name="nama"
            placeholder="nama"
            required
          />
          <small className="invalid-caption">Nama tidak boleh kosong!</small>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            onChange={fnUpdateState}
            value={payload.username}
            type="text"
            id="username"
            name="username"
            placeholder="username"
            required
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
            required
          />
          <small className="invalid-caption">
            Password tidak boleh kosong!
          </small>
        </div>
        <button type="submit" className="button primary">
          Register
        </button>
      </form>

      <p className="body-1">
        Sudah punya akun? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
