import React from "react";
import { useState } from "react";

export default function Faqs() {
  const list = [
  {
    question: "How do I find a job on this portal?",
    answer:
      "You can search for jobs using keywords, location, or category. Apply filters to find the most relevant opportunities quickly.",
  },
  {
    question: "Is it free to apply for jobs?",
    answer:
      "Yes, applying for jobs on our platform is completely free for job seekers.",
  },
  {
    question: "How do I create a profile?",
    answer:
      "Click on the 'Sign Up' button, fill in your details, and upload your resume to create your profile.",
  },
  {
    question: "Can I upload my CV?",
    answer:
      "Yes, you can upload your CV in PDF or DOC format while creating or updating your profile.",
  },
  {
    question: "How do I know if my application was accepted?",
    answer:
      "You will receive notifications via email or dashboard updates whenever your application status changes.",
  },
  {
    question: "Can I apply for multiple jobs?",
    answer:
      "Yes, you can apply for as many jobs as you want without any restrictions.",
  },
];

  const [active  , setActive] = useState(null);
  const toggleFAQ = (index)=>{
      setActive(active === index ? null : index);
  }

  return (
    <section className="web">
      <div className="container">
        <div className="lg:w-8/12 w-full mx-auto text-center">
          <h2 className="section-heading">
            <span className="g-text"> Frequently </span>
             Ask Questions
          </h2>
          <p className="section-desc">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
            <div className="space-y-4 mt-10">
          {list.map((faq, index) => (
            // border border-gray-300
            <div className={`rounded-lg overflow-hidden border border-primary/30 ${active === index ? 'bg-primary text-white' : ''}`}> 
              <button onClick={()=> toggleFAQ(index)} className="4xl:text-lg w-full flex items-center justify-between p-4  font-medium text-left cursor-pointer">
                <span>{faq.question}</span>
             <span
                className={`text-2xl transition-transform duration-300 ${
                  active === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${ active === index ? 'max-h-40' : 'max-h-0' }`}
              >
                <div className={`p-4 pt-0 text-gray-600 text-left  ${active === index ? 'text-white' : ''}`}>{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
        </div>
      
      </div>
    </section>
  );
}
