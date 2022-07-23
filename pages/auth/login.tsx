import Input from "components/common/Input/Input";
import React, { useCallback } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "helpers/hooks/useAuth";

const defaultValues = {
  email: "",
  password: "",
};

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Email format is not valid")
    .required("Email field is required"),
  password: Yup.string()
    .min(8, "Password length should be equal or higher than 8")
    .required("Password field is required"),
});

export interface LoginForm {
  email: string;
  password: string;
}

function LoginPage() {
  const { control, handleSubmit, formState } = useForm<LoginForm>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
    shouldFocusError: true,
  });
  const { error, loading, handleLogin } = useAuth();

  const onSubmit: SubmitHandler<LoginForm> = useCallback((data) => {
    handleLogin(data);
  }, []);

  return (
    <main className="safeArea p-5 flex justify-center items-center min-h-[70vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl md:w-2/3 p-5 shadow-md rounded-md flex flex-col"
      >
        <h1 className="text-4xl md:text-5xl text-sky-400 font-bold mb-10">
          Login
        </h1>
        <Controller
          control={control}
          name="email"
          render={({ field, formState }) => (
            <Input {...field} formState={formState} type="email" lbl="email" />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field, formState }) => (
            <Input
              {...field}
              formState={formState}
              type="password"
              lbl="password"
            />
          )}
        />
        {error && (
          <span className="text-rose-500 text-sm mt-5 ml-5 first-letter:capitalize">
            {error}
          </span>
        )}
        <button
          className="bg-rose-400 py-2 rounded-md mt-7 text-white disabled:bg-rose-800 disabled:opacity-50"
          type="submit"
          disabled={!formState.isValid}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
        <Link href="/auth/signup">
          <a className="first-letter:capitalize text-sky-400 text-xs md:text-sm hover:underline cursor-pointer text-center mt-5">
            you dont have an account?
          </a>
        </Link>
      </form>
    </main>
  );
}

export default LoginPage;
