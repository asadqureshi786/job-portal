import React from "react";

import { useTheme } from "../context/ThemeContext";
// icons
import { MdNightsStay } from "react-icons/md";
import { IoSunny } from "react-icons/io5";

export default function ThemeBox() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div
        onClick={toggleTheme}
        className="group fixed bottom-3 right-3 z-100 rounded-full border border-black/40 hover:border-primary cursor-pointer transition-all hover:bg-primary bg-white size-9 flex justify-center items-center text-2xl"
      >
        {theme === "light" ? (
          <MdNightsStay className="-rotate-8 text-black group-hover:text-white transition-all " />
        ) : (
          <IoSunny className="-rotate-8 text-black group-hover:text-white transition-all " />
        )}
      </div>
    </>
  );
}
