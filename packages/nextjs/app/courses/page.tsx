import React from "react";
import CoursesList from "~~/components/CoursesList";
import NavBar from "~~/components/NavBar";

const Courses = () => {
  return (
    <div className="h-screen flex">
      <div className=" w-full h-full flex rounded-md bg-gray-200">
        <NavBar />
        <div className="flex flex-wrap gap-3 justify-center pt-10 pb-10 bg-white rounded-xl m-8 overflow-y-auto flex-grow">
          <CoursesList />
        </div>
      </div>
    </div>
  );
};

export default Courses;
