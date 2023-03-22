import moment from "moment";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AsideComponent } from "../components/aside";
import { ListTextComponent } from "../components/list-text-component";
import { CrProjectInput, CrProjectMutation } from "../gql/graphql";
import { ICrProjectFormProps, useCrProject } from "../hooks/use-cr-project ";

export const CreateProject = () => {
  const navigate = useNavigate();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ICrProjectFormProps>({ mode: "onChange" });

  const onCrCompleted = async (data: CrProjectMutation) => {
    const {
      crProject: { ok, err },
    } = data;
    if (ok) {
      navigateListProjectHandler();
    } else {
      alert("생성에 실패했습니다, 모든 항목은 필수 정보입니다");
    }
  };
  const [crProject, { loading }] = useCrProject(onCrCompleted);
  const crProjectHandler = () => {
    if (!loading && isValid) {
      const { title, place, manager } = getValues();
      const input: CrProjectInput = {
        title,
        place,
        manager,
      };
      crProject({ variables: { input } });
    }
  };

  const navigateListProjectHandler = () => {
    navigate("/project");
  };

  return (
    <div className="grid grid-cols-[150px_1fr]">
      <AsideComponent />
      <div className="bg-white p-5">
        <div className="text-3xl font-bold">| 프로젝트 생성</div>
        <div className="p-4 my-4 bg-slate-200 rounded-lg">
          <form onSubmit={handleSubmit(crProjectHandler)}>
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
                onClick={crProjectHandler}
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
