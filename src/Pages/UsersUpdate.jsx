import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { API_URI } from "../Helpers/Constant";

export default function UsersUpdate() {
  const { id } = useParams();

  const [data, setData] = useState({
    email: "",
    nama: "",
    username: "",
  });

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URI}/api/user/${id}`,
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

  async function fnSubmit(event) {
    event.preventDefault();
    try {
      axios({
        method: "put",
        url: `${API_URI}/api/update/${id}`,
        data: data,
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
          <form action="" onSubmit={fnSubmit} className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                onChange={fnUpdateState}
                value={data.email}
                type="text"
                id="email"
                name="email"
                placeholder="email"
              />
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
              />
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
            </div>
            <button type="submit" className="button primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
