import { useOrientation } from "helpers/hooks/useOrientation";
import Link from "next/link";
import { useRouter } from "next/router";
import React, {
  useCallback,
  useState,
  useEffect,
  useRef,
  MouseEventHandler,
} from "react";

const links = [
  { id: 1, title: "home", href: "/" },
  { id: 2, title: "products", href: "/products" },
  { id: 3, title: "about", href: "/about" },
  { id: 4, title: "contact", href: "/contact" },
  { id: 5, title: "login", href: "/login" },
];

const Navbar = () => {
  const router = useRouter();
  const isLandscape = useOrientation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsOpen(isLandscape && false);
  }, [isLandscape]);

  useEffect(() => {
    function handleCloseMenu(e: any) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        e.target.id !== "ham-menu"
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleCloseMenu);
    return () => {
      document.removeEventListener("mousedown", handleCloseMenu);
    };
  }, [menuRef]);

  const openMenuHandler = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, [isOpen]);

  return (
    <header className="px-5 py-4 shadow-sm shadow-black/20 sticky top-0 bg-white z-10 overflow-hidden">
      <div className="flex justify-between items-center safeArea">
        <div>
          <Link href="/">
            <a className="text-xl md:text-2xl font-bold">ArStore</a>
          </Link>
        </div>
        <nav
          ref={menuRef}
          className={`fixed w-48 bg-slate-100 z-50 top-0 h-full transition-all md:w-auto md:static
         md:bg-transparent md:h-auto ${isOpen ? "left-0" : "-left-full"}`}
        >
          <ul className="flex flex-col md:flex-row justify-center items-center py-4 md:py-0">
            {links.map((link) => (
              <li className="md:mb-0 mb-2 last:mb-0 md:text-lg" key={link.id}>
                <Link href={link.href}>
                  <a
                    className={`capitalize px-5 py-1 hover:text-violet-300 transition ${
                      router.pathname === link.href ? "text-violet-400" : null
                    }`}
                  >
                    {link.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          id="ham-menu"
          className="md:hidden origin-center"
          onClick={openMenuHandler}
        >
          <div
            id="ham-menu"
            className={`w-8 h-1 transform bg-black rounded-sm transition-all ${
              isOpen && "rotate-45"
            }`}
          ></div>
          <div
            id="ham-menu"
            className={`w-8 h-1 bg-black rounded-sm my-1 transition-all ${
              isOpen && "hidden"
            }`}
          ></div>
          <div
            id="ham-menu"
            className={`w-8 h-1 transform bg-black rounded-sm transition-all ${
              isOpen && "-rotate-45 -mt-1"
            }`}
          ></div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
