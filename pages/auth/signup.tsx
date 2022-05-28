import Input from "components/common/Input/Input";
import React, { useCallback, useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const defaultValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
};

const schema = Yup.object().shape({
  name: Yup.string().required("Name field is required"),
  email: Yup.string()
    .email("Email format is not valid")
    .required("Email field is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{11}$/, "Phone number format is not valid")
    .required("Phone number field is required"),
  password: Yup.string()
    .min(8, "Password length should be equal or higher than 8")
    .required("Password field is required"),
  passwordConfirmation: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Password confirmation is not match with password field"
    )
    .required("Password confirmation field is required"),
});

export type InputNamesType =
  | "name"
  | "email"
  | "phoneNumber"
  | "password"
  | "passwordConfirmation";
export interface SignupForm {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
}

function SignupPage() {
  const { control, handleSubmit, formState } = useForm<SignupForm>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
    shouldFocusError: true,
  });

  useEffect(() => {
    console.log("====================================");
    console.log(formState);
    console.log("====================================");
  }, [control]);

  const onSubmit: SubmitHandler<SignupForm> = (data) => {
    console.log(data);
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
        <Input
          formState={formState}
          control={control}
          name="name"
          type="text"
          lbl="name"
        />
        <div className="flex flex-col md:flex-row md:gap-5 gap-0">
          <Input
            formState={formState}
            control={control}
            name="email"
            type="email"
            lbl="email"
          />
          <Input
            formState={formState}
            control={control}
            name="phoneNumber"
            type="tel"
            lbl="phoneNumber"
          />
        </div>
        <Input
          formState={formState}
          control={control}
          name="password"
          type="password"
          lbl="password"
        />
        <Input
          formState={formState}
          control={control}
          name="passwordConfirmation"
          type="password"
          lbl="password confirmation"
        />
        <button
          className="bg-rose-400 py-2 rounded-md text-white disabled:bg-rose-800 disabled:opacity-50"
          type="submit"
          disabled={!formState.isValid}
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export default SignupPage;
