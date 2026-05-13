import React from "react";

export default function Header() {
  return (
    <header className="py-6 absolute mx-auto w-full top-0">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-30">
            <a href="" className="logo text-[30px]">
              <span className="font-bold">Hire</span>
              <span className="text-primary">Akho.</span>
            </a>
            <ul className="flex items-center gap-8 [&_a]:text-base [&_a]:hover:text-primary font-normal text-slate-800 [&_a]:transition-all ">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Find Job</a>
              </li>
              <li>
                <a href="">Resources</a>
              </li>
              <li>
                <a href="">Blogs</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-5 relative z-1">
            <button className="text-base hover:text-primary font-normal text-white! transition-all cursor-pointer">
              Join Now
            </button>
            <div className="bg-white/50 p-1 rounded-full">
              <button className="btn btn-primary font-medium cursor-pointer text-primary bg-white px-6 py-1.5 rounded-full">
                Hire Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="z-1  bg-[linear-gradient(164deg,rgba(160,83,237,1)_0%,rgba(160,83,237,0.49)_28%,rgba(160,83,237,1)_54%,rgba(160,83,237,0.5)_100%)] absolute top-4 4xl:min-h-[70vh] min-h-[calc(100dvh-16px)] right-6 w-lg  rounded-t-4xl">
        {/* h-[calc(100dvh-28px)] */}
        <div className="absolute bottom-0  -left-25">
          <img
            src="/img/banner-man-glow-update.png"
            className="w-[70%] h-[90%] 4xl:w-[72%] object-cover"
          />
          <div className="w-fit border-2 bg-white/60 border-white text-center absolute top-1/2 -translate-y-1/2 rounded-[20px] left-70 p-4 pb-3.5">
            <p className="font-medium leading-4.5">
              Create <span className="text-blue-700">Free</span>
              <br className="lg:block hidden" />
              Resume
            </p>
            <button className="text-xs bg-white hover:bg-primary hover:text-white rounded-full px-4 py-1 mt-2 cursor-pointer">
              Create
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
