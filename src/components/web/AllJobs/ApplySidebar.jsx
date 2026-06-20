import React from "react";
import { FaStar } from "react-icons/fa6";
import { GoClock } from "react-icons/go";

import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function ApplySidebar({ data }) {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="btn apply-now-btn">
        Apply Now
      </button>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 bg-black/50 backdrop-blur-[5px] transition-opacity">
          <div className="fixed inset-0 z-10  w-screen overflow-y-auto">
            <div className=" fixed inset-y-0 right-0 flex max-w-full  pl-10">
              <DialogPanel
                transition
                className="w-full max-w-md  bg-white dark:bg-darkbg1 border-l overflow-auto border-slate-700 4xl:min-w-[25vw] min-w-[35vw] p-6 backdrop-blur-2xl duration-300 ease-out data-closed:translate-x-125 data-closed:opacity-0"
              >
                <div className="flex items-center gap-5 sticky">
                  <div className="bg-gray-100 dark:bg-black dark:group-hover:bg-darkbg1 rounded-xl p-4 flex justify-center items-center">
                    <img src={data.logo} className="company-logo w-10" />
                  </div>
                  <div>
                    <p className="4xl:text-lg text-base font-semibold text-black! dark:text-darktext1!">
                      {data.name}
                    </p>
                    <p className="lg:text-base font-normal text-slate-500! relative bottom-[1px] py-0.5">
                      {data.location}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">
                        <FaStar />
                      </span>
                      <p className="lg:text-sm font-normal text-slate-500!">
                        {data.rating}K reviews
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 bg-darkbg1 w-full text-center py-2 btn apply-now-btn ">
                  <Button className="" onClick={close}>
                    Apply Now
                  </Button>
                </div>

                {/* <DialogTitle
                  as="h3"
                  className="text-2xl font-Rubik! font-medium text-white"
                >
                  {data.title}
                </DialogTitle> */}

                <div className="mt-5">
                  <h3 className="font-Rubik! 4xl:text-[22px] text-lg font-semibold text-gray-600 dark:text-darktext1">
                    {data.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-4 mt-2">
                    <div className="border border-sky-300 dark:border-slate-700 dark:bg-darkbg1 rounded-md w-fit text-xs text-sky-600  bg-sky-100 px-2 py-0.5">
                      <span>Type :</span> {data.type}
                    </div>
                    <div className="flex items-center gap-2 border border-gray-300 dark:border-slate-700 dark:bg-darkbg1 rounded-md w-fit text-xs text-slate-500  bg-gray-100 px-2 py-0.5">
                      <span>
                        <GoClock />
                      </span>
                      {data.posted_time}
                    </div>
                  </div>
                  <p className="lg:text-[15px] font-normal text-slate-600! dark:text-darktext1! leading-5.5 mt-1.5">
                    {data.desc}
                  </p>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
