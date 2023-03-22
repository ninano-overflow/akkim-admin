import { useNavigate } from "react-router-dom";

export const navigateProjectHandler = () => {
  window.location.href = "/project";
};

// export const navigateCreateBoardHandler = () => {
//   const navigate = useNavigate();
//   navigate("/create-project");
// };

// export const navigateEditProjectHandler = (projectId: number) => {
//   const navigate = useNavigate();
//   navigate(`/project/${projectId}`);
// };

// export const navigateListBoardHandler = (projectId: number) => {
//   const navigate = useNavigate();
//   navigate(`/boards/${projectId}`);
// };
