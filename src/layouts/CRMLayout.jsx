import React, { Component, useState } from "react";
import { Outlet } from "react-router-dom";
import ThemeBox from "../components/ThemeBox";

// Components
import CRMHeader from "../components/crm/CRMHeader";
import CRMSidebar from "../components/crm/CRMSidebar";

export default function CRMLayout() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <div className="crm-wrapper">
        <CRMSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className={`relative transition-all duration-300  ${isSidebarOpen ? '4xl:ms-75 lg:ms-65' : '4xl:ms-20 lg:ms-20'} z-3 pb-6`}>
          <CRMHeader />
          <Outlet />
        </div>
      </div>
      <ThemeBox />
    </>
  );
}
