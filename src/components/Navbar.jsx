import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../assets/images/logo2.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close mobile menu when screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Mission",
      path: "/mission",
    },
    {
      name: "Events",
      path: "/events",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      {/* ================= HEADER BACKGROUND ================= */}
      <header className="fixed left-0 right-0 top-0 z-50 bg-slate-950 px-3  sm:px-5">
        {/* ================= NAVBAR ================= */}
        <motion.nav
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mx-auto
            w-full
            max-w-7xl
            rounded-3xl
            border
            border-white/10
            bg-black
            shadow-2xl
          "
        >
          {/* ================= NAVBAR TOP ================= */}
          <div
            className="
              flex
              h-16
              items-center
              justify-between
              px-4
              sm:h-20
              sm:px-6
              lg:px-8
            "
          >
            {/* ================= LOGO ================= */}
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="no-underline"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="flex items-center"
              >
                <img
                  src={logo}
                  alt="Purpose Driven Generation"
                  className="
                    h-10
                    w-auto
                    object-contain
                    sm:h-12
                    lg:h-14
                  "
                />
              </motion.div>
            </NavLink>

            {/* ================= DESKTOP NAVIGATION ================= */}
            <div className="hidden items-center gap-1 lg:flex">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="no-underline"
                >
                  {({ isActive }) => (
                    <div
                      className={`
                        relative
                        rounded-full
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "bg-green-700 text-white"
                            : "text-white hover:bg-white/10 hover:text-green-300"
                        }
                      `}
                    >
                      {link.name}
                    </div>
                  )}
                </NavLink>
              ))}
            </div>

            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-xl
                text-white
                transition
                hover:bg-green-700
                lg:hidden
              "
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* ================= MOBILE MENU ================= */}
          <motion.div
            initial={false}
            animate={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              overflow-hidden
              border-t
              border-white/10
              lg:hidden
            "
          >
            <div className="px-4 py-5 sm:px-6">
              {/* Mobile Links */}
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `
                      no-underline
                      rounded-xl
                      px-5
                      py-3.5
                      text-center
                      text-base
                      font-semibold
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "bg-green-700 text-white"
                          : "text-white hover:bg-white/10 hover:text-green-300"
                      }
                    `
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* Mobile CTA */}
              <button
                type="button"
                className="
                  mt-5
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-green-700
                  px-6
                  py-3.5
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:bg-green-800
                "
              >
                Join Us
                <FaArrowRight className="text-sm" />
              </button>

              {/* Social Icons */}
              <div className="mt-6 flex justify-center gap-6">
                <FaFacebookF
                  size={19}
                  className="cursor-pointer text-white transition hover:text-green-400"
                />

                <FaInstagram
                  size={19}
                  className="cursor-pointer text-white transition hover:text-green-400"
                />

                <FaYoutube
                  size={19}
                  className="cursor-pointer text-white transition hover:text-green-400"
                />

                <FaWhatsapp
                  size={19}
                  className="cursor-pointer text-white transition hover:text-green-400"
                />
              </div>
            </div>
          </motion.div>
        </motion.nav>
      </header>
    </>
  );
}

export default Navbar;
