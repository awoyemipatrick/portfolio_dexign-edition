import React from "react";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import Profile from "@/public/assets/profile_pic.png";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full my-10">
      {/* Profile Picture Section */}
      <div className="relative flex items-start">
        <Image
          src={Profile}
          alt="Profile Picture"
          priority
          className="object-contain w-full md:w-[350px] h-full md:h-[350px] rounded-2xl bg-gray/15"
        />
      </div>

      
      <div className="flex flex-col w-full md:w-1/2 justify-between items-end">
      <div className="">
        <h2 className="text-4xl font-bold text-champanePink">About Me</h2>
      </div>
        <div>
          <div className="bg-electricBlue dark:bg-lightStoneGray h-1"></div>
          <p className="text-sm text-softGray mt-5 font-medium pl-10">
            <span>Hi,</span> I&apos;m {siteConfig.name}, a passionate Frontend
            Developer with {new Date().getFullYear() - 2021} years of
            experience.
            <br />I specialize in creating visually appealing and highly
            functional websites using modern technologies like HTML, CSS,
            JavaScript, and{" "}
            <Link className="text-champanePink" href="https://nextjs.org/">
              Next.js {}
            </Link>
            React, and Tailwind CSS. My focus is on delivering seamless user
            experiences and optimized performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
