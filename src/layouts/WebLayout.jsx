import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

import Header from "../components/web/Header";
import Footer from "../components/web/Footer";

// icons
import { MdNightsStay } from "react-icons/md";
import { IoSunny } from "react-icons/io5";

export default function WebLayout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header />
      <div className="main_wrapper website lg:mt-24 mt-19.5 [&_p]:text-gray-600 dark:[&_p]:text-gray-200 dark:bg-black/30 transition-all">
        <Outlet />
      </div>

      <Footer />

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
