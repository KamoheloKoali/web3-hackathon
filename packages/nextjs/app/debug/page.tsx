import { DebugContracts } from "./_components/DebugContracts";
import type { NextPage } from "next";
import { Header } from "~~/components/Header";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Debug Contracts",
  description: "Debug your deployed 🏗 Scaffold-ETH 2 contracts in an easy way",
});

const Debug: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <DebugContracts />
    </div>
  );
};

export default Debug;
