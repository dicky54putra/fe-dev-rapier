import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Auth from "../Helpers/Auth";
import { API_EDIT_JSON } from "../Helpers/RouteApi";

export default function UsersUpdate() {
  Auth("dashboard-page");

  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    nama: "",
    username: "",
  });

  const formRef = useRef(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `/api/user_${id}.json`,
    }).then((res) => {
      setData(res.data);
    });
  }, [setData, id]);

  function fnUpdateState(event) {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

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
        url: API_EDIT_JSON,
        data: data,
      }).then((res) => {
        res.status === 200 && navigate("users");
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container">
        <Navbar />
        <div className="update-user">
          <h1 className="heading-1">Update Data: {data.nama}</h1>
          <form
            action=""
            ref={formRef}
            onSubmit={fnSubmit}
            className="form"
            noValidate>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                onChange={fnUpdateState}
                value={data.email}
                type="email"
                id="email"
                name="email"
                placeholder="email"
                required
              />
              <small className="invalid-caption">Email tidak valid!</small>
            </div>
            <div className="form-group">
              <label htmlFor="nama">nama</label>
              <input
                onChange={fnUpdateState}
                value={data.nama}
                type="text"
                id="nama"
                name="nama"
                placeholder="nama"
                required
              />
              <small className="invalid-caption">
                Nama tidak boleh kosong!
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                onChange={fnUpdateState}
                value={data.username}
                type="text"
                id="username"
                name="username"
                placeholder="username"
              />
              <small className="invalid-caption">
                Username tidak boleh kosong!
              </small>
            </div>
            <button type="submit" className="button primary">
              Update
            </button>
            <Link to="/users" className="button outline">
              Back
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
