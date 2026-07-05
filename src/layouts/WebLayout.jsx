import { useEffect } from "react";
import { Outlet } from "react-router-dom";


import Header from "../components/web/Header";
import Footer from "../components/web/Footer";
import ThemeBox from "../components/ThemeBox";


export default function WebLayout() {

  return (
    <>
      <Header />
      <div className="main_wrapper website lg:mt-24 mt-19.5 [&_p]:text-gray-600 dark:[&_p]:text-gray-200 dark:bg-black/30 transition-all">
        <Outlet />
      </div>

      <Footer />
      <ThemeBox/>
      
    </>
  );
}
