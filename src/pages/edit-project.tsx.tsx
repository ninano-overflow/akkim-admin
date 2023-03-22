import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { DOWNLOAD_URI } from "../apollo";
import { AsideComponent } from "../components/aside";
import {
  EditProjectInput,
  EditProjectMutation,
  GetProjectInput,
  GetProjectQuery,
  SetProjectUploadInput,
  SetProjectUploadMutation,
} from "../gql/graphql";
import { upload } from "../hooks/uploads";
import {
  IEditProjectFormProps,
  useEditProject,
} from "../hooks/use-edit-project";
import { useGetProject } from "../hooks/use-get-project";
import { useSetProjectUpload } from "../hooks/use-set-project-upload";

export const EditProject = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [uploading, setUploading] = useState<boolean>(false);

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
      setValue("manager", project.manager);
      setFocus("title");
    } else {
      alert("데이터를 불러올 수 없습니다");
      window.location.href = "/project";
    }
  };
  const [getProject, { data: getProjectData, loading, refetch }] =
    useGetProject(onGetCompleted);
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

  const onSetCompleted = async (data: SetProjectUploadMutation) => {
    const {
      setProjectUpload: { ok, err },
    } = data;
    if (ok) {
      await refetch();
      setUploading(false);
    } else {
      console.log(err);
      alert("생성에 실패했습니다, 모든 항목은 필수 정보입니다");
    }
  };
  const [setProjectUpload, { loading: SetProjectUploadLoading }] =
    useSetProjectUpload(onSetCompleted);
  const setProjectUploadHandler = (uploadUuid: string) => {
    if (!loading && isValid) {
      const { projectId } = getValues();
      const input: SetProjectUploadInput = {
        projectId,
        uploadUuid,
      };
      setProjectUpload({ variables: { input } });
    }
  };

  const navigateListProjectHandler = () => {
    navigate("/project");
  };

  const uploadHandler = async (event: any) => {
    if (uploading) {
      alert("파일을 업로드 중입니다.");
      return;
    }

    if (!editProjectLoading) {
      setUploading(true);
      const result = await upload(event);

      if (result.data.ok) {
        setProjectUploadHandler(result.data.upload.uuid);
      }
    }
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
              <p className="font-bold pb-2">링크</p>
              <div>{`http://13.209.20.239:3001/sign/${getProjectData?.getProject.project?.uuid}`}</div>
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

            <div>
              <div>배경 화면</div>
              <input
                type="file"
                name="buttonImg"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(event: any) => uploadHandler(event)}
              />
              <img
                src={`${DOWNLOAD_URI}${getProjectData?.getProject.project?.uploadedMainImg?.uuid}`}
                className={`w-[400px]`}
              />
            </div>

            <div className="py-4 text-center">
              <button
                type="submit"
                className=" text-lg p-1 bg-green-200 text-gray-700 font-bold w-40 rounded-sm whitespace-nowrap mr-3"
                onClick={editProjectHandler}
              >
                변경
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
