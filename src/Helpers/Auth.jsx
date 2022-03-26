import { useEffect } from "react";

export default function Auth(param) {
  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");

    if (isLogin) {
      if (param === "login-page") {
        window.location.href = "/users";
      }
    } else {
      if (param === "dashboard-page") {
        window.location.href = "/login";
      }
    }
  });
}
