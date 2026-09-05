import React from "react";

export default function CRMHeader() {
  return (
    <div
      style={{
        boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
      }}
      className="sticky top-0 z-1 w-full right-0 bg-white dark:bg-crmBodyHeader border-b border-white dark:border-gray-900 h-16 flex items-center justify-between px-5"
    >
      <div className="flex flex-col gap-0">
        <h1 className=" 4xl:text-2xl text-lg font-bold dark:text-slate-200 leading-normal">
          Welcome Back
        </h1>
        <div className="text-[13px] dark:text-slate-400 leading-normal">
          Lets talent awaits, Let's hire smart!
        </div>
      </div>
      <div className="text-[13px] dark:text-white leading-normal size-10 flex items-center justify-center transition-all bg-primary/40 hover:bg-primary/60 rounded-full">
        AQ
      </div>
    </div>
  );
}
