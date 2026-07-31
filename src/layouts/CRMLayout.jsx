import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import ThemeBox from "../components/ThemeBox";

// Components
import CRMHeader from "../components/crm/CRMHeader";
import CRMSidebar from "../components/crm/CRMSidebar";

export default function CRMLayout() {
  return (
    <>
      <div className="flex grow">
        <CRMSidebar />
        <div className="xl:ps-62 4xl:ps-78 4xl:mt-40 mt-22  pb-6">
          <CRMHeader />
          <Outlet />
        </div>
      </div>
      <ThemeBox />
    </>
  );
}
