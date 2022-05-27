import Input from "components/common/Input/Input";
import React from "react";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
};

function SignupPage() {
  return (
    <main className="safeArea p-5 flex justify-center items-center min-h-[70vh]">
      <form className="w-full max-w-xl md:w-2/3 p-5 shadow-md rounded-md flex flex-col">
        <h1 className="text-4xl md:text-5xl text-sky-400 font-bold mb-10">
          Sign up
        </h1>
        <Input name="name" type="text" lbl="name" />
        <div className="flex flex-col md:flex-row md:gap-5 gap-0">
          <Input name="email" type="email" lbl="email" />
          <Input name="phoneNumber" type="tel" lbl="phoneNumber" />
        </div>
        <Input name="password" type="password" lbl="password" />
        <Input
          name="passwordConfirmation"
          type="password"
          lbl="passwordConfirmation"
        />
        <button
          className="bg-rose-400 py-2 rounded-md text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export default SignupPage;
