import React, { useEffect } from "react";
import { AuthContextConsumer } from "../../contexts/Authcontext";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleAlert } from "lucide-react";
import { cn } from "../libs/utils";

export const Header = ({ title }: { title: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Modalanime = ({ modalSize = "lg" }: { modalSize?: "sm" | "lg" }) => {
    return (
      <AnimatePresence>
        {isModalOpen && (
          <div
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
          >
            <motion.div
              initial={{ scale: 0, rotate: "180deg" }}
              animate={{
                scale: 1,
                rotate: "0deg",
                transition: {
                  type: "spring",
                  bounce: 0.25,
                },
              }}
              exit={{ scale: 0, rotate: "180deg" }}
              onClick={(e) => e.stopPropagation()}
              className={cn(
                "relative w-full max-w-lg cursor-default overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 p-6 text-white shadow-2xl",
                {
                  "max-w-sm": modalSize === "sm",
                }
              )}
            >
              <div className="flex flex-col gap-3">
                <CircleAlert className="mx-auto text-white" size={48} />
                <h3
                  className={cn("text-center text-3xl font-bold", {
                    "text-2xl": modalSize === "sm",
                  })}
                >
                  本当にlogoutしますか？
                </h3>
                <p className="mb-1 text-center">本当にlogoutしますか？</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-full rounded bg-transparent py-2 font-semibold text-white transition-colors hover:bg-white/30"
                  >
                    Close!
                  </button>
                  <button
                    onClick={logoutfn}
                    className="w-full rounded bg-white py-2 font-semibold text-indigo-600 transition-opacity hover:opacity-80"
                  >
                    Logout!
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  };
  // const context = AuthContextConsumer();
  // let onclickfn = context.auth.login;
  // let buttontext = "login";
  // if (context.auth.loginUser) {
  //   const dn = context.auth.loginUser.displayName;
  //   if (typeof dn === "string") {
  //     onclickfn = context.auth.logout;
  //     buttontext = dn;
  //   }
  // }

  let buttontext = "";
  const context = AuthContextConsumer();
  const [loginstate, setLoginstate] = useState(false);
  useEffect(() => {
    let logined = context.auth.loginUser !== null;
    setLoginstate(logined);
  }, [context.auth]);

  const dn = context.auth.loginUser?.displayName;
  if (loginstate) {
    if (typeof dn === "string") {
      buttontext = dn;
    }
  } else {
    buttontext = "login";
  }

  const onclickfunction = () => {
    if (!context.auth.loginUser) {
      context.auth.login();
      setLoginstate(true);
    } else if (context.auth.loginUser) {
      setIsModalOpen(true);
    }
  };
  const logoutfn = () => {
    setIsModalOpen(false);
    setLoginstate(false);
    context.auth.logout();
    buttontext = "login";
  };

  return (
    <>
      <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
        <div className="flex justify-between items-center max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className=" text-2xl font-semibold text-gray-100">{title}</h1>
          <button
            onClick={onclickfunction}
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
      <Modalanime />
    </>
  );
};
