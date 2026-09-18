import React from "react";
import { useState } from "react";

import DataTable from "react-data-table-component";
import TableHead from "../../../components/crm/TableHead";
import AddJob from "./AddJob";
import JobView from "./JobView";

// icons
import { FaEye } from "react-icons/fa";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { VscEdit } from "react-icons/vsc";
import { IoTrashOutline } from "react-icons/io5";

export default function index() {
  let [jobOpen, setJobOpen] = useState(false);

  let [jobView, setJobView] = useState(false);

  const rcStatusStyles = {
    Closed: "bg-red-800/20 text-red-500",
    Active: "bg-green-900/20 text-green-400",
  };
  // Recent Jobs Table Data
  const jobCol = [
    { name: "ID", selector: (row) => row.id, sortable: true, width: "70px" },
    {
      name: "Job Title",
      selector: (row) => (
        <>
          {row.jobTitle}
          <p className="text-[12px] mt-1 dark:text-slate-400!">
            {" "}
            {row.salaryMin}K - {row.salaryMax}K{" "}
          </p>
        </>
      ),
      sortable: true,
      width: "250px",
    },
    {
      name: "Job Category",
      selector: (row) => (
        <>
          {row.jobCategory}
          <p className="text-[12px] mt-1 dark:text-slate-400!">
            {" "}
            {row.workplaceType} - {row.jobType}{" "}
          </p>
        </>
      ),
      minWidth: "200px",
    },
    {
      name: "Applicants",
      selector: (row) => row.applicants,
      minWidth: "150px",
    },
    {
      name: "Posted Date",
      selector: (row) => row.postedDate,
      minWidth: "150px",
    },
    {
      name: "Status",
      selector: (row) => (
        <>
          <div>
            <span
              className={` ${rcStatusStyles[row.status] || "bg-gray-900 text-gray-400"} px-3 py-0.5 flex justify-center items-center rounded-full text-xs`}
            >
              {row.status}
            </span>
          </div>
        </>
      ),
    },
    {
      name: "Actions",
      selector: (row) => (
        <>
          <div>
            <button onClick={()=> setJobView(true) } className="action-box">
              <FaEye />
            </button>
            <button className="action-box edit">
              <VscEdit />
            </button>
            <button className="action-box delete">
              <IoTrashOutline />
            </button>
          </div>
        </>
      ),
      width: "150px",
    },
  ];
  const jobData = [
    {
      id: 1,
      logo: "/img/c_logo/google.png",
      location: "New York, USA",
      jobTitle: "Senior Software Engineer",
      jobCategory: "Engineering",
      status: "Active",
      applicants: 10,
      postedDate: "2023-01-01",
      jobType: "Full Time",
      workplaceType: "Remote",
      salaryMin: 180,
      salaryMax: 300,
      rating: "2.5",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      requirement : ['HTML','React.js','Vue.js'],
      
    },
    {
      id: 2,
      logo: "/img/c_logo/google.png",
      location: "New York, USA",
      jobTitle: "Product Manager",
      jobCategory: "Product Management",
      status: "Closed",
      applicants: 5,
      postedDate: "2023-01-02",
      jobType: "Internship",
      workplaceType: "Onsite",
      salaryMin: 80,
      salaryMax: 120,
      rating: "2.5",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      requirement : ['HTML','React.js','Vue.js'],

    },
   
  ];

  return (
    <>
      <TableHead
        title="My Jobs"
        subText="Manage and track your posted job listings."
      >
        <button className="header-btn primary" onClick={() => setJobOpen(true)}>
          {" "}
          <span className="text-lg">
            <HiOutlinePlusSmall />
          </span>{" "}
          Add Jobs
        </button>
      </TableHead>
      <div className="tm-data-table">
        <DataTable
          columns={jobCol}
          data={jobData}
          pagination
          fixedHeader
          // fixedHeaderScrollHeight="500px"
        />
      </div>
      <AddJob jobOpen={jobOpen} setJobOpen={setJobOpen} />
      <JobView data={jobData[0]} jobView={jobView} setJobView={setJobView} />
    </>
  );
}
