import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import WebLayout from '../layouts/WebLayout';

// Website Imports
import Home from "../pages/Home";
import FindJob from '../pages/FindJob';
import Contact from '../pages/Contact';
import Blogs from '../pages/Blogs';

// Auth
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'


// Company



// CRM Imports

export default function router() {
  return (
    <BrowserRouter>
        <Routes>

            {/* Auth */}
            <Route path='register' element={<Register />}/>
            <Route path='login' element={<Login />}/>

            {/* Website */}
            <Route path='/' element={<WebLayout/>}>
                <Route path='' element={<Home />}/>
                <Route path='home' element={<Home />}/>
                <Route path='find-job' element={<FindJob />}/>
                <Route path='contact' element={<Contact />}/>
                <Route path='blogs' element={<Blogs />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
