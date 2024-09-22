// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserProfile {
    struct Profile {
        string firstName;
        string lastName;
        string email;
        string profilePicture; // New field for profile picture
        bool exists;
    }

    mapping(address => Profile) private profiles;

    // Event to notify when a profile is created or updated
    event ProfileUpdated(address indexed user, string firstName, string lastName, string email, string profilePicture);

    // Create or update a profile
    function setProfile(
        string memory _firstName,
        string memory _lastName,
        string memory _email,
        string memory _address,
        string memory _profilePicture // Parameter for profile picture
    ) public {
        require(bytes(_firstName).length > 0, "First name is required");
        require(bytes(_lastName).length > 0, "Last name is required");
        require(bytes(_address).length > 0, "Address is required");
        require(bytes(_email).length > 0, "Email is required");

        // Store the profile details
        profiles[msg.sender] = Profile({
            firstName: _firstName,
            lastName: _lastName,
            address: _address
            email: _email,
            profilePicture: _profilePicture, // Store the profile picture
            exists: true
        });

        emit ProfileUpdated(msg.sender, _firstName, _lastName, _email, _profilePicture); // Emit the profile picture
    }

    // Fetch a user's profile
    function getProfile() public view returns (string memory, string memory, string memory, string memory) {
        require(profiles[msg.sender].exists, "Profile not found");
        Profile memory userProfile = profiles[msg.sender];
        return (userProfile.firstName, userProfile.lastName, userProfile.email, userProfile.profilePicture); // Return the profile picture
    }

    // Check if a profile exists for the user
    function profileExists() public view returns (bool) {
        return profiles[msg.sender].exists;
    }
}
