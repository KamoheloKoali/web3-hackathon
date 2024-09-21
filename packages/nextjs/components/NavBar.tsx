"use client";

import React from "react";
import Link from "next/link";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

const NavBar = () => {
  const classRooms = [
    "English",
    "Mathematics",
    "Religious Studies",
    "Physical Science",
    "Biology",
    "Sesotho",
    "LBSE",
    "ICT",
  ];

  // Sort the classrooms in alphabetical order
  const sortedClassRooms = classRooms.sort((a, b) => a.localeCompare(b));

  return (
    <div className="flex flex-col gap-4 items-center pt-6 m-8 gap-4 flex-shrink-0 rounded-lg w-[15%]">
      <label className="input input-bordered rounded-lg flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="flex">
        <RainbowKitCustomConnectButton />
      </div>
      <Link href={"/courses"} className="font-semibold text-base">
        #Courses
      </Link>
      <Link href={"#"} className="font-semibold text-base">
        #Settings
      </Link>
      {/* <hr /> */}
      <Link href={"/blogs"} className="font-semibold text-base">
        #Blogs
      </Link>
      <div className="font-semibold text-base flex flex-wrap">
        <ul className="menu border menu-xs w-full ">
          <li>
            <details open>
              <summary className="font-semibold text-base">#Classrooms</summary>
              <ul>
                {sortedClassRooms.map((room, index) => (
                  <li key={index}>
                    <Link href={room} className="font-semibold text-sm">
                      {room} Classroom
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
