import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../../assets/logo/logo.svg";
import DarkModeSwitcher from "./DarkModeSwitcher";
import RadiusButtonArrow from "@/components/RadiusButtonArrow";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      id="header"
      className="flex flex-grow items-center justify-between px-5 py-4 shadow-2 md:px-6 2xl:px-11 h-28 relative z-10"
    >
      <Link className="flex items-center gap-2 sm:gap-4" to="/">
        <LogoIcon />
        <span className="hidden md:flex items-center gap-1 group hover:dark:text-prime hover:text-prime">
          <p className="text-3xl dark:text-white text-black font-semibold group-hover:text-prime">
            Silver
          </p>
          <p className="text-3xl dark:text-white text-black font-extralight group-hover:text-prime">
            Digital Bus LLC
          </p>
        </span>
      </Link>

      <div className="flex items-center md:gap-3 lg:gap-3">
        <ul className="flex items-center gap-6 md:gap-8 lg:gap-12">
          <DarkModeSwitcher />
          <RadiusButtonArrow
            title="Get In Touch"
            className="hidden md:flex"
            to="/contact"
          />
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="text-2xl font-medium dark:text-white text-black hidden md:flex hover:dark:text-prime hover:text-prime"
          >
            Menu
          </button>
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <svg
              width="63"
              height="44"
              viewBox="0 0 63 44"
              xmlns="http://www.w3.org/2000/svg"
              className={`fill-current dark:text-white ${
                isHovered
                  ? "animatecss animatecss-jello animatecss-infinite"
                  : ""
              }`}
            >
              <line
                y1="15.25"
                x2="63"
                y2="15.25"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                y1="27.25"
                x2="41"
                y2="27.25"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
