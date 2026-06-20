import React from 'react'

export default function OtherWebBanner({heading,desc}) {
  return (
    <div className="other-web-banner mb-0!">
        <div className="container">
          <div className="lg:w-10/12 mx-auto flex flex-col items-center">
            <h1 className="section-heading o-banner-heading ">{heading}</h1>
            <p className="section-desc  text-center">
           {desc}
            </p>
          </div>
        </div>
        <div className="border-b dark:border-slate-900 border-slate-200 pt-15 pb-15"></div>
      </div>
  )
}
