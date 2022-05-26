"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var socialMedia = [
    {
        id: 1,
        href: "https://www.github.com/armin-bkh",
        icon: react_1["default"].createElement(fa_1.FaGithub, null),
        title: "GitHub"
    },
    {
        id: 2,
        href: "https://www.linkedin.com/in/arminbkh",
        icon: react_1["default"].createElement(fa_1.FaLinkedinIn, null),
        title: "LinkedIn"
    },
    {
        id: 3,
        href: "https://www.instagram.com/rminbkh/",
        icon: react_1["default"].createElement(fa_1.FaInstagram, null),
        title: "instagram"
    },
];
var Footer = function () {
    return (react_1["default"].createElement("footer", { className: "flex flex-col justify-center items-center safeAre py-4 px-5 border-t border-[#eaeaea]" },
        react_1["default"].createElement("p", { className: "text-3xl md:text-5xl font-bold mb-5" }, "ArStore"),
        react_1["default"].createElement("ul", { className: "flex items-center justify-between w-full md:w-1/4" }, socialMedia.map(function (media) { return (react_1["default"].createElement("li", { key: media.id },
            react_1["default"].createElement("a", { className: "text-xl md:text-2xl hover:text-violet-300 transition", href: media.href }, media.icon))); }))));
};
exports["default"] = Footer;
