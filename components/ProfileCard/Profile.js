import React from "react";
import ProfileCard from "./ProfileCard";
import { FaTwitter, FaFacebookF, FaWhatsapp, FaInstagram  } from "react-icons/fa";

const Profile = () => {
  const profiles = [
    {
      name: "Jenny Lochmann",
      profession: "Designer",
      image: "/female2.jpg",
      socialLinks: [
        { icon: FaFacebookF , url: "https://facebook.com/" },
        { icon: FaTwitter, url: "https://twitter.com/in/" },
        { icon: FaWhatsapp , url: "https://whatsapp.com/" },
        { icon: FaInstagram , url: "https://instagram.com/" },
      ],
      contactNumber: "+27614091530",
    },
    {
      name: "Shéne Kraft",
      profession: "Designer",
      image: "/female3.jpg",
      socialLinks: [
        { icon: FaFacebookF, url: "https://facebook.com/" },
        { icon: FaTwitter, url: "https://twitter.com/in/" },
        { icon: FaWhatsapp, url: "https://whatsapp.com/" },
        { icon: FaInstagram , url: "https://instagram.com/" },
      ],
      contactNumber: "1234567890",
    },
    {
        name: "Chrystal Noakes",
        profession: "Sales Representative",
        image: "/female1.jpg",
        socialLinks: [
          { icon: FaFacebookF, url: "https://facebook.com/" },
          { icon: FaTwitter, url: "https://twitter.com/in/" },
          { icon: FaWhatsapp, url: "https://whatsapp.com/" },
          { icon: FaInstagram , url: "https://instagram.com/" },
        ],
        contactNumber: "1234567890",
      },
      {
        name: "Koketso Seshoka",
        profession: "Production Planner",
        image: "/male.jpg",
        socialLinks: [
          { icon: FaFacebookF, url: "https://example.com/profile2" },
          { icon: FaTwitter, url: "https://twitter.com/in/janedoe" },
          { icon: FaWhatsapp, url: "https://whatsapp.com/janedoe" },
          { icon: FaInstagram , url: "https://instagram.com/janedoe" },
        ],
        contactNumber: "1234567890",
      },

  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} {...profile} />
      ))}
    </div>
  );
};

export default Profile;
