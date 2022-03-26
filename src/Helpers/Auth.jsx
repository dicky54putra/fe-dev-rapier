import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth(param) {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");

    if (isLogin) {
      if (param === "login-page") {
        navigate("users");
      }
    } else {
      if (param === "dashboard-page") {
        navigate("login");
      }
    }
  });
}
