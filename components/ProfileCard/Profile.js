import React from "react";
import ProfileCard from "./ProfileCard";
import { FaTwitter, FaFacebookF, FaWhatsapp, FaInstagram  } from "react-icons/fa";

const Profile = () => {
  const profiles = [
    {
      name: "Jennifer Lochmann",
      profession: "Designer",
      image: "https://via.placeholder.com/150",
      socialLinks: [
        { icon: FaFacebookF , url: "https://facebook.com/" },
        { icon: FaTwitter, url: "https://twitter.com/in/" },
        { icon: FaWhatsapp , url: "https://whatsapp.com/" },
        { icon: FaInstagram , url: "https://instagram.com/" },
      ],
      onCopyEmail: () => alert("Email copied for John Smith!"),
    },
    {
      name: "Shéne Kraft",
      profession: "Designer",
      image: "https://via.placeholder.com/150",
      socialLinks: [
        { icon: FaFacebookF, url: "https://facebook.com/" },
        { icon: FaTwitter, url: "https://twitter.com/in/" },
        { icon: FaWhatsapp, url: "https://whatsapp.com/" },
        { icon: FaInstagram , url: "https://instagram.com/" },
      ],
      onCopyEmail: () => alert("Email copied for Jane Doe!"),
    },
    {
        name: "Chrystal Noakes",
        profession: "Sales Representative",
        image: "https://via.placeholder.com/150",
        socialLinks: [
          { icon: FaFacebookF, url: "https://facebook.com/" },
          { icon: FaTwitter, url: "https://twitter.com/in/" },
          { icon: FaWhatsapp, url: "https://whatsapp.com/" },
          { icon: FaInstagram , url: "https://instagram.com/" },
        ],
        onCopyEmail: () => alert("Email copied for Jane Doe!"),
      },
      {
        name: "Koketso Seshoka",
        profession: "Production Planner",
        image: "https://via.placeholder.com/150",
        socialLinks: [
          { icon: FaFacebookF, url: "https://example.com/profile2" },
          { icon: FaTwitter, url: "https://twitter.com/in/janedoe" },
          { icon: FaWhatsapp, url: "https://whatsapp.com/janedoe" },
          { icon: FaInstagram , url: "https://instagram.com/janedoe" },
        ],
        onCopyEmail: () => alert("Email copied for Jane Doe!"),
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
