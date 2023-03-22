import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { AsideComponent } from "../components/aside";
import {
  EditProjectInput,
  EditProjectMutation,
  GetProjectInput,
  GetProjectQuery,
} from "../gql/graphql";
import {
  IEditProjectFormProps,
  useEditProject,
} from "../hooks/use-edit-project";
import { useGetProject } from "../hooks/use-get-project";

export const EditBoard = () => {
  const navigate = useNavigate();
  const params = useParams();

  const {
    register,
    getValues,
    handleSubmit,
    setFocus,
    setValue,
    formState: { errors, isValid },
  } = useForm<IEditProjectFormProps>({ mode: "onChange" });

  const onGetCompleted = async (data: GetProjectQuery) => {
    const {
      getProject: { ok, err, project },
    } = data;
    if (ok && project) {
      setValue("title", project?.title);
      setValue("place", project.place);
      setValue("manager", project.place);
      setFocus("title");
    } else {
      alert("데이터를 불러올 수 없습니다");
      window.location.href = "/project";
    }
  };
  const [getProject, { loading }] = useGetProject(onGetCompleted);
  const getProjectHandler = (projectId: number) => {
    if (!loading) {
      const input: GetProjectInput = {
        projectId,
      };
      getProject({ variables: { input } });
    }
  };

  const onEditCompleted = async (data: EditProjectMutation) => {
    const {
      editProject: { ok, err },
    } = data;
    if (ok) {
      navigateListProjectHandler();
    } else {
      console.log(err);
      alert("생성에 실패했습니다, 모든 항목은 필수 정보입니다");
    }
  };
  const [editProject, { loading: editProjectLoading }] =
    useEditProject(onEditCompleted);
  const editProjectHandler = () => {
    if (!loading && isValid) {
      const { title, place, manager, projectId } = getValues();
      const input: EditProjectInput = {
        projectId,
        title,
        place,
        manager,
      };
      editProject({ variables: { input } });
    }
  };

  const navigateListProjectHandler = () => {
    navigate("/project");
  };

  useEffect(() => {
    if (params?.projectId != undefined) {
      getProjectHandler(+params.projectId);
      setValue("projectId", +params.projectId);
    }
  }, []);

  return (
    <div className="grid grid-cols-[150px_1fr]">
      <AsideComponent />
      <div className="bg-white p-5">
        <div className="text-3xl font-bold">| 프로젝트 생성</div>
        <div className="p-4 my-4 bg-slate-200 rounded-lg">
          <form onSubmit={handleSubmit(editProjectHandler)}>
            <div className="pb-4 opacity-0">
              <p className="font-bold pb-2">ID</p>
              <input
                {...register("projectId", { required: true })}
                type="text"
                className="w-full p-2 focus:outline-none border-[1px] border-gray-400 focus:border-green-400 rounded"
              />
            </div>

            <div className="pb-4">
              <p className="font-bold pb-2">프로젝트명</p>
              <input
                {...register("title", { required: true })}
                type="text"
                className="w-full p-2 focus:outline-none border-[1px] border-gray-400 focus:border-green-400 rounded"
              />
            </div>

            <div className="pb-4">
              <p className="font-bold pb-2">설치 장소</p>
              <input
                {...register("place", { required: true })}
                type="text"
                className="w-full p-2 focus:outline-none border-[1px] border-gray-400 focus:border-green-400 rounded"
              />
            </div>

            <div className="pb-4">
              <p className="font-bold pb-2">담당자명</p>
              <input
                {...register("manager", { required: true })}
                type="text"
                className="w-full p-2 focus:outline-none border-[1px] border-gray-400 focus:border-green-400 rounded"
              />
            </div>

            <div className="py-4 text-center">
              <button
                type="submit"
                className=" text-lg p-1 bg-green-200 text-gray-700 font-bold w-40 rounded-sm whitespace-nowrap mr-3"
                onClick={editProjectHandler}
              >
                생성
              </button>
              <button
                type="button"
                className=" text-lg p-1 bg-gray-700 text-white w-40 font-bold rounded-sm whitespace-nowrap"
                onClick={navigateListProjectHandler}
              >
                취소
              </button>
              {!isValid && (
                <div className="text-red-700 text-sm">
                  모든 항목을 입력해주세요
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
