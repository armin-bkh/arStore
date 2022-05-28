import React, { useCallback, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FormState } from "react-hook-form";
import { InputNamesType } from "pages/auth/signup";
interface InputPropsType {
  type: "text" | "password" | "tel" | "email";
  name: string;
  lbl: string;
  formState: FormState<any>;
}

function Input(props: InputPropsType, _ref: any) {
  const { type, name, lbl, formState, ...rest } = props;
  const [isSecure, setIsSecure] = useState<boolean>(true);

  console.log("====================================");
  console.log(formState.touchedFields, "<=== touched");
  console.log(formState.errors, "<=== errors");
  console.log("====================================");

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
      <input
        className="rounded-md outline-none px-3 py-2 text-sm border-2 focus:shadow autoFillInput"
        type={isSecure ? type : "text"}
        id={name}
        {...rest}
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

export default React.forwardRef(Input);
