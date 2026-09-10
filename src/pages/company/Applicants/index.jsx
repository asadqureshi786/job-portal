import React from "react";
import DataTable from "react-data-table-component";
import TableHead from "../../../components/crm/TableHead";

// icons
import { FaEye } from "react-icons/fa";

export default function index() {
  const statusStyles = {
    "Under Review": "bg-blue-900/20 text-blue-400",
    Shortlisted: "bg-green-900/20 text-green-400",
    "Offers Sent": "bg-purple-900/20 text-purple-400",
    Rejected: "bg-red-900/20 text-red-400",
  };
  // Recent Applicaiton
  const ApplicationsColumns = [
    { name: "ID", selector: (row) => row.id, sortable: true, width: "70px" },
    {
      name: "Candidate",
      selector: (row) => (
        <>
          <div className="flex items-center gap-2">
            {/* <div className="size-6 bg-primary rounded-full" ></div> */}
            {row.candidate}
          </div>
        </>
      ),
      sortable: true,
    },
    { name: "Job Position", selector: (row) => row.role },
    { name: "Applied Date", selector: (row) => row.appliedDate },
    {
      name: "Status",
      selector: (row) => (
        <>
          <div>
            <span
              className={`${statusStyles[row.status] || ""} text-${row.status === "Under Review" ? "blue" : row.status === "Shortlisted" ? "green" : row.status === "Offers Sent" ? "Purple" : row.status === "Rejected" ? "red" : "orangre"}-700 px-3 py-0.5 flex justify-center items-center rounded-full text-xs`}
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

  const ApplicationsData = [
    {
      id: 1,
      candidate: "Aria Chen",
      role: "Engineering Lead",
      status: "Under Review",
      appliedDate: "2023-01-01",
    },
    {
      id: 2,
      candidate: "Marcus Webb",
      role: "Product Manager",
      status: "Shortlisted",
      appliedDate: "2023-01-02",
    },
    {
      id: 3,
      candidate: "Sophia Williams",
      role: "UI/UX Designer",
      status: "Rejected",
      appliedDate: "2023-01-03",
    },
    {
      id: 4,
      candidate: "Daniel Kim",
      role: "Frontend Developer",
      status: "Offers Sent",
      appliedDate: "2023-01-04",
    },
    {
      id: 5,
      candidate: "Olivia Martinez",
      role: "Marketing Manager",
      status: "Under Review",
      appliedDate: "2023-01-05",
    },
    {
      id: 6,
      candidate: "Ethan Brown",
      role: "Backend Developer",
      status: "Shortlisted",
      appliedDate: "2023-01-06",
    },
    {
      id: 7,
      candidate: "Mia Anderson",
      role: "HR Specialist",
      status: "Under Review",
      appliedDate: "2023-01-07",
    },
    {
      id: 8,
      candidate: "Noah Wilson",
      role: "Full Stack Developer",
      status: "Rejected",
      appliedDate: "2023-01-08",
    },
    {
      id: 9,
      candidate: "Emma Davis",
      role: "Project Manager",
      status: "Offers Sent",
      appliedDate: "2023-01-09",
    },
    {
      id: 10,
      candidate: "Liam Thompson",
      role: "Software Engineer",
      status: "Shortlisted",
      appliedDate: "2023-01-10",
    },
  ];

  return (
    <>
      <TableHead title="Applicants" subText="Manage and track Applicatns." >
        <button className="btn btn-primary">Add Jobs</button>
      </TableHead>
      <div className="tm-data-table">
        <DataTable
          columns={ApplicationsColumns}
          data={ApplicationsData}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="400px"
        />
      </div>
    </>
  );
}
