import React from "react";

export default function Counter() {
  return (
    <section className="mt-15 bg-[linear-gradient(90deg,rgba(59,96,138,1)_0%,rgba(242,0,255,1)_100%)] relative overflow-hidden py-10" >
      <img src="/img/jar-bg.png" className="absolute bg-cover object-cover w-full h-full inset-0 opacity-20  invert-100 brightness-100 " />
      <div className="container relative z-1">
        <div className="grid grid-cols-3 py-20">
            <div className="text-center" >
                <h2 className="font-Rubik! text-4xl font-semibold text-white" >5M+</h2>
                <p className="text-base mt-2 text-white!" >Daily Jobs Posted</p>
            </div>
            <div className="text-center" >
                <h2 className="font-Rubik! text-4xl font-semibold text-white" >92 K+</h2>
                <p className="text-base mt-2 text-white!" >Recruiters</p>
            </div>
            <div className="text-center" >
                <h2 className="font-Rubik! text-4xl font-semibold text-white" >500+</h2>
                <p className="text-base mt-2 text-white!" >Freelancers</p>
            </div>
        </div>
      </div>
    </section>
  );
}
