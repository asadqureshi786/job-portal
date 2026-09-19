import React from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import Select from 'react-select'

// icons
import { IoCloseOutline } from "react-icons/io5";

export default function AddJob({ jobOpen, setJobOpen }) {

  const jobCategory = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

  return (
    <Dialog
      open={jobOpen}
      onClose={() => setJobOpen(false)}
      className="all_modal"
    >
      <div className="parent">
        <DialogPanel
          transition
          className="dialogPanel lg"
        >
          {/* <div
            onClick={() => setJobOpen(false)}
            className="absolute -top-3 -right-5 bg-primary/20 hover:bg-primary/60 transition-all text-white text-xl border border-primary size-8 flex justify-center items-center rounded-lg cursor-pointer"
          >
            <IoCloseOutline />
          </div> */}
          <div className="crmForm">
            <div className="heading flex items-start justify-between">
              <div className="">
              <h2>Add Job</h2>
              <span className="small" >Create and publish a new job opening.</span>
            </div>
               <div
            onClick={() => setJobOpen(false)}
            className=" bg-primary/40 hover:bg-primary/60  border border-primary  transition-all text-white text-xl size-8 flex justify-center items-center rounded-lg cursor-pointer"
          >
            <IoCloseOutline />
          </div>
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
                    {/* <input className="field" /> */}
                    <Select options={jobCategory} className="custom-select" />
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
            
          <div className="modal-bottom">
            <button onClick={() => setJobOpen(false)} className="btn btn-secondary" >Close</button>
            <button onClick={() => setJobOpen(false)} className="btn btn-primary" >Add</button>
          </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
