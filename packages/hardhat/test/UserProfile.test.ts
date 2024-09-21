// import { ethers, deployments } from "hardhat";
// import { expect } from "chai";
// import { Contract } from "ethers";

// describe("UserProfile Contract", function () {
//   let userProfile: Contract;
//   let owner: any;
//   let addr1: any;

//   beforeEach(async function () {
//     // Run the deployment script
//     await deployments.fixture(); // This runs the deploy scripts from the deploy folder

//     // Get the contract instance
//     userProfile = await ethers.getContract("UserProfile");

//     [owner, addr1] = await ethers.getSigners(); // Get test accounts
//   });

//   describe("Profile Management", function () {
//     it("Should allow a user to create a profile", async function () {
//       const firstName = "John";
//       const lastName = "Doe";
//       const email = "john.doe@example.com";
//       const password = "password123";
//       const profilePicture = "ipfs://exampleProfilePicHash"; // Example IPFS hash or URL

//       // Create profile for the owner
//       await userProfile.connect(owner).setProfile(firstName, lastName, email, password, profilePicture);

//       // Fetch the profile and verify it
//       const [fetchedFirstName, fetchedLastName, fetchedEmail, fetchedProfilePicture] = await userProfile
//         .connect(owner)
//         .getProfile();

//       expect(fetchedFirstName).to.equal(firstName);
//       expect(fetchedLastName).to.equal(lastName);
//       expect(fetchedEmail).to.equal(email);
//       expect(fetchedProfilePicture).to.equal(profilePicture); // Verify profile picture
//     });

//     // Additional tests...
//   });
// });
