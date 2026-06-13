import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <section className="web bg-black">
      <div className="container">
        <div className="flex items-center flex-col gap-10">
          <a href="" className="logo text-5xl text-white! ">
            <span className="font-bold ">Hire</span>
            <span className="text-primary ">Akho.</span>
          </a>
          <ul className="flex items-center md:gap-15 gap-5 [&_a]:text-base [&_a]:hover:text-primary font-normal text-slate-200 [&_a]:transition-all md:flex-row flex-col ">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Find Job</a>
            </li>
            <li>
              <a href="">Resources</a>
            </li>
            <li>
              <a href="">Blogs</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
          <ul className="flex items-center gap-8 [&_a]:text-[20px] [&_a]:hover:text-primary font-normal text-slate-200 [&_a]:transition-all ">
            <li>
              <a href="">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <RiTwitterXFill />
              </a>
            </li>
            <li>
              <a href="">
                <BsInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
