import { useState } from "react";
import DataTable from "react-data-table-component";
import TableHead from "../../../components/crm/TableHead";
import AddApplicant from "./AddApplicant";
// icons
import { FaEye } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { BsDownload } from "react-icons/bs";
import { HiOutlinePlusSmall } from "react-icons/hi2";

export default function index() {
  let [appOpen, setAppOpen] = useState(false);

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
      name: "Resume",
      selector: (row) => (
        <>
          <a
            className="text-white font-semibold underline flex items-center gap-2"
            href="download"
          >
            {row.resume}
            <span className="text-base!">
              <BsDownload />
            </span>
          </a>
        </>
      ),
    },
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
            <button onClick={() => setJobView(true)} className="action-box">
              <FaEye />
            </button>
            <button
              onClick={() => setRemove(true)}
              className="action-box delete"
            >
              <IoTrashOutline />
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
      resume: "Asad CV",
    },
  ];

  return (
    <>
      <TableHead title="Applicants" subText="Manage and track Applicatns.">
        <button className="header-btn primary" onClick={() => setAppOpen(true)}>
          {" "}
          <span className="text-lg">
            <HiOutlinePlusSmall />
          </span>{" "}
          Add Applicant
        </button>
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
      <AddApplicant open={appOpen} setOpen={setAppOpen} />
    </>
  );
}
