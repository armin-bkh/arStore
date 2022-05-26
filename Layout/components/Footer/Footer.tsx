import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socialMedia = [
  {
    id: 1,
    href: "https://www.github.com/armin-bkh",
    icon: <FaGithub />,
    title: "GitHub",
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/arminbkh",
    icon: <FaLinkedinIn />,
    title: "LinkedIn",
  },
  {
    id: 3,
    href: "https://www.instagram.com/rminbkh/",
    icon: <FaInstagram />,
    title: "instagram",
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center safeAre py-4 px-5 border-t border-[#eaeaea]">
      <p className="text-3xl md:text-5xl font-bold mb-5">ArStore</p>
      <ul className="flex items-center justify-between w-full md:w-1/4">
        {socialMedia.map((media) => (
          <li key={media.id}>
            <a
              className="text-xl md:text-2xl hover:text-violet-300 transition"
              href={media.href}
            >
              {media.icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
