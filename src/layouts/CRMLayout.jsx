import React from 'react'
import { Outlet } from "react-router-dom";

export default function CRMLayout() {
  return (
    <>
    <div>CRMLayout Header</div>
    <Outlet />
    <div>CRMLayout Footer</div>
    </>
  )
}
