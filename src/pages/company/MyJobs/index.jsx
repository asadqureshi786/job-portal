import React from "react";
import DataTable from "react-data-table-component";
import TableHead from "../../../components/crm/TableHead";
import AddJob from "./AddJob";

// icons
import { FaEye } from "react-icons/fa";
import { HiOutlinePlusSmall } from "react-icons/hi2";

export default function index() {
  const rcStatusStyles = {
    Closed: "bg-red-800/20 text-red-500",
    Active: "bg-green-900/20 text-green-400",
  };
  // Recent Jobs Table Data
  const jobCol = [
    { name: "ID", selector: (row) => row.id, sortable: true, width: "70px" },
    { name: "Job Title", selector: (row) => row.jobTitle, sortable: true },
    { name: "Job Type", selector: (row) => row.jobType, minWidth: "300px" },
    { name: "Applicants", selector: (row) => row.applicants },
    { name: "Posted Date", selector: (row) => row.postedDate },
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
      jobTitle: "Aria Chen",
      jobType: "Engineering Lead",
      status: "Active",
      applicants: 10,
      postedDate: "2023-01-01",
    },
    {
      id: 2,
      jobTitle: "Marcus Webb",
      jobType: "Product Manager",
      status: "Closed",
      applicants: 5,
      postedDate: "2023-01-02",
    },
    {
      id: 3,
      jobTitle: "Sophia Williams",
      jobType: "UI/UX Designer",
      status: "Closed",
      applicants: 0,
      postedDate: "2023-01-03",
    },
    {
      id: 4,
      jobTitle: "Daniel Kim",
      jobType: "Frontend Developer",
      status: "Closed",
      applicants: 156,
      postedDate: "2023-01-04",
    },
    {
      id: 5,
      jobTitle: "Olivia Martinez",
      jobType: "Marketing Manager",
      status: "Active",
      applicants: 8,
      postedDate: "2023-01-05",
    },
    {
      id: 6,
      jobTitle: "Ethan Brown",
      jobType: "Backend Developer",
      status: "Active",
      applicants: 0,
      postedDate: "2023-01-06",
    },
    {
      id: 7,
      jobTitle: "Mia Anderson",
      jobType: "HR Specialist",
      status: "Active",
      applicants: 0,
      postedDate: "2023-01-07",
    },
    {
      id: 8,
      jobTitle: "Noah Wilson",
      jobType: "Full Stack Developer",
      status: "Active",
      applicants: 0,
      postedDate: "2023-01-08",
    },
    {
      id: 9,
      jobTitle: "Emma Davis",
      jobType: "Project Manager",
      status: "Active",
      applicants: 0,
      postedDate: "2023-01-09",
    },
    {
      id: 10,
      jobTitle: "Liam Thompson",
      jobType: "Software Engineer",
      status: "Active",
      applicants: 0,
      postedDate: "2023-01-10",
    },
  ];

  return (
    <>
      <TableHead
        title="My Jobs"
        subText="Manage and track your posted job listings."
      >
        <button className="header-btn primary">
          {" "}
          <span>
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
          fixedHeaderScrollHeight="400px"
        />
      </div>
    </>
  );
}
