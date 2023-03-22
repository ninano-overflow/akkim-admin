import moment from "moment";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AsideComponent } from "../components/aside";
import { ListTextComponent } from "../components/list-text-component";
import {
  DelProjectInput,
  DelProjectMutation,
  ListProjectInput,
  ListProjectQuery,
} from "../gql/graphql";
import { useDelProject } from "../hooks/use-del-project";
import { useListProject } from "../hooks/use-list-project";

export const ListProject = () => {
  const navigate = useNavigate();

  const onListCompleted = async (data: ListProjectQuery) => {};
  const [listProject, { data, loading, refetch, called }] =
    useListProject(onListCompleted);
  const listProjectHandler = () => {
    const input: ListProjectInput = {
      page: 1,
    };
    listProject({ variables: { input } });
  };

  const onDelCompleted = async (data: DelProjectMutation) => {
    const {
      delProject: { ok, err },
    } = data;
    if (ok) {
      await refetch();
    } else {
      alert(err);
    }
  };
  const [delProject, { loading: delProjectLoading }] =
    useDelProject(onDelCompleted);
  const delProjectHandler = (projectId: number) => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      if (delProjectLoading) {
        alert("잠시만 기다려주세요");
        return;
      }
      const input: DelProjectInput = {
        projectId,
      };
      delProject({ variables: { input } });
    }
  };

  const navigateCreateProjectHandler = () => {
    navigate("/create-project");
  };

  const navigateEditProjectHandler = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  const navigateListBoardHandler = (projectId: number) => {
    navigate(`/board/${projectId}`);
  };

  useEffect(() => {
    listProjectHandler();
  }, []);

  return (
    <div className="grid grid-cols-[150px_1fr]">
      <AsideComponent />
      <div className="bg-white p-5">
        <div className="text-3xl font-bold">
          | 프로젝트 목록
          <span className="float-right">
            <button
              className=" text-lg p-1 bg-green-300 w-40 rounded-sm whitespace-nowrap"
              onClick={navigateCreateProjectHandler}
            >
              프로젝트 생성
            </button>
          </span>
        </div>
        <div className="p-4 my-4 bg-slate-200 rounded-lg">
          <table className="align-center w-full max-w-screen-xl text-lg">
            <thead>
              <tr className="border-b border-slate-600">
                <th className="py-2">번호</th>
                <th className="py-2">프로젝트명</th>
                <th className="py-2">담당자</th>
                <th className="py-2">장소</th>
                <th className="py-2">생성일자</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.listProject.projects ? (
                data.listProject.projects.length > 0 ? (
                  data?.listProject.projects?.map((project, index) => (
                    <tr
                      className="border-b border-slate-300 text-center"
                      key={`list-project-${index}`}
                    >
                      <td className="py-2">{`${index + 1}`}</td>
                      <td className="py-2">{`${project.title}`}</td>
                      <td className="py-2">{`${project.manager}`}</td>
                      <td className="py-2">{`${project.place}`}</td>
                      <td className="py-2">{`${moment(project.createdAt).format(
                        "YYYY-MM-DD"
                      )}`}</td>
                      <td className="text-sm font-bold">
                        <span
                          className="cursor-pointer"
                          onClick={() => navigateEditProjectHandler(project.id)}
                        >
                          편집
                        </span>{" "}
                        /{" "}
                        <span
                          className="cursor-pointer"
                          onClick={() => navigateListBoardHandler(project.id)}
                        >
                          언어 편집
                        </span>{" "}
                        /{" "}
                        <span
                          className="text-red-600 cursor-pointer"
                          onClick={() => delProjectHandler(project.id)}
                        >
                          삭제
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </tbody>
          </table>
          {!called ||
            (loading ? (
              <ListTextComponent text="데이터를 불러오는 중입니다..." />
            ) : (
              <></>
            ))}
          {data?.listProject.projects ? (
            data.listProject.projects.length < 1 ? (
              <ListTextComponent text="데이터가 없습니다" />
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
