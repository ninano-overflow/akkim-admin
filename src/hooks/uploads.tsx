import axios, { AxiosRequestConfig } from "axios";
import React from "react";
import { authTokenVar, UPLOAD_URI } from "../apollo";

const headers: AxiosRequestConfig["headers"] = {
  "akkim-jwt": authTokenVar() || "",
};

export const upload = async (event: any) => {
  let data = new FormData();
  let file = event.target.files[0];
  data.append("file", file);
  const config = {
    headers,
  };
  return await axios.post(UPLOAD_URI, data, config);
};

export const uploadDetailImage = async (file: any) => {
  let data = new FormData();
  data.append("file", file);
  const config = {
    headers,
  };
  return await axios.post(UPLOAD_URI, data, config);
};
