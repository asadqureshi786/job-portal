import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import WebLayout from "../layouts/WebLayout";
import CRMLayout from "../layouts/CRMLayout";

// Website Imports
import Home from "../pages/Home";
import FindJob from "../pages/FindJob";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";

// Auth
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

// Company
import C_Dashboard from "../pages/company/Dashboard";

// Company Routes
const routesLinks = [
  {
    path: "dashboard",
    layout: <CRMLayout />,
    children: [{ path: "", element: <C_Dashboard /> }],
  },
];

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        {/* Website */}
        <Route path="/" element={<WebLayout />}>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="find-job" element={<FindJob />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>

        {routesLinks.map((route, index) => (
          <Route key={index} path={route.path} element={route.layout}>
            {route.children.map((child, idx) => (
              <Route key={idx} path={child.path} element={child.element} />
            ))}
          </Route>
        ))}

        
      </Routes>
    </BrowserRouter>
  );
}
