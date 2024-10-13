import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<HTMLButtonElement | null>(null);
  const sidebar = useRef<HTMLElement | null>(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // Close sidebar on click outside
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (
        sidebar.current &&
        trigger.current &&
        !sidebar.current.contains(event.target as Node) &&
        !trigger.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, [sidebarOpen]); // Add sidebarOpen as a dependency

  // Close if the esc key is pressed
  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (!sidebarOpen || event.key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => {
      document.removeEventListener("keydown", keyHandler);
    };
  }, [sidebarOpen]);

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    const body = document.querySelector("body");
    if (sidebarExpanded) {
      body?.classList.add("sidebar-expanded");
    } else {
      body?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`fixed inset-x-5 top-4 z-20 md:left-2/4 flex flex-col justify-center overflow-y-hidden duration-300 ease-linear dark:bg-black bg-white rounded-3xl ${
        sidebarOpen
          ? "translate-x-0 opacity-100 visible"
          : "translate-x-full opacity-0 invisible"
      }`}
    >
      <div className="flex flex-col gap-6 px-10 pt-10 pb-12 rounded-3xl">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <span className="flex items-center text-base dark:text-white text-black">
              Menu
            </span>
            <div className="flex gap-4 items-center ">
              <span className="text-sm dark:text-white text-black">Close</span>
              <button
                ref={trigger}
                className="flex justify-center p-2 items-center rounded-full border border-customGray"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className={`fill-current dark:text-white ${
                    isHovered
                      ? "animatecss animatecss-rotateOut animatecss-infinite"
                      : ""
                  }`}
                >
                  <path
                    d="M15.625 4.375L4.375 15.625"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.625 15.625L4.375 4.375"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <NavLink
            to="/"
            className="text-left text-4xl dark:text-white text-black hover:dark:text-prime hover:text-prime"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            Home
          </NavLink>
          <NavLink
            to="/skill"
            className="text-left text-4xl dark:text-white text-black hover:dark:text-prime hover:text-prime"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            Skill/Services
          </NavLink>
          <NavLink
            to="/projects"
            className="text-left text-4xl dark:text-white text-black hover:dark:text-prime hover:text-prime"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/team"
            className="text-left text-4xl dark:text-white text-black hover:dark:text-prime hover:text-prime"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            Team
          </NavLink>
          <NavLink
            to="/contact"
            className="text-left text-4xl dark:text-white text-black hover:dark:text-prime hover:text-prime"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            Contact
          </NavLink>
        </div>
        <div className="flex flex-col gap-10 mt-32 md:grid md:grid-cols-2 md:items-end">
          <div id="email" className="flex flex-col items-start gap-4">
            <span className="text-left text-base font-medium underline dark:text-white text-black cursor-pointer hover:dark:text-prime hover:text-prime">
              hello@silverdigital.bus
            </span>
            <span className="text-left text-base font-medium dark:text-white text-black">
              <span>
                ORLANDO, FL
                <span className="underline">32806</span>
              </span>
            </span>
          </div>
          <div
            id="social"
            className="flex items-start gap-4 justify-between md:flex-col md:items-end"
          >
            <NavLink
              to="/behance"
              className="dark:text-white text-black text-base font-medium uppercase hover:dark:text-prime hover:text-prime"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              Behance
            </NavLink>
            <NavLink
              to="/dribbble"
              className="dark:text-white text-black text-base font-medium uppercase hover:dark:text-prime hover:text-prime"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              Dribbble
            </NavLink>
            <NavLink
              to="/linkedIn"
              className="dark:text-white text-black text-base font-medium uppercase hover:dark:text-prime hover:text-prime"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              LinkedIn
            </NavLink>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
