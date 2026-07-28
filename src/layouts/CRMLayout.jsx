import React from 'react'
import { Outlet } from "react-router-dom";
import ThemeBox from "../components/ThemeBox";

export default function CRMLayout() {
  return (
    <>
    <div>CRMLayout Header</div>
    <Outlet />
    <div>CRMLayout Footer</div>
    <ThemeBox/>
    </>
  )
}
