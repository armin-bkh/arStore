import Input from "components/common/Input/Input";
import React from "react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";
import { useAuth } from "helpers/hooks/useAuth";

const defaultValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
};

const schema = Yup.object().shape({
  name: Yup.string()
    .min(6, "Name length should higher than 5 character")
    .required("Name field is required"),
  email: Yup.string()
    .email("Email format is not valid")
    .required("Email field is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{11}$/, "Phone number format is not valid")
    .required("Phone number field is required"),
  password: Yup.string()
    .min(8, "Password length should be equal or higher than 8 character")
    .required("Password field is required"),
  passwordConfirmation: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Password confirmation is not match with password field"
    )
    .required("Password confirmation field is required"),
});

export interface SignUpForm {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
}

function SignUpPage() {
  const { control, handleSubmit, formState } = useForm<SignUpForm>({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
    shouldFocusError: true,
  });
  const { error, loading, handleRegister } = useAuth();

  const onSubmit: SubmitHandler<SignUpForm> = (data) => {
    const { passwordConfirmation, ...userData } = data;
    handleRegister(userData);
  };

  return (
    <main className="safeArea p-5 flex justify-center items-center min-h-[70vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl md:w-2/3 p-5 shadow-md rounded-md flex flex-col"
      >
        <h1 className="text-4xl md:text-5xl text-sky-400 font-bold mb-10">
          Sign up
        </h1>
        <Controller
          control={control}
          name="name"
          render={({ field, formState }) => (
            <Input {...field} formState={formState} type="text" lbl="name" />
          )}
        />
        <div className="flex flex-col md:flex-row md:gap-5 gap-0">
          <Controller
            control={control}
            name="email"
            render={({ field, formState }) => (
              <Input
                {...field}
                formState={formState}
                type="email"
                lbl="email"
              />
            )}
          />
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field, formState }) => (
              <Input
                {...field}
                formState={formState}
                type="tel"
                lbl="phone number"
              />
            )}
          />
        </div>
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
        <Controller
          control={control}
          name="passwordConfirmation"
          render={({ field, formState }) => (
            <Input
              {...field}
              formState={formState}
              type="password"
              lbl="password confirmation"
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
        <Link href="/auth/login">
          <a className="first-letter:capitalize text-sky-400 text-xs md:text-sm hover:underline cursor-pointer text-center mt-5">
            i'm already have account
          </a>
        </Link>
      </form>
    </main>
  );
}

export default SignUpPage;
