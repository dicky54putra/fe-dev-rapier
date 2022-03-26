import { API_URI } from "./Constant";

const API_LOGIN = `${API_URI}/api/login`;
const API_LOGIN_JSON = `/api/login.json`;

const API_REGISTER = `${API_URI}/api/login`;
const API_REGISTER_JSON = `/api/register.json`;

const API_USERS = `${API_URI}/api/users`;
const API_USERS_JSON = `/api/users.json`;

const API_DELETE = `${API_URI}/api/delete/:id`;
const API_DELETE_JSON = `/api/delete.json`;

const API_EDIT = `${API_URI}/api/update/:id`;
const API_EDIT_JSON = `/api/edit.json`;

export {
  API_LOGIN,
  API_LOGIN_JSON,
  API_REGISTER,
  API_REGISTER_JSON,
  API_USERS,
  API_USERS_JSON,
  API_DELETE,
  API_DELETE_JSON,
  API_EDIT,
  API_EDIT_JSON,
};
