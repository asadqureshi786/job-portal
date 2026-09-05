import React from "react";
import { useState } from "react";
// icons
import { FaBriefcase } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import DataTable from 'react-data-table-component';


import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";



export default function Dashboard() {
  const [totalJobs, setTotalJobs] = useState([
    {
      title: "Total Jobs",
      icon: <FaBriefcase />,
      count: 20,
      iconColor: "text-blue-500 bg-blue-100 dark:bg-gray-800",
    },
    {
      title: "Active Jobs",
      icon: <FaBriefcase />,
      count: 4,
      iconColor: "text-green-500 bg-green-100 dark:bg-gray-800",
    },
    {
      title: "Closed Jobs",
      icon: <FaRegClock />,
      count: 16,
      iconColor: "text-orange-500 bg-orange-100 dark:bg-gray-800",
    },
    {
      title: "Total Applicants",
      icon: <MdPeopleAlt />,
      count: 156,
      iconColor: "text-purple-500 bg-purple-100 dark:bg-gray-800",
    },
  ]);

  const [applicationOverview, setApplicationOverview] = useState([
    {
      title: "New Applications",
      icon: <FaBriefcase />,
      count: 12,
      iconColor: "text-blue-500 bg-blue-100 dark:bg-gray-800",
    },
    {
      title: "Under Review",
      icon: <FaBriefcase />,
      count: 18,
      iconColor: "text-green-500 bg-green-100 dark:bg-gray-800",
    },
    {
      title: "Shortlisted",
      icon: <FaRegClock />,
      count: 4,
      iconColor: "text-orange-500 bg-orange-100 dark:bg-gray-800",
    },
    {
      title: "Offers Sent",
      icon: <MdPeopleAlt />,
      count: 156,
      iconColor: "text-purple-500 bg-purple-100 dark:bg-gray-800",
    },
  ]);

  const rcStatusStyles = {
    "Closed": "bg-red-800/20 text-red-500",
    "Active": "bg-green-900/20 text-green-400",
  };
  // Recent Jobs Table Data
  const recentJobsColumns = [
  { name: 'ID', selector: row => row.id, sortable: true, width: '70px', },
  { name: 'Job Title', selector: row => row.jobTitle, sortable: true },
  { name: 'Job Type', selector: row => row.jobType, minWidth: '300px', },
  { name: 'Applicants', selector: row => row.applicants,  },
  { name: 'Posted Date', selector: row => row.postedDate,  },
  { name: 'Status', selector: row => (
    <>
  <div>
      <span className={` ${rcStatusStyles[row.status] || 'bg-gray-900 text-gray-400'} px-3 py-0.5 flex justify-center items-center rounded-full text-xs`}>
        {row.status}
        </span>
    </div>
    </>
  ) },
  { name: 'Actions', selector: row => (
    <>
    <div>
      <button className="action-box"><FaEye/></button>
    </div>
    </>
  ),width: '150px' },
    ];

    const recentJobsData = [
      {
        id: 1,
        jobTitle: 'Aria Chen',
        jobType: 'Engineering Lead',
        status: 'Active',
        applicants: 10,
        postedDate: '2023-01-01'
      },
      {
        id: 2,
        jobTitle: 'Marcus Webb',
        jobType: 'Product Manager',
        status: 'Closed',
        applicants: 5,
        postedDate: '2023-01-02'
      },
      {
        id: 3,
        jobTitle: 'Sophia Williams',
        jobType: 'UI/UX Designer',
        status: 'Closed',
        applicants: 0,
        postedDate: '2023-01-03'
      },
      {
        id: 4,
        jobTitle: 'Daniel Kim',
        jobType: 'Frontend Developer',
        status: 'Closed',
        applicants: 156,
        postedDate: '2023-01-04'
      },
      {
        id: 5,
        jobTitle: 'Olivia Martinez',
        jobType: 'Marketing Manager',
        status: 'Active',
        applicants: 8,
        postedDate: '2023-01-05'
      },
      {
        id: 6,
        jobTitle: 'Ethan Brown',
        jobType: 'Backend Developer',
        status: 'Active',
        applicants: 0,
        postedDate: '2023-01-06'
      },
      {
        id: 7,
        jobTitle: 'Mia Anderson',
        jobType: 'HR Specialist',
        status: 'Active',
        applicants: 0,
        postedDate: '2023-01-07'
      },
      {
        id: 8,
        jobTitle: 'Noah Wilson',
        jobType: 'Full Stack Developer',
        status: 'Active',
        applicants: 0,
        postedDate: '2023-01-08'
      },
      {
        id: 9,
        jobTitle: 'Emma Davis',
        jobType: 'Project Manager',
        status: 'Active',
        applicants: 0,
        postedDate: '2023-01-09'
      },
      {
        id: 10,
        jobTitle: 'Liam Thompson',
        jobType: 'Software Engineer',
        status: 'Active',
        applicants: 0,
        postedDate: '2023-01-10'
      }
    ];


const statusStyles = {
  "Under Review": "bg-blue-900/20 text-blue-400",
  "Shortlisted": "bg-green-900/20 text-green-400",
  "Offers Sent": "bg-purple-900/20 text-purple-400",
  "Rejected": "bg-red-900/20 text-red-400",
};
// Recent Applicaiton
 const ApplicationsColumns = [
 { name: 'ID', selector: row => row.id, sortable: true, width: '70px', },
  { name: 'Candidate', selector: row => (
    <>
      <div className="flex items-center gap-2">
        {/* <div className="size-6 bg-primary rounded-full" ></div> */}
        {row.candidate}
      </div>
    </>
  ), sortable: true },
  { name: 'Job Position', selector: row => row.role },
  { name: 'Applied Date', selector: row => row.appliedDate,  },
  { name: 'Status', selector: row => (
    <>
     <div>
      <span className={`${ statusStyles[row.status] || ""} text-${row.status === 'Under Review' ? 'blue' : row.status === 'Shortlisted' ? 'green' : row.status === 'Offers Sent' ? "Purple" :  row.status === 'Rejected' ? 'red' : 'orangre'}-700 px-3 py-0.5 flex justify-center items-center rounded-full text-xs`}>
        {row.status}
        </span>
    </div>
    </>
  ) },
  { name: 'Actions', selector: row => (
    <>
    <div>
      <button className="action-box"><FaEye/></button>
    </div>
    </>
  ),width: '150px' },
];

const ApplicationsData = [
    {
        id: 1,
        candidate: 'Aria Chen',
        role: 'Engineering Lead',
        status: 'Under Review',
        appliedDate: '2023-01-01'
      },
      {
        id: 2,
        candidate: 'Marcus Webb',
        role: 'Product Manager',
        status: 'Shortlisted',
        appliedDate: '2023-01-02'
      },
      {
        id: 3,
        candidate: 'Sophia Williams',
        role: 'UI/UX Designer',
        status: 'Rejected',
        appliedDate: '2023-01-03'
      },
      {
        id: 4,
        candidate: 'Daniel Kim',
        role: 'Frontend Developer',
        status: 'Offers Sent',
        appliedDate: '2023-01-04'
      },
      {
        id: 5,
        candidate: 'Olivia Martinez',
        role: 'Marketing Manager',
        status: 'Under Review',
        appliedDate: '2023-01-05'
      },
      {
        id: 6,
        candidate: 'Ethan Brown',
        role: 'Backend Developer',
        status: 'Shortlisted',
        appliedDate: '2023-01-06'
      },
      {
        id: 7,
        candidate: 'Mia Anderson',
        role: 'HR Specialist',
        status: 'Under Review',
        appliedDate: '2023-01-07'
      },
      {
        id: 8,
        candidate: 'Noah Wilson',
        role: 'Full Stack Developer',
        status: 'Rejected',
        appliedDate: '2023-01-08'
      },
      {
        id: 9,
        candidate: 'Emma Davis',
        role: 'Project Manager',
        status: 'Offers Sent',
        appliedDate: '2023-01-09'
      },
      {
        id: 10,
        candidate: 'Liam Thompson',
        role: 'Software Engineer',
        status: 'Shortlisted',
        appliedDate: '2023-01-10'
      }
];

  return (
    <>
      <div className="dark:text-white">
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Job Overview</h2>
          <ul className="grid lg:grid-cols-4 grid-cols-1 gap-5 mb-3">
            {totalJobs.map((item, index) => (
              <li className="card relative flex items-center gap-5 border border-primary/15! px-5! pt-4! pb-4!">
                {/* <div className='absolute top-0 left-0 w-[150px] h-[1px] bg-gradient-to-l from-transparent via-white to-transparent animate-border-beams' ></div> */}
                <div className="flex items-center gap-3">
                  <div
                    className={`flex gap-3  ${item.iconColor} ${item.iconColor} size-10 flex items-center justify-center rounded-full text-lg`}
                  >
                    {item.icon}
                  </div>
                </div>
                <div>
                  <p className=" 4xl:text-3xl text-2xl font-medium ">
                    {item.count}+
                  </p>
                  <span className="text-gray-500 text-xs font-noraml whitespace-nowrap uppercase">
                    {item.title}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="text-lg font-semibold">Application Pipeline</h2>

          <ul className="grid lg:grid-cols-4 grid-cols-1 gap-5">
            {applicationOverview.map((item, index) => (
              <li className="card relative flex items-center gap-5 border border-primary/15! px-5! pt-4! pb-4!">
                {/* <div className='absolute top-0 left-0 w-[150px] h-[1px] bg-gradient-to-l from-transparent via-white to-transparent animate-border-beams' ></div> */}
                <div className="flex items-center gap-3">
                  <div
                    className={`flex gap-3  ${item.iconColor} ${item.iconColor} size-10 flex items-center justify-center rounded-full text-lg`}
                  >
                    {item.icon}
                  </div>
                </div>
                <div>
                  <p className=" 4xl:text-3xl text-2xl font-medium ">
                    {item.count}+
                  </p>
                  <span className="text-gray-500 text-xs font-noraml whitespace-nowrap uppercase">
                    {item.title}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recent Section */}
      <div className=" mt-8  pt-0 pb-4">
          <TabGroup className="">
        <TabList className="card flex gap-4 text-white  rounded-lg">
          <Tab className="text-[15px] cursor-pointer py-3 px-5 flex border-b border-transparent w-full justify-center items-center gap-3 rounded-lg   font-nomral  bg-crmDarkbg1   focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-selected:text-green-600 data-selected:border-b data-selected:border-green-600 data-selected:bg-green-800/30 ">
            <span className="text-base" ><IoCheckmarkCircleOutline/></span> Recent Jobs
          </Tab>
          <Tab className="text-[15px] cursor-pointer py-3 px-5 flex border-b border-transparent w-full justify-center items-center gap-3 rounded-lg   font-nomral  bg-crmDarkbg1   focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-selected:text-green-600 data-selected:border-b data-selected:border-green-600 data-selected:bg-green-800/30 ">
            <span className="text-base" ><IoCheckmarkCircleOutline/></span> Recent Applications
          </Tab>
        </TabList>
         <div className="rounded-[16px] overflow-hidden mt-2">
             <TabPanels className=" text-white">
          <TabPanel> 
            <div className="tm-data-table">
            <DataTable columns={recentJobsColumns} data={recentJobsData} pagination  
            fixedHeader
            fixedHeaderScrollHeight="400px"
             />
            </div>
          </TabPanel>
          <TabPanel> 
             <div className="tm-data-table">
            <DataTable columns={ApplicationsColumns} data={ApplicationsData} pagination  
            fixedHeader
            fixedHeaderScrollHeight="400px"
             />
            </div>
          </TabPanel>
        </TabPanels>
         </div>
      </TabGroup>
      </div>
    </>
  );
}
