import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { SignInInput, SignInMutation } from "../gql/graphql";
import { ISignInFormProps, useSignIn } from "../hooks/use-sign-in";
import { setSignIn } from "../token";

export const SignIn = () => {
  const {
    register,
    getValues,
    handleSubmit,
    setFocus,
    setValue,
    formState: { errors, isValid },
  } = useForm<ISignInFormProps>({ mode: "onChange" });

  const onCompleted = (data: SignInMutation) => {
    const {
      signIn: { ok, token, err },
    } = data;
    if (ok && token) {
      setSignIn(token);
    } else {
      alert(err);
      setValue("password", "");
    }
  };

  const [
    signIn,
    { data: signInData, loading: signInLoading, error: signInError },
  ] = useSignIn(onCompleted);

  const signInHandler = () => {
    if (!signInLoading) {
      const { username, password } = getValues();
      if (!username || !password) return;
      const input: SignInInput = { username, password };
      signIn({ variables: { input } });
    }
  };

  const onSubmit = () => {
    signInHandler();
  };

  useEffect(() => {
    setFocus("username");
  }, []);

  return (
    <div className="bg-white w-full h-screen max-w-lg mx-auto flex flex-col justify-center content-center">
      <div className="text-xl">
        <div className="text-center text-3xl py-10">관리자용 로그인</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-[100px_1fr] place-items-center py-3">
            <span className="uppercase font-bold">ID</span>
            <input
              {...register("username", { required: true })}
              type="text"
              className="w-full border-b border-slate-600 px-2 leading-normal focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-[100px_1fr] place-items-center py-3">
            <span className="uppercase font-bold">PW</span>
            <input
              {...register("password", { required: true })}
              type="password"
              className="w-full border-b border-slate-600 px-2 leading-normal focus:outline-none"
            />
          </div>
          <div className="mx-auto w-[300px] pt-10">
            <button
              type={`submit`}
              className="bg-slate-700 text-white w-[300px] py-2 text-bold"
            >
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
