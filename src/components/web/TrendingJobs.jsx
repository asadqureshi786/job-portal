import React from 'react'
import {useState} from 'react'
export default function TrendingJobs() {

 const [jobs, setJobs] = useState([
    {
        id: 1,
        title: "Senior Software Engineer",
        company: "Tech Innovators Inc.",
        location: "San Francisco, CA",
        salary: "$120,000 - $150,000",
        description: "Join our dynamic team to develop cutting-edge software solutions that drive innovation and impact millions of users worldwide.",
        logo: "/img/logos/1.svg"
    }])
  return (
    <div class="container mt-20">
        <div class="flex justify-between items-center">
            <h2 class="section-heading-sm">Trending Jobs</h2>
            <a href="#" class="see-all" >See All Jobs</a>
        </div>
        <div class="grid grid-cols-3 gap-6 mt-10">

        </div>
    </div>
  )
}
