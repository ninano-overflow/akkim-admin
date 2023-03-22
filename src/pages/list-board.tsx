import moment from "moment";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { DOWNLOAD_URI } from "../apollo";
import { AsideComponent } from "../components/aside";
import { ListTextComponent } from "../components/list-text-component";
import {
  BoardType,
  CrBoardInput,
  CrBoardMutation,
  DelBoardInput,
  DelBoardMutation,
  EditBoardInput,
  EditBoardMutation,
  GetBoardInput,
  GetBoardQuery,
  ListBoardInput,
  ListBoardQuery,
  SetBoardUploadInput,
  SetBoardUploadMutation,
} from "../gql/graphql";
import { upload } from "../hooks/uploads";
import { useCrBoard } from "../hooks/use-cr-board";
import { useDelBoard } from "../hooks/use-del-board";
import { IEditBoardFormProps, useEditBoard } from "../hooks/use-edit-board";
import { useGetBoard } from "../hooks/use-get-board";
import { useListBoard } from "../hooks/use-list-board";
import { useSetBoardUpload } from "../hooks/use-set-board-upload";

export const ListBoard = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [selectedBoardId, setSelectedBoardId] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);

  const {
    register,
    getValues,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<IEditBoardFormProps>({ mode: "onChange" });

  const onGetCompleted = async (data: GetBoardQuery) => {
    const {
      getBoard: { ok, err, board },
    } = data;
    console.log(data);
    if (ok && board) {
      setValue("language", board.language);
    } else {
      alert("데이터를 불러올 수 없습니다");
    }
  };
  const [
    getBoard,
    { data: getBoardData, refetch: getBoardRefetch, loading: getBoardLoading },
  ] = useGetBoard(onGetCompleted);
  const getBoardHandler = (boardId: number) => {
    setSelectedBoardId(boardId);
    const input: GetBoardInput = {
      boardId,
    };
    getBoard({ variables: { input } });
  };

  const onListCompleted = async (data: ListBoardQuery) => {};
  const [listBoard, { data, loading, refetch, called }] =
    useListBoard(onListCompleted);
  const listBoardHandler = (projectId: number) => {
    const input: ListBoardInput = {
      projectId,
    };
    listBoard({ variables: { input } });
  };

  const onDelCompleted = async (data: DelBoardMutation) => {
    const {
      delBoard: { ok, err },
    } = data;
    if (ok) {
      await refetch();
    } else {
      alert(err);
    }
  };
  const [delBoard, { loading: delBoardLoading }] = useDelBoard(onDelCompleted);
  const delBoardHandler = (boardId: number) => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      if (delBoardLoading) {
        alert("잠시만 기다려주세요");
        return;
      }
      const input: DelBoardInput = {
        boardId,
      };
      delBoard({ variables: { input } });
    }
  };

  const onCrCompleted = async (data: CrBoardMutation) => {
    const {
      crBoard: { ok, err },
    } = data;
    if (ok) {
      await refetch();
    } else {
      alert(err);
    }
  };
  const [crBoard, { loading: crBoardLoading }] = useCrBoard(onCrCompleted);
  const crBoardHandler = () => {
    if (crBoardLoading) {
      alert("잠시만 기다려주세요");
      return;
    }
    if (params.projectId != undefined) {
      const input: CrBoardInput = {
        projectId: +params.projectId,
        language: "언어명",
        type: BoardType.Video,
      };
      crBoard({ variables: { input } });
    }
  };

  const onEditCompleted = async (data: EditBoardMutation) => {
    const {
      editBoard: { ok, err },
    } = data;
    if (ok) {
      alert("정보가 변경되었습니다");
      await refetch();
    } else {
      alert(err);
    }
  };
  const [editBoard, { loading: editBoardLoading }] =
    useEditBoard(onEditCompleted);
  const editBoardHandler = () => {
    if (editBoardLoading) {
      alert("잠시만 기다려주세요");
      return;
    }
    if (!isValid) {
      alert("항목을 입력해주세요");
      return;
    }
    if (selectedBoardId != undefined) {
      const { language } = getValues();

      const input: EditBoardInput = {
        boardId: selectedBoardId,
        language: language,
        type: BoardType.Video,
      };
      editBoard({ variables: { input } });
    }
  };

  const onUploadCompleted = async (data: SetBoardUploadMutation) => {
    const {
      setBoardUpload: { ok, err },
    } = data;

    if (ok) {
      alert("정보가 변경되었습니다");
      await getBoardRefetch();
      setUploading(false);
    } else {
      alert(err);
    }
  };
  const [setBoardUpload, { loading: setBoardUploadLoading }] =
    useSetBoardUpload(onUploadCompleted);
  const setBoardUploadHandler = (
    boardId: number,
    uploadUuid: string,
    uploadType: string
  ) => {
    const input: SetBoardUploadInput = {
      boardId,
      uploadUuid,
      uploadType,
    };
    setBoardUpload({ variables: { input } });
  };

  const uploadHandler = async (event: any, uploadType: string) => {
    if (uploading) {
      alert("파일을 업로드 중입니다.");
      return;
    }

    if (!editBoardLoading) {
      setUploading(true);
      const result = await upload(event);

      if (!selectedBoardId) {
        alert("");
      }

      if (result.data.ok) {
        setBoardUploadHandler(
          selectedBoardId,
          result.data.upload.uuid,
          uploadType
        );
      }
    }
  };

  useEffect(() => {
    if (params?.projectId != undefined) {
      listBoardHandler(+params.projectId);
    }
  }, []);

  return (
    <div className="grid grid-cols-[200px_1fr]">
      <AsideComponent />
      <div className="bg-white p-5">
        <div className="text-3xl font-bold">
          | 언어 목록
          <span className="float-right">
            <button
              className=" text-lg p-1 bg-green-300 w-40 rounded-sm whitespace-nowrap"
              onClick={crBoardHandler}
            >
              언어 생성
            </button>
          </span>
        </div>
        <div className="p-4 my-4 bg-slate-200 rounded-lg">
          <div className="grid grid-cols-[150px_1fr] gap-2 p-2">
            <div className="grid grid-cols-1 gap-2">
              <div>
                {data?.listBoard.boards ? (
                  data.listBoard.boards.length > 0 ? (
                    data?.listBoard.boards?.map((board, index) => (
                      <div
                        className="text-center bg-slate-500 text-white p-2 rounded-md mb-3"
                        key={`list-board-${index}`}
                      >
                        <span>{`${board.language}`}</span>
                        <div>
                          <span
                            className="cursor-pointer"
                            onClick={() => getBoardHandler(board.id)}
                          >
                            선택
                          </span>{" "}
                          /{" "}
                          <span
                            className="cursor-pointer"
                            onClick={() => delBoardHandler(board.id)}
                          >
                            삭제
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <></>
                  )
                ) : (
                  <></>
                )}
                {!called ||
                  (loading ? (
                    <ListTextComponent text="데이터를 불러오는 중입니다..." />
                  ) : (
                    <></>
                  ))}
                {data?.listBoard.boards ? (
                  data.listBoard.boards.length < 1 ? (
                    <ListTextComponent text="데이터가 없습니다" />
                  ) : (
                    <></>
                  )
                ) : (
                  <></>
                )}
              </div>
            </div>
            {selectedBoardId > 0 ? (
              !getBoardLoading ? (
                <div className=" bg-slate-300 p-2 rounded-sm">
                  <div>
                    <form onSubmit={handleSubmit(editBoardHandler)}>
                      <div className="pb-4">
                        <p className="font-bold pb-2 px-2">
                          언어 {`: ${getBoardData?.getBoard.board?.language}`}
                        </p>
                        <input
                          {...register("language", { required: true })}
                          type="text"
                          className="w-full p-2 focus:outline-none border-[1px] border-gray-400 focus:border-green-400 rounded"
                        />
                      </div>

                      <div className="py-2 text-center">
                        <button
                          type="submit"
                          className=" text-lg p-1 bg-green-200 text-gray-700 font-bold w-40 rounded-sm whitespace-nowrap mr-3"
                        >
                          변경
                        </button>
                        {!isValid && (
                          <div className="text-red-700 text-sm">
                            항목을 입력해주세요
                          </div>
                        )}
                      </div>
                    </form>
                  </div>
                  <div className="grid grid-cols-3 text-center">
                    <div>
                      <div>버튼 이미지</div>
                      <input
                        type="file"
                        name="buttonImg"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={(event: any) =>
                          uploadHandler(event, "buttonImg")
                        }
                      />
                      <img
                        src={`${DOWNLOAD_URI}${getBoardData?.getBoard.board?.uploadedButtonImg?.uuid}`}
                        className={`w-full`}
                      />
                    </div>
                    <div>
                      <div>포스터 이미지</div>
                      <input
                        type="file"
                        name="signMainImg"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={(event: any) =>
                          uploadHandler(event, "signBgImg")
                        }
                      />
                      <img
                        src={`${DOWNLOAD_URI}${getBoardData?.getBoard.board?.uploadedSignBgImg?.uuid}`}
                        className={`w-full`}
                      />
                    </div>
                    <div>
                      <div>동영상</div>
                      <input
                        type="file"
                        name="playMedia"
                        accept="video/mp4"
                        onChange={(event: any) =>
                          uploadHandler(event, "playMedia")
                        }
                      />
                      <video
                        src={`${DOWNLOAD_URI}${getBoardData?.getBoard.board?.uploadedPlayMedia?.uuid}`}
                        controls
                      ></video>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
