import axios from "axios";
import React from "react";
import { API_URI } from "../Helpers/Constant";
import useForm from "../Helpers/hooks/useForm";

export default function Register() {
  const { state: payload, fnUpdateState } = useForm({
    email: "",
    nama: "",
    username: "",
    password: "",
  });

  async function fnSubmit(event) {
    event.preventDefault();
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
      <form action="" onSubmit={fnSubmit} className="form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            onChange={fnUpdateState}
            value={payload.email}
            type="text"
            id="email"
            name="email"
            placeholder="email"
          />
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
          />
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
          Register
        </button>
      </form>
    </div>
  );
}
