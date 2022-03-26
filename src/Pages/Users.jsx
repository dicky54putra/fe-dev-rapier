import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Auth from "../Helpers/Auth";
import { API_URI } from "../Helpers/Constant";

export default function Users() {
  Auth("dashboard-page");

  const [data, setData] = useState(null);

  const message = useRef(null);
  const [stateMsg, setStateMsg] = useState(true);

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URI}/api/users`,
    }).then((res) => {
      setData(res.data);
    });

    return () => {
      setData(null);
    };
  }, [setData]);

  const fnDelete = (id) => {
    axios({
      method: "delete",
      url: `${API_URI}/api/user/${id}`,
    }).then(async (res) => {
      const row = document.getElementById(`user-${id}`);
      await setStateMsg(false);
      await (message.current.lastChild.data = res.data.message);
      await row.remove();
    });
  };

  return (
    <div className="container">
      <Navbar />
      <div className="header">
        <h1 className="heading-1">Data Users</h1>
        <p
          className="body-1"
          ref={message}
          style={{ display: stateMsg ? "none" : "block" }}>
          Data berhasil dihapus
        </p>
      </div>
      <div className="body">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th className="body-1">No</th>
                <th className="body-1">Name</th>
                <th className="body-1">Username</th>
                <th className="body-1">Email</th>
                <th className="body-1">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((user, index) => {
                return (
                  <tr key={index} id={`user-${user.ID}`}>
                    <td className="body-1 black">{index + 1}</td>
                    <td className="body-1 black">{user.nama}</td>
                    <td className="body-1 black">{user.username}</td>
                    <td className="body-1 black">{user.email}</td>
                    <td className="body-1 black action">
                      <button
                        onClick={() => fnDelete(user.ID)}
                        className="button outline">
                        Delete
                      </button>
                      <Link
                        to={`/user-update/${index + 1}`}
                        className="button primary">
                        Update
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
