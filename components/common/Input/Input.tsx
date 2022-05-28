import React, { useCallback, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Controller, type Control, type FormState } from "react-hook-form";
import { InputNamesType, SignupForm } from "pages/auth/signup";
interface InputPropsType {
  type: "text" | "password" | "tel" | "email";
  name: InputNamesType;
  lbl: string;
  control: Control<SignupForm>;
  formState: FormState<SignupForm>;
}

function Input(props: InputPropsType) {
  const { type, name, lbl, control, formState } = props;
  const [isSecure, setIsSecure] = useState<boolean>(true);

  const handleShowPassword = useCallback(() => {
    setIsSecure((prevIsSecure) => !prevIsSecure);
  }, [isSecure]);

  return (
    <fieldset className="flex flex-col relative group-focus mb-5 flex-1">
      <label
        className="capitalize text-sm md:text-base bg-white px-1 absolute -top-3 left-2"
        htmlFor={name}
      >
        {lbl}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            className="rounded-md outline-none px-3 py-2 text-sm border-2 focus:shadow autoFillInput"
            type={isSecure ? type : "text"}
            id={name}
            {...field}
          />
        )}
      />
      {type === "password" && (
        <span
          className="absolute right-2 top-3 text-lg text-rose-400"
          onClick={handleShowPassword}
        >
          {isSecure ? <AiFillEye /> : <AiFillEyeInvisible />}
        </span>
      )}
      {formState.errors[name]?.message && formState.touchedFields[name] && (
        <span className="text-red-600 text-xs ml-3">
          {formState.errors[name]?.message}
        </span>
      )}
    </fieldset>
  );
}

export default Input;
