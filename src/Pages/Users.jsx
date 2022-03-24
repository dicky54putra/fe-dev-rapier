import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { API_URI } from "../Helpers/Constant";

export default function Users() {
  const [data, setData] = useState(null);

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

  return (
    <div className="container">
      <Navbar />
      <div className="header">
        <h1 className="heading-1">Data Users</h1>
      </div>
      <div className="body">
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
                <tr key={index} id={`user-${index}`}>
                  <td className="body-1 black">{index + 1}</td>
                  <td className="body-1 black">{user.nama}</td>
                  <td className="body-1 black">{user.username}</td>
                  <td className="body-1 black">{user.email}</td>
                  <td className="body-1 black action">
                    <button href="" className="button outline">
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
  );
}
