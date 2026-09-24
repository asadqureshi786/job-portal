import React from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import Select from 'react-select'

// icons
import { IoCloseOutline } from "react-icons/io5";

export default function AddApplicant({ open, setOpen }) {

  const jobCategory = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024,
  });

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="all_modal"
    >
      <div className="parent">
        <DialogPanel
          transition
          className="dialogPanel "
        >
          {/* <div
            onClick={() => setopen(false)}
            className="absolute -top-3 -right-5 bg-primary/20 hover:bg-primary/60 transition-all text-white text-xl border border-primary size-8 flex justify-center items-center rounded-lg cursor-pointer"
          >
            <IoCloseOutline />
          </div> */}
          <div className="crmForm">
            <div className="heading flex items-start justify-between">
              <div className="">
              <h2>Add Applicant</h2>
              <span className="small" >Add a new applicant and provide their details for the recruitment process.</span>
            </div>
               <div
            onClick={() => setOpen(false)}
            className=" bg-primary/40 hover:bg-primary/60  border border-primary  transition-all text-white text-xl size-8 flex justify-center items-center rounded-lg cursor-pointer"
          >
            <IoCloseOutline />
          </div>
            </div>
            <form>
              <div className="grid grid-cols-12">
                <div className="lg:col-span-7 col-span-12">
                  <div className="group">
                    <label>Candidate Name</label>
                    <input className="field" />
                  </div>
                </div>
                <div className="lg:col-span-5 col-span-12">
                  <div className="group react-select">
                    <label>Job Positions</label>
                    {/* <input className="field" /> */}
                    <Select options={jobCategory} className="custom-select" />
                  </div>
                </div>
                <div className="lg:col-span-4 col-span-12">
                  <div className="group">
                    <label>Applied Date</label>
                    <input type="date" className="field" />
                  </div>
                </div>
                <div className="lg:col-span-4 col-span-12">
                  <div className="react-select group">
                    <label>Status</label>
                    {/* <input className="field" /> */}
                    <Select options={jobCategory} className="custom-select" />
                  </div>
                </div>
                <div className="lg:col-span-4 col-span-12">
                  <div className="group">
                    <label>Mobile Number</label>
                    <input className="field" />
                  </div>
                </div>
                <div className="lg:col-span-12 col-span-12">
                  <div className="group">
                    <label>Mobile Number</label>
                    <div
                      {...getRootProps()}
                      className="border-2 border-dashed upload-drop-zone p-6 text-center cursor-pointer">
                      <input {...getInputProps()} />

                      <p>Drag & drop resume here, or click to select</p>

                      {acceptedFiles.map((file) => (
                        <p key={file.name} className="mt-2">
                          {file.name}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </form>
            
          <div className="modal-bottom">
            <button onClick={() => setOpen(false)} className="btn btn-secondary" >Close</button>
            <button onClick={() => setOpen(false)} className="btn btn-primary" >Add</button>
          </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
