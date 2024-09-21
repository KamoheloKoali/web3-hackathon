"use client";

import { useState } from "react";
import Image from "next/image";

const EditProfile = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("Sai Gon, Vietnam");
  const [bio, setBio] = useState("");

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full h-full text-white p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>

        {/* Avatar Section */}
        <div className="flex items-center mb-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            {avatar ? (
              <Image src={avatar} alt="Avatar" className="object-cover w-full h-full" />
            ) : (
              <div className="bg-gray-600 w-full h-full flex items-center justify-center text-2xl">A</div>
            )}
          </div>
          <div className="ml-6">
            <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" id="avatarInput" />
            <label
              htmlFor="avatarInput"
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Upload new image
            </label>
            <p className="text-sm text-gray-400 mt-2">At least 800x800 px recommended. JPG, PNG, and GIF allowed.</p>
          </div>
        </div>

        {/* Name Input */}
        <div className="mb-6">
          <label className="block text-gray-400 mb-2" htmlFor="username">
            Name
          </label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Username"
          />
        </div>

        {/* Location Input */}
        <div className="mb-6">
          <label className="block text-gray-400 mb-2" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Bio Input */}
        <div className="mb-6">
          <label className="block text-gray-400 mb-2" htmlFor="bio">
            Bio
          </label>
          <textarea
            id="bio"
            value={bio}
            onChange={e => setBio(e.target.value)}
            className="w-full h-32 px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Short bio"
            maxLength={880}
          />
          <p className="text-sm text-gray-400 mt-2">{880 - bio.length} characters left</p>
        </div>

        {/* Save Button */}
        <div className="flex justify-between">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg">
            Delete account
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
