import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployUserProfile: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Deploy the UserProfile contract
  await deploy("UserProfile", {
    from: deployer,
    log: true,
  });

  console.log("UserProfile contract deployed successfully!");
};

export default deployUserProfile;
deployUserProfile.tags = ["UserProfile"];
