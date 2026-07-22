import React from "react";

export default function SocialButton() {
  return (
    <div className="grid grid-cols-2 items-center gap-2">
      <button className="w-full flex justify-center items-center gap-3 text-base gray-300 rounded-md border border-gray-200 dark:border-gray-900 dark:text-slate-300 py-1.5 px-5 transition-all hover:bg-gray-100 dark:hover:bg-slate- cursor-pointer">
        <img src="/img/c_logo/google.png" className="w-4.5" />
        Google
      </button>
      <button className="full  flex justify-center items-center gap-3 text-base gray-300 rounded-md border border-gray-200 dark:border-gray-900 dark:text-slate-300 py-1.5 px-5 transition-all hover:bg-gray-100 dark:hover:bg-slate- cursor-pointer">
        <img
          src="/img/c_logo/apple.png"
          className="w-4.5 bloack dark:hidden!"
        />
        <img
          src="/img/c_logo/apple-darl.png"
          className="w-4.5 hidden dark:block!"
        />
        Apple
      </button>
    </div>
  );
}
