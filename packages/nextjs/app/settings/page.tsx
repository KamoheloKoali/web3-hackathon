import React from "react";
import NavBar from "~~/components/NavBar";
import EditProfile from "~~/components/settingsfromM";

const Page = () => {
  return (
    <div className="h-screen flex">
      <div className=" w-full h-full flex rounded-md bg-gray-200">
        <NavBar />
        <div className="flex bg-white rounded-xl m-8 overflow-y-auto flex-grow">
          <EditProfile />
        </div>
      </div>
    </div>
  );
};

export default Page;
