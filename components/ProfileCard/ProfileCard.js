import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { PhoneOutgoing } from "lucide-react";

const ProfileCard = ({
  name = "John Doe",
  profession = "Sales Representative",
  image = "/female1.jpg",
  socialLinks = [],
  contactNumber = "+27114935495",
}) => {
  return (
      <div className="w-full bg-gradient-to-l from-[#003366] to-[#0f52ba] rounded-lg shadow-lg p-4">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24  relative">
            <Image
              src={image}
              alt="Profile"
              layout="fill"
              objectFit="fill"
              className="rounded-full border-4 border-[#007FFF]"
            />
          </div>
        </div>
        {/* Name and Profession */}
        <div className="text-center">
          <h2 className="text-white text-xl font-semibold">{name}</h2>
          <p className="text-gray-400 text-sm">{profession}</p>
        </div>
        {/* Social Icons */}
        <div className="flex justify-center mt-2 space-x-4">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        {/* Copy Email Button */}
        <div className="flex justify-center mt-4">
          <Button
            as="a"
            href={`tel:${contactNumber}`}
            className="bg-green-600 text-white text-sm py-2 px-4 rounded-full hover:bg-blue-700 transition"
          >
            <PhoneOutgoing/>
          </Button>
        </div>
      </div>
  );
};

export default ProfileCard;
