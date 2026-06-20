import React from "react";

export default function Contact() {
  return (
    <div className="other-web-banner">
      <div className="container">
        <div className="lg:w-10/12 mx-auto flex flex-col items-center">
          <h1 className="section-heading o-banner-heading ">Contact Us</h1>
          <p className="section-desc  text-center">
            Have questions or need assistance? Get in touch with our team and
            we'll be happy to help.
          </p>
        </div>
      </div>
      <div className="border-b dark:border-slate-900 border-slate-200 pt-15 pb-15"></div>
      <div className="container">
        <div className="grid grid-cols-2 mt-5">
         <div>
             <span className="text-sm text-black dark:text-darktext2" >Contact</span>
          <h2 className="text-6xl text-black dark:text-darktext1 font-Rubik">
            How can we help you
          </h2>
         </div>
        </div>
      </div>
    </div>
  );
}
