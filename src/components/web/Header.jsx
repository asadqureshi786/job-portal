import { useState } from "react";
import { NavLink } from "react-router";
import { useLocation } from 'react-router'

// Icons
import { HiOutlineBellAlert } from "react-icons/hi2";
import { RxHamburgerMenu, RxCross2  } from "react-icons/rx";


export default function Header() {

  let location = useLocation().pathname
  const isHidden = location === '/' || location === '/home';
  const menuItems = [
    {
      title: "Home",
      utl: "/",
    },
    {
      title: "Find Job",
      utl: "find-job",
    },
    {
      title: "Resources",
      utl: "#",
    },
    {
      title: "Blogs",
      utl: "#",
    },
    {
      title: "Contact Us",
      utl: "#",
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className="py-6 absolute mx-auto w-full top-0 lg:block hidden bg-red-white dark:bg-black ">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-30">
              <a href="" className="logo text-[30px] ">
                <span className="font-bold dark:text-white ">Hire</span>
                <span className="text-primary ">Akho.</span>
              </a>
              <ul className="flex items-center gap-8 [&_a]:text-base [&_a]:hover:text-primary font-normal text-slate-800 dark:text-slate-200 [&_a]:transition-all ">
                {menuItems.map((item, index) => (
                  <li>
                    <NavLink to={item.utl}> {item.title} </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-5 relative z-99">
              <button className="text-base hover:text-primary font-normal text-white transition-all cursor-pointer">
                Join Now
              </button>
              <div className="bg-white/50 p-1 rounded-full">
                <button className="btn btn-primary font-medium cursor-pointer text-primary bg-white hover:bg-primary hover:text-white transition-all px-6 py-1.5 rounded-full">
                  Hire Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={` ${ !isHidden && 'hidden' } z-1 bg-[linear-gradient(164deg,rgba(160,83,237,1)_0%,rgba(160,83,237,0.49)_28%,rgba(160,83,237,1)_54%,rgba(160,83,237,0.5)_100%)] absolute top-4 4xl:min-h-[87.5vh] min-h-[calc(100dvh-16px)] right-6 w-lg  rounded-t-4xl`}>
          <div className="absolute bottom-0  -left-25">
            <img
              src="/img/banner-man-glow-update.png"
              className="w-[70%] h-[90%] 4xl:w-[72%] object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-white/100 dark:to-black/100"></div>
            <div className="w-fit border-2  bg-white/60 dark:bg-darkbg1 dark:border-slate-700 border-white  text-center absolute top-1/2 -translate-y-1/2 rounded-[20px] left-70 p-4 pb-3.5">
              <p className="font-medium leading-4.5 dark:text-gray-200">
                Create <span className="text-blue-700">Free</span>
                <br className="lg:block hidden" />
                Resume
              </p>
              <button className="text-xs bg-white hover:bg-primary hover:text-white rounded-full px-4 py-1 mt-2 cursor-pointer">
                Create
              </button>
            </div>
            <div className="w-fit  border-2 animate-bounce bg-white/60 dark:bg-darkbg1  border-white dark:border-slate-700 text-center absolute bottom-0 -translate-y-1/2 rounded-[20px] left-70 px-4 p-2 pb-2">
              <p className="font-medium leading-4.5 flex items-center gap-2">
                <span className="flex justify-center items-center bg-orange-400 rounded-full text-white w-fit p-1.5 text-lg">
                  <HiOutlineBellAlert />
                </span>
                <span className="dark:text-gray-200"  >Job available</span>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}

      <div className="lg:hidden block">
        <header className="py-4 absolute mx-auto w-full top-0 right-0">
          <div className="container">
            <div className="flex items-center justify-between relative">
              <a href="" className="logo text-[30px] ">
                <span className="font-bold ">Hire</span>
                <span className="text-primary ">Akho.</span>
              </a>
              <button
                type="button"
                onClick={() => setOpenMenu(!openMenu)}
                className="text-2xl cursor-pointer transition-all hover:text-primary"
              >
                { !openMenu ? <RxHamburgerMenu /> : <RxCross2 /> }

              </button>

              <div
                className={` ${openMenu ? "max-h-100 overflow-auto" : "max-h-0 overflow-hidden"} transition-all duration-500 absolute shadow-[0px_50px_500px_gray] top-14 bg-primary  rounded-lg left-0 w-full  z-99`}
              >
                <ul className="flex items-start flex-col gap-4 py-6 px-5 [&_a]:text-base [&_a]:hover:text-slate-300 font-normal text-white [&_a]:transition-all ">
                  {menuItems.map((item, index) => (
                    <li>
                      <a href="">{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>


      
    </>
  );
}
