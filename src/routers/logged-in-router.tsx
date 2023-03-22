import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AsideComponent } from "../components/aside";
import { DOMRoutes } from "../constants/props";
import { CreateProject } from "../pages/create-project";
import { EditProject } from "../pages/edit-project.tsx";
import { ListBoard } from "../pages/list-board";
import { ListProject } from "../pages/list-project";
import { SignIn } from "../pages/sign-in";

export const LoggedInRouter = () => {
  return (
    <Router>
      <Routes>
        {LoggedInPages.map((page) => (
          <Route key={page.key} path={page.path} element={page.component} />
        ))}
      </Routes>
    </Router>
  );
};

const LoggedInPages: DOMRoutes[] = [
  {
    path: "/board/:projectId",
    key: "/board/:projectId",
    component: <ListBoard />,
  },
  {
    path: "/project/:projectId",
    key: "/project/:projectId",
    component: <EditProject />,
  },
  {
    path: "/project",
    key: "/project",
    component: <ListProject />,
  },
  {
    path: "/create-project",
    key: "/create-project",
    component: <CreateProject />,
  },
  {
    path: "/*",
    key: "/any",
    component: <ListProject />,
  },
];
