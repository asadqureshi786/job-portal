import React from "react";
import { GoCheck } from "react-icons/go";
export default function SideFilter() {

  const expLevel = [
    "Internship",
    "Entry level",
    "Associate",
    "Mid-Senior level",
    "Director",
    "Executive",
  ];

   const jobCategories = [
    { id: 1, name: "Software Development", slug: "software-development" },
    { id: 2, name: "Web Development", slug: "web-development" },
    { id: 3, name: "Mobile App Development", slug: "mobile-app-development" },
    { id: 4, name: "UI/UX Design", slug: "ui-ux-design" },
    { id: 5, name: "Graphic Design", slug: "graphic-design" },
    { id: 6, name: "Digital Marketing", slug: "digital-marketing" },
    { id: 7, name: "SEO Specialist", slug: "seo-specialist" },
    { id: 8, name: "Content Writing", slug: "content-writing" },
    { id: 9, name: "Data Science", slug: "data-science" },
    { id: 10, name: "Data Analyst", slug: "data-analyst" },
    { id: 11, name: "Cyber Security", slug: "cyber-security" },
    { id: 12, name: "DevOps Engineer", slug: "devops-engineer" },
    { id: 13, name: "Project Management", slug: "project-management" },
    { id: 14, name: "Customer Support", slug: "customer-support" },
    { id: 15, name: "Sales & Marketing", slug: "sales-marketing" },
    { id: 16, name: "Human Resources", slug: "human-resources" },
    { id: 17, name: "Finance & Accounting", slug: "finance-accounting" },
    { id: 18, name: "Business Analyst", slug: "business-analyst" },
    { id: 19, name: "AI / Machine Learning", slug: "ai-machine-learning" },
    { id: 20, name: "Quality Assurance (QA)", slug: "quality-assurance" }
  ];
  return (
    <div className="h-dvh w-full bg-slate-200/50 dark:bg-darkbg1 sticky top-0 rounded-xl p-4">
      <div className="flex justify-between items-center mb-7">
        <p className="text-sm">Filters</p>
        <a href="#" className="text-primary text-sm">
          Clear All
        </a>
      </div>

      <div className="side-filter webkit-scroll h-[calc(100vh-14vh)] overflow-auto">
        <div className="parent">
          <p className="p-head">Sort By</p>
          <ul className="list">
            <li className="item radio-to grid">
              <label>
                <input type="radio" name="sort by" />
                <div></div>
                Most recent
              </label>
              <label>
                <input type="radio" name="sort by" />
                <div></div>
                Most relevant
              </label>
            </li>
          </ul>
        </div>
        <div className="parent">
          <p className="p-head">Date Posted</p>
          <ul className="list">
            <li className="item radio-to grid">
              <label>
                <input type="radio" name="date-posted" />
                <div></div>
                Any Time
              </label>
              <label>
                <input type="radio" name="date-posted" />
                <div></div>
                Past Month
              </label>
            </li>
            <li className="item radio-to grid">
              <label>
                <input type="radio" name="date-posted" />
                <div></div>
                Past Week
              </label>
              <label>
                <input type="radio" name="date-posted" />
                <div></div>
                Past 24 hours
              </label>
            </li>
          </ul>
        </div>

        <div className="parent">
          <p className="p-head">Experience Level</p>
          <ul className="list">
            {expLevel.map((item, index) => (
              <li key={index} className="item checkbox-to">
                <label>
                  <input type="checkbox" name="date-posted" />
                  <div>
                    <GoCheck className="check" />
                  </div>
                  {item}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Job Category */}
        <div className="parent">
          <p className="p-head">Job Category</p>
          <ul className="list">
            {jobCategories.map((item, index) => (
              <li key={index} className="item checkbox-to">
                <label>
                  <input type="checkbox" name="date-posted" />
                  <div>
                    <GoCheck className="check" />
                  </div>
                  {item.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
