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
import C_MyJobs from "../pages/company/MyJobs/index";
import C_Applicants from "../pages/company/Applicants/index";
import C_CompanyProfile from "../pages/company/CompanyProfile/index";

// Company Routes
const routesLinks = [
  {
    path: "",
    layout: <CRMLayout />,
    children: [
      { path: "/dashboard", element: <C_Dashboard /> },
      { path: "/jobs", element: <C_MyJobs /> },
      { path: "/applicants", element: <C_Applicants /> },
      { path: "/company-profile", element: <C_CompanyProfile /> }
    ],
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
