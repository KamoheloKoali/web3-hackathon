"use client";

import React from "react";
// import { hardhat } from "viem/chains";
// import { SwitchTheme } from "~~/components/SwitchTheme";
// import { useTargetNetwork } from "~~/hooks/scaffold-eth";
import Hero from "~~/components/Hero";
import NavBar from "~~/components/NavBar";

const School = () => {
  // const { targetNetwork } = useTargetNetwork();
  // const isLocalNetwork = targetNetwork.id === hardhat.id;
  // return <SwitchTheme className={`pointer-events-auto ${isLocalNetwork ? "self-end md:self-auto" : ""}`} />;
  return (
    <div className="h-screen flex">
      <div className=" w-full h-full flex rounded-md bg-gray-200">
        <NavBar />
        <div className="bg-white rounded-xl gap-4 m-8 flex-grow">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default School;
