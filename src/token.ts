import moment from "moment";
import { authTokenVar } from "./apollo";

export const TOKEN = "akkim-jwt";

export const getToken = () => localStorage.getItem(TOKEN);

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN, token);
};

export const setPopupToken = (eventName: string, token: string) => {
  localStorage.setItem(eventName, token);
};
export const expirePopupToken = (eventName: string) => {
  localStorage.removeItem(eventName);
};

export const setHomeEventToken = (eventName: string) => {
  setPopupToken(eventName, `${new Date()}`);
};
export const expireHomeEventToken = (eventName: string) => {
  if (localStorage.getItem(eventName)) {
    var thatDay = moment(new Date(`${localStorage.getItem(eventName)}`)).format(
      "YYYY-MM-DD"
    );
    var today = moment(new Date()).format("YYYY-MM-DD");
    if (thatDay === today) {
      return;
    } else {
      expirePopupToken(eventName);
    }
  }
};

export const setSignIn = (token: string) => {
  setToken(token);
  authTokenVar(token);
  window.location.href = "/";
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN);
};

export const setSignOut = () => {
  removeToken();
  authTokenVar("");
  window.location.href = "/";
};
