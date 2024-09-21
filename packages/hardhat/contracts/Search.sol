// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Search {
    // Standardized categories for tagging
    enum Category { Business, Technology, Humanities, Health, Other }

    struct Content {
        string title;
        string description;
        string ipfsHash;
        Category[] tags; // Use enum for standardized categories
        address institution;
        string contentType; // e.g., "video", "article", "course"
    }

    mapping(uint256 => Content) public contents;
    uint256 public contentCount;

    // Event emitted when new content is added
    event ContentAdded(uint256 indexed contentId, string title, string contentType);

    // Function to add new content
    function addContent(
        string memory _title,
        string memory _description,
        string memory _ipfsHash,
        Category[] memory _tags,
        string memory _contentType
    ) public {
        contents[contentCount] = Content({
            title: _title,
            description: _description,
            ipfsHash: _ipfsHash,
            tags: _tags,
            institution: msg.sender,
            contentType: _contentType
        });
        emit ContentAdded(contentCount, _title, _contentType);
        contentCount++;
    }

    // Function to search by tags
    function searchByTag(Category _tag) public view returns (Content[] memory) {
        uint256 tempCount = 0;

        // Count how many contents match the tag
        for (uint256 i = 0; i < contentCount; i++) {
            for (uint256 j = 0; j < contents[i].tags.length; j++) {
                if (contents[i].tags[j] == _tag) {
                    tempCount++;
                    break;
                }
            }
        }

        Content[] memory results = new Content[](tempCount);
        uint256 resultIndex = 0;

        // Populate the results array with matching contents
        for (uint256 i = 0; i < contentCount; i++) {
            for (uint256 j = 0; j < contents[i].tags.length; j++) {
                if (contents[i].tags[j] == _tag) {
                    results[resultIndex] = contents[i];
                    resultIndex++;
                    break;
                }
            }
        }

        return results;
    }
}


