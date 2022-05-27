import React, { useCallback, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface InputPropsType {
  type: "text" | "password" | "tel" | "email";
  name: string;
  lbl: string;
}

function Input(props: InputPropsType) {
  const { type, name, lbl } = props;
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
      <input
        className="rounded-md outline-none px-3 py-2 text-sm border-2 focus:shadow"
        type={isSecure ? type : "text"}
        id={name}
      />
      {type === "password" && (
        <span
          className="absolute right-2 top-3 text-lg text-rose-400"
          onClick={handleShowPassword}
        >
          {isSecure ? <AiFillEye /> : <AiFillEyeInvisible />}
        </span>
      )}
      <span className="text-red-600 text-xs ml-3">error message</span>
    </fieldset>
  );
}

export default Input;
