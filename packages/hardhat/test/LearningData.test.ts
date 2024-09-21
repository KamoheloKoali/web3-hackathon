// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("DecentralizedLearningData", function () {
//     let learningData;
//     let user;

//     beforeEach(async function () {
//         const LearningData = await ethers.getContractFactory("DecentralizedLearningData");
//         learningData = await LearningData.deploy();
//         [user] = await ethers.getSigners(); // Get the first signer
//     });

//     it("should enroll a user in a course", async function () {
//         const courseTitle = "Blockchain Basics";
//         const institution = "Harvard University";
//         const courseMetadata = "QmHash"; // Replace with actual IPFS hash

//         await learningData.connect(user).enrollInCourse(courseTitle, institution, courseMetadata);

//         const courses = await learningData.getUserCourses(user.address); // Use user.address
//         expect(courses.length).to.equal(1);
//         expect(courses[0].courseTitle).to.equal(courseTitle);
//         expect(courses[0].institution).to.equal(institution);
//         expect(courses[0].courseMetadata).to.equal(courseMetadata);
//     });
// });
