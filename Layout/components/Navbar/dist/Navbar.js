"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var router_1 = require("next/router");
var react_1 = require("react");
var links = [
    { id: 1, title: "home", href: "/" },
    { id: 2, title: "products", href: "/products" },
    { id: 3, title: "about", href: "/about" },
    { id: 4, title: "contact", href: "/contact" },
    { id: 5, title: "login", href: "/login" },
];
var Navbar = function () {
    var router = router_1.useRouter();
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var openMenuHandler = function () {
        setIsOpen(function (prevIsOpen) { return !prevIsOpen; });
    };
    return (react_1["default"].createElement("header", { className: "px-5 py-4 shadow-sm shadow-black/20 sticky top-0 bg-white" },
        react_1["default"].createElement("div", { className: "flex justify-between items-center safeArea" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(link_1["default"], { href: "/" },
                    react_1["default"].createElement("a", { className: "text-xl md:text-2xl font-bold" }, "ArStore"))),
            react_1["default"].createElement("nav", { className: "fixed w-48 bg-slate-100 z-10 top-0 h-full transition-all md:w-auto md:static\n         md:bg-transparent md:h-auto " + (isOpen ? "left-0" : "-left-full") },
                react_1["default"].createElement("ul", { className: "flex flex-col md:flex-row justify-center items-center py-4 md:py-0" }, links.map(function (link) { return (react_1["default"].createElement("li", { className: "md:mb-0 mb-2 last:mb-0 md:text-lg", key: link.id },
                    react_1["default"].createElement(link_1["default"], { href: link.href },
                        react_1["default"].createElement("a", { className: "capitalize px-5 py-1 hover:text-violet-300 transition " + (router.pathname === link.href ? "text-violet-400" : null) }, link.title)))); }))),
            react_1["default"].createElement("button", { className: "md:hidden", onClick: openMenuHandler },
                react_1["default"].createElement("div", { className: "w-8 h-1 bg-black rounded-sm" }),
                react_1["default"].createElement("div", { className: "w-8 h-1 bg-black rounded-sm my-1" }),
                react_1["default"].createElement("div", { className: "w-8 h-1 bg-black rounded-sm" })))));
};
exports["default"] = Navbar;
