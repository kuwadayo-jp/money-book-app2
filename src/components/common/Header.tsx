import React from "react";
import { AuthContextConsumer } from "../../contexts/Authcontext";

export const Header = ({ title }: { title: string }) => {
  const context = AuthContextConsumer();
  let onclickfn = context.auth.login;
  let buttontext = "login";
  if (context.auth.loginUser) {
    const dn = context.auth.loginUser.displayName;
    if (typeof dn === "string") {
      onclickfn = context.auth.logout;
      buttontext = dn;
    }
  }
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className=" text-2xl font-semibold text-gray-100">{title}</h1>
        <button
          onClick={onclickfn}
          className="
            box-border inline-block h-11 transform-gpu
            cursor-pointer touch-manipulation whitespace-nowrap rounded-lg border-b-4 border-solid border-transparent
            bg-sky-600 px-4 py-3 text-center text-sm font-bold uppercase leading-5 tracking-wider text-white outline-none
            transition-all duration-200 hover:brightness-110
            active:border-b-0 active:border-t-4 active:bg-none disabled:cursor-auto"
        >
          {buttontext}
          <span className="absolute inset-0 -z-10 rounded-lg border-b-4 border-solid border-transparent bg-sky-500" />
        </button>
      </div>
    </header>
  );
};
