import React from "react";
import { useState } from 'react'

import DataTable from "react-data-table-component";
import TableHead from "../../../components/crm/TableHead";
import AddJob from "./AddJob";

// icons
import { FaEye } from "react-icons/fa";
import { HiOutlinePlusSmall } from "react-icons/hi2";

export default function index() {

  let [jobOpen, setJobOpen] = useState(false)

  const rcStatusStyles = {
    Closed: "bg-red-800/20 text-red-500",
    Active: "bg-green-900/20 text-green-400",
  };
  // Recent Jobs Table Data
  const jobCol = [
    { name: "ID", selector: (row) => row.id, sortable: true, width: "70px" },
    { name: "Job Title", selector: (row) => (
      <>
        {row.jobTitle}
        <p className="text-[12px] mt-1 dark:text-slate-400!" > {row.salaryMin}K  - {row.salaryMax}K </p>
       
      </>
    ), sortable: true , width: "250px" },
    { name: "Job Category", selector: (row) => 
    (
      <>
        {row.jobCategory} 
        <p className="text-[12px] mt-1 dark:text-slate-400!" > {row.workplaceType}  - {row.jobType} </p>
      </>
    ),
      minWidth: "200px" },
    { name: "Applicants", selector: (row) => row.applicants, minWidth: "150px" },
    { name: "Posted Date", selector: (row) => row.postedDate , minWidth: "150px"},
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
            <button className="action-box">
              <FaEye />
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
    jobTitle: "Senior Software Engineer",
    jobCategory: "Engineering",
    status: "Active",
    applicants: 10,
    postedDate: "2023-01-01",
    jobType: "Full Time",
    workplaceType: "Remote",
    salaryMin: 180,
    salaryMax: 300,
  },
  {
    id: 2,
    jobTitle: "Product Manager",
    jobCategory: "Product Management",
    status: "Closed",
    applicants: 5,
    postedDate: "2023-01-02",
    jobType: "Internship",
    workplaceType: "Onsite",
    salaryMin: 80,
    salaryMax: 120,
  },
  {
    id: 3,
    jobTitle: "UI/UX Designer",
    jobCategory: "Design",
    status: "Closed",
    applicants: 0,
    postedDate: "2023-01-03",
    jobType: "Part Time",
    workplaceType: "Hybrid",
    salaryMin: 60,
    salaryMax: 100,
  },
  {
    id: 4,
    jobTitle: "Frontend Developer",
    jobCategory: "Software Development",
    status: "Closed",
    applicants: 156,
    postedDate: "2023-01-04",
    jobType: "Full Time",
    workplaceType: "Onsite",
    salaryMin: 120,
    salaryMax: 200,
  },
  {
    id: 5,
    jobTitle: "Digital Marketing Manager",
    jobCategory: "Marketing",
    status: "Active",
    applicants: 8,
    postedDate: "2023-01-05",
    jobType: "Full Time",
    workplaceType: "Remote",
    salaryMin: 100,
    salaryMax: 180,
  },
  {
    id: 6,
    jobTitle: "Backend Developer",
    jobCategory: "Software Development",
    status: "Active",
    applicants: 0,
    postedDate: "2023-01-06",
    jobType: "Full Time",
    workplaceType: "Remote",
    salaryMin: 130,
    salaryMax: 220,
  },
  {
    id: 7,
    jobTitle: "HR Executive",
    jobCategory: "Human Resources",
    status: "Active",
    applicants: 0,
    postedDate: "2023-01-07",
    jobType: "Full Time",
    workplaceType: "Remote",
    salaryMin: 70,
    salaryMax: 110,
  },
  {
    id: 8,
    jobTitle: "Full Stack Developer",
    jobCategory: "Software Development",
    status: "Active",
    applicants: 0,
    postedDate: "2023-01-08",
    jobType: "Full Time",
    workplaceType: "Remote",
    salaryMin: 150,
    salaryMax: 250,
  },
  {
    id: 9,
    jobTitle: "Project Manager",
    jobCategory: "Project Management",
    status: "Active",
    applicants: 0,
    postedDate: "2023-01-09",
    jobType: "Full Time",
    workplaceType: "Remote",
    salaryMin: 120,
    salaryMax: 200,
  },
  {
    id: 10,
    jobTitle: "Software Engineer",
    jobCategory: "Engineering",
    status: "Active",
    applicants: 0,
    postedDate: "2023-01-10",
    jobType: "Full Time",
    workplaceType: "Remote",
    salaryMin: 100,
    salaryMax: 180,
  },
  {
    id: 11,
    jobTitle: "Junior Software Engineer",
    jobCategory: "Engineering",
    status: "Active",
    applicants: 0,
    postedDate: "2023-01-10",
    jobType: "Full Time",
    workplaceType: "Remote",
    salaryMin: 70,
    salaryMax: 120,
  },
];

  return (
    <>
      <TableHead
        title="My Jobs"
        subText="Manage and track your posted job listings."
      >
        <button className="header-btn primary"  onClick={() => setJobOpen(true)} >
          {" "}
          <span className="text-lg" >
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
    </>
  );
}
