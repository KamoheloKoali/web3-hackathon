import React from "react";
import NavBar from "~~/components/NavBar";
import Yourcourses from "~~/components/Yourcourses";

const Courses = () => {
  return (
    <div className="h-screen flex">
      <div className=" w-full h-full flex rounded-md bg-gray-200">
        <NavBar />
        <div className="flex flex-wrap gap-3 justify-center pt-10 pb-10 bg-white rounded-xl m-8 overflow-y-auto flex-grow">
          <Yourcourses />
        </div>
      </div>
    </div>
  );
};

export default Courses;
