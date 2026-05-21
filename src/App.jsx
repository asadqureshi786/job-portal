import { useState } from "react";
import "./App.css";
import "./assets/css/style.scss";

import Header from "./components/layouts/landingPage/Header";
import Footer from "./components/layouts/landingPage/Footer";
import Banner from "./components/web/Banner";

import { MdStar } from "react-icons/md";

function App() {
  return (
    <>
      <Header />
      <div className="main_wrapper mt-21.5 [&_p]:text-gray-600">
        <Banner />
        <div className="container my-15">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-base">
                <span className="font-medium text-primary!">&gt;100K+</span>{" "}
                <span className="font-semibold text-black!">People Join</span>
              </p>
              <div className="flex items-center [&_img]:rounded-full [&_img]:size-10 mt-3">
                <img
                  src="/img/users/user1.jpg"
                  className="border-2 border-white"
                />
                <img
                  src="/img/users/user2.png"
                  className="relative -left-3 border-2 border-white"
                />
                <img
                  src="/img/users/user3.png"
                  className="relative -left-6 border-2 border-white"
                />
                <img
                  src="/img/users/user4.png"
                  className="relative -left-9 border-2 border-white"
                />
              </div>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-black text-sm font-medium">5.0</span>
                <div className="flex items-center gap-1 text-yellow-500" >
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-8" >
              <div className="bg-slate-100 rounded-md p-5 text-center">
                <p className="text-black! text-4xl font-medium" >86 <span className="text-primary" >M+</span></p>
                <p className="text-base" >Availbale Jobs</p>
              </div>
              <div>
                <h2 className="text-gray-780 text-xl font-medium">Where Diversity Aligns <br className="lg:block hidden" /> with Possibilites</h2>
                <a className="text-primary font-medium mt-1.5 inline-block" >&gt;Browse your experties</a>
              </div>
              <img src='/img/users/user1.jpg' className="rounded-[30px]" />
            </div>
          </div>
        </div>

        {/* Trusted Section Start */}
        <div className="container">
          <h2 className="text-xl font-medium text-center">Trusted <span className="text-primary" >1000+</span> company find best jobseeker</h2>
          <div className="flex items-center justify-between gap-5">
            <img src="/img/logos/1.svg" className="w-25 filter grayscale" />
            <img src="/img/logos/8.svg" className="w-25 filter grayscale" />
            <img src="/img/logos/3.svg" className="w-25 filter grayscale" />
            <img src="/img/logos/4.svg" className="w-25 filter grayscale" />
            <img src="/img/logos/5.svg" className="w-25 filter grayscale" />
            <img src="/img/logos/9.svg" className="w-25 filter grayscale" />
          </div>
        </div>
        {/* Trusted Section End */}
      </div>
      <Footer />
    </>
  );
}

export default App;
