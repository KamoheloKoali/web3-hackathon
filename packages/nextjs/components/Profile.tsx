"use client";

import React from "react";
// import { useAccount } from "wagmi";
// import { Address } from "~~/components/scaffold-eth";
import EditProfile from "~~/components/settingsfromM";

const Profile = () => {
  // const { address: connectedAddress } = useAccount();
  return (
    <div className="flex-grow">
      {/* Connected Address: <Address address={connectedAddress} /> */}
      <EditProfile />
      {/* you can edit in here  */}
    </div>
  );
};

export default Profile;
