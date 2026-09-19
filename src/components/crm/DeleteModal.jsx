import React from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { AnimatePresence, motion } from "motion/react";

// icons
import { IoCloseOutline } from "react-icons/io5";
import { CiWarning } from "react-icons/ci";
import { GoTrash } from "react-icons/go";

export default function DeleteModal({ remove, setRemove }) {
  return (
    <AnimatePresence>
      {remove && (
        <Dialog
          open={remove}
          onClose={() => setRemove(false)}
          className="all_modal"
        >
          <motion.div
                initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=""
          >
            <div className="parent">
              <DialogPanel
               as={motion.div}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                className="dialogPanel 4xl:max-w-3xl max-w-xl lg "
              >
                <div className="crmForm 4xl:pt-3! 4xl:pb-1! py-3!">
                  <span className="flex justify-center 4xl:text-5xl! text-4xl! bg-red-800/20 4xl:p-5 p-4 mb-3 mx-auto rounded-full w-fit h-fit text-red-500 ">
                    <GoTrash />
                  </span>
                  <div className="heading m-0! p-0! text-center border-0!">
                    <div className="text-center">
                      <h2 className="4xl:text-4xl! text-3xl! 4xl:leading-[45px]! leading-[40px]">
                        Are your sure your want to <br /> delete this?
                      </h2>
                    </div>
                    {/* <div
            onClick={() => setJobOpen(false)}
            className=" bg-primary/40 hover:bg-primary/60  border border-primary  transition-all text-white text-xl size-8 flex justify-center items-center rounded-lg cursor-pointer"
          >
            <IoCloseOutline />
          </div> */}
                  </div>

                  <div className="modal-bottom mt-7!">
                    <button
                      onClick={() => setRemove(false)}
                      className="btn btn-secondary w-full 4xl:py-2!"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setRemove(false)}
                      className="btn btn-primary w-full 4xl:py-2!"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
