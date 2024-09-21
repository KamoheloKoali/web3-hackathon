// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract DecentralizedLearningData {

    // Struct to hold learning data for a course
    struct Course {
        string courseTitle;
        string institution;
        string progress; // e.g., "50%" progress in the course
        string achievements; // Achievements like badges or certificates (IPFS hash or direct link)
        string courseMetadata; // IPFS hash of metadata (course info, description, etc.)
    }

    // Mapping from user (address) to enrolled courses
    mapping(address => Course[]) private userCourses;

    // Event emitted when a new course is enrolled
    event CourseEnrolled(address indexed user, string courseTitle, string institution);

    // Event emitted when a course progress is updated
    event CourseProgressUpdated(address indexed user, string courseTitle, string progress);

    // Function to enroll in a new course
    function enrollInCourse(string memory _courseTitle, string memory _institution, string memory _courseMetadata) external {
        // Create a new course object and push it to the user's course list
        Course memory newCourse = Course({
            courseTitle: _courseTitle,
            institution: _institution,
            progress: "0%", // Initial progress is 0%
            achievements: "", // No achievements yet
            courseMetadata: _courseMetadata
        });
        userCourses[msg.sender].push(newCourse);

        // Emit event for the newly enrolled course
        emit CourseEnrolled(msg.sender, _courseTitle, _institution);
    }

    // Function to update course progress
    function updateCourseProgress(uint _courseIndex, string memory _newProgress) external {
        require(_courseIndex < userCourses[msg.sender].length, "Invalid course index");

        // Update progress
        userCourses[msg.sender][_courseIndex].progress = _newProgress;

        // Emit event for progress update
        emit CourseProgressUpdated(msg.sender, userCourses[msg.sender][_courseIndex].courseTitle, _newProgress);
    }

    // Function to add achievements to a course
    function addCourseAchievement(uint _courseIndex, string memory _achievement) external {
        require(_courseIndex < userCourses[msg.sender].length, "Invalid course index");

        // Update achievements
        userCourses[msg.sender][_courseIndex].achievements = _achievement;
    }

    // Function to retrieve a user's courses
    function getUserCourses(address _user) external view returns (Course[] memory) {
        return userCourses[_user];
    }

    // Function to retrieve a specific course by index
    function getCourseDetails(address _user, uint _courseIndex) external view returns (Course memory) {
        require(_courseIndex < userCourses[_user].length, "Invalid course index");
        return userCourses[_user][_courseIndex];
    }
}
