import React from "react";
import { Button } from "../ui/button";

const ProfileCard = ({
  name = "John Doe",
  profession = "Sales Representative",
  image = "",
  socialLinks = [],
}) => {
  return (
      <div className="w-full bg-gray-800 rounded-lg shadow-lg p-4">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src={image}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-gray-700"
          />
        </div>
        {/* Name and Profession */}
        <div className="text-center">
          <h2 className="text-white text-xl font-semibold">{name}</h2>
          <p className="text-gray-400 text-sm">{profession}</p>
        </div>
        {/* Social Icons */}
        <div className="flex justify-center mt-2 space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        {/* Copy Email Button */}
        <div className="flex justify-center mt-4">
          <Button
            className="bg-blue-600 text-white text-sm py-2 px-4 rounded-full hover:bg-blue-700 transition"
          >
            Get in touch
          </Button>
        </div>
      </div>
  );
};

export default ProfileCard;
