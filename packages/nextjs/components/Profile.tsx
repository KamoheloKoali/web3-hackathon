"use client";

import React from "react";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";

// import EditProfile from "~~/components/settingsfromM";

const Profile = () => {
  const { address: connectedAddress } = useAccount();
  return (
    <div>
      Connected Address: <Address address={connectedAddress} />
    </div>
  );
};

export default Profile;
