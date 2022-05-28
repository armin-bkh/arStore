import Input from "components/common/Input/Input";
import React, { useState } from "react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { control, handleSubmit, formState } = useForm<LoginForm>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
    shouldFocusError: true,
  });
  const [error, setError] = useState<string>("");

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    console.log("====================================");
    console.log(data);
    console.log("====================================");
    try {
      router.replace("/");
    } catch (error: any) {
      console.log("====================================");
      console.log(error.message, "login error is here");
      setError(error.message);
      console.log("====================================");
    }
  };

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
          Submit
        </button>
      </form>
    </main>
  );
}

export default LoginPage;
