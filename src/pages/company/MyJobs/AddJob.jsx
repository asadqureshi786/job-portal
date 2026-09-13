import React from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

// icons
import { IoCloseOutline } from "react-icons/io5";

export default function AddJob({ jobOpen, setJobOpen }) {
  return (
    <Dialog
      open={jobOpen}
      onClose={() => setJobOpen(false)}
      className="relative z-100 bg-red-500 "
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-10 backdrop-blur-lg">
        <DialogPanel
          transition
          className="relative transition-all 4xl:w-7xl w-full 4xl:h-fit h-fit space-y-4 border border-primary/20 rounded-xl bg-crmDarkbg2 px-9 py-6 data-closed:scale-0"
        >
          <div
            onClick={() => setJobOpen(false)}
            className="absolute -top-3 -right-5 bg-primary/20 hover:bg-primary/60 transition-all text-white text-xl border border-primary size-8 flex justify-center items-center rounded-lg cursor-pointer"
          >
            <IoCloseOutline />
          </div>
          <div className="crmForm">
            <div className="heading">
              <h2>Add Job</h2>
              <span>Create and publish a new job opening.</span>
            </div>
            <form>
              <div className="grid grid-cols-12">
                <div className="lg:col-span-4 col-span-12">
                  <div className="group">
                    <label>Job Title</label>
                    <input className="field" />
                  </div>
                </div>
                <div className="lg:col-span-4 col-span-12">
                  <div className="group">
                    <label>Job Category</label>
                    <input className="field" />
                  </div>
                </div>
                <div className="lg:col-span-4 col-span-12">
                  <div className="group">
                    <label>Job Type</label>
                    <input className="field" />
                  </div>
                </div>
                <div className="lg:col-span-4 col-span-12">
                  <div className="group">
                    <label>Workplace Type</label>
                    <input className="field" />
                  </div>
                </div>
                <div className="lg:col-span-8 col-span-12">
                  <div className="group">
                    <label>Location</label>
                    <input className="field" />
                  </div>
                </div>
                <div className="lg:col-span-2 col-span-12">
                  <div className="group">
                    <label>Experience Level</label>
                    <input className="field" />
                  </div>
                </div>
                <div className="lg:col-span-2 col-span-12">
                  <div className="group">
                    <label>Salary Min</label>
                    <input className="field" />
                  </div>
                </div>
                <div className="lg:col-span-2 col-span-12">
                  <div className="group">
                    <label>Salary Max</label>
                    <input className="field" />
                  </div>
                </div>
                <div className="lg:col-span-6 col-span-12">
                  <div className="group">
                    <label>Description</label>
                    <input className="field" />
                  </div>
                </div>
                <div className="lg:col-span-6 col-span-12">
                  <div className="group">
                    <label>Requirements</label>
                    <input className="field" />
                  </div>
                </div>
                <div className="lg:col-span-3 col-span-12">
                  <div className="group">
                    <label>Application Deadline</label>
                    <input className="field" />
                  </div>
                </div>
                <div className="lg:col-span-3 col-span-12">
                  <div className="group">
                    <label>Status</label>
                    <input className="field" />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="flex gap-4">
            <button onClick={() => setJobOpen(false)}>Cancel</button>
            <button onClick={() => setJobOpen(false)}>Deactivate</button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
