import axios from "axios";
import RequestConfiguration from "configuration/requestConfiguration.json";

const TOKEN = JSON.parse(
  JSON.parse(
    localStorage
      .getItem("persist:root")
  ).user)
  .currentUser
  .signedToken;

export const PublicRequest = axios.create({
  baseURL: RequestConfiguration.apiUrl
});

export const UserRequest = axios.create({
  baseURL: RequestConfiguration.apiUrl,
  header: {
    token: `Bearer ${TOKEN}`
  }
});