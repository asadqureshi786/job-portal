import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import WebLayout from '../layouts/WebLayout';

// Website Imports
import Home from "../pages/Home";
import FindJob from '../pages/FindJob';



export default function router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<WebLayout/>}>
                <Route path='' element={<Home />}/>
                <Route path='home' element={<Home />}/>
                <Route path='find-job' element={<FindJob />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
