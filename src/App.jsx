import { useState } from 'react'
import './App.css'
import './assets/css/style.scss'

import Header from './components/layouts/landingPage/Header'
import Footer from './components/layouts/landingPage/Footer'
import Banner from './components/web/Banner'

function App() {

  return (
    <>
      <Header/>
      <div className="main_wrapper mt-21.5">
        <Banner/>
      </div>
      <Footer/>
    </>
  )
}

export default App
