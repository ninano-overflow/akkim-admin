import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DOMRoutes } from "../constants/props";
import { SignIn } from "../pages/sign-in";

export const LoggedOutRouter = () => {
  return (
    <Router>
      <Routes>
        {LoggedOutPages.map((page) => (
          <Route key={page.key} path={page.path} element={page.component} />
        ))}
      </Routes>
    </Router>
  );
};

const LoggedOutPages: DOMRoutes[] = [
  {
    path: "/",
    key: "/",
    component: <SignIn />,
  },
];
