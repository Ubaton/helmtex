import React from "react";
import ProfileCard from "./ProfileCard";
import { FaFacebookF, FaWhatsapp, FaInstagram  } from "react-icons/fa";
import { Mail } from "lucide-react";

const Profile = () => {
  const profiles = [
    {
      name: "Jenny Lochmann",
      profession: "Designer",
      image: "/female2.jpg",
      socialLinks: [
        { icon: FaFacebookF , url: "https://facebook.com/" },
        { icon: Mail, url: "https://twitter.com/in/" },
        { icon: FaWhatsapp , url: "https://whatsapp.com/" },
        { icon: FaInstagram , url: "https://instagram.com/" },
      ],
      contactNumber: "+27114935495",
    },
    {
      name: "Shéne Kraft",
      profession: "Designer",
      image: "/female3.jpg",
      socialLinks: [
        { icon: FaFacebookF, url: "https://facebook.com/" },
        { icon: Mail, url: "https://twitter.com/in/" },
        { icon: FaWhatsapp, url: "https://whatsapp.com/" },
        { icon: FaInstagram , url: "https://instagram.com/" },
      ],
      contactNumber: "+27114935495",
    },
    {
        name: "Chrystal Noakes",
        profession: "Sales Representative",
        image: "/female1.jpg",
        socialLinks: [
          { icon: FaFacebookF, url: "https://facebook.com/" },
          { icon: Mail, url: "https://twitter.com/in/" },
          { icon: FaWhatsapp, url: "https://whatsapp.com/" },
          { icon: FaInstagram , url: "https://instagram.com/" },
        ],
        contactNumber: "+27114935495",
      },
      {
        name: "Koketso Seshoka",
        profession: "Production Planner",
        image: "/male.jpg",
        socialLinks: [
          { icon: Mail, url: "https://example.com/profile2" },
          { icon: FaWhatsapp, url: "https://whatsapp.com/janedoe" },
          { icon: FaInstagram , url: "https://instagram.com/janedoe" },
        ],
        contactNumber: "+27114935495",
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
