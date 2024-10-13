import React from "react";
import { Link } from "react-router-dom";

interface RadiusButtonArrowProps {
  title: string;
  className?: string;
  to?: string;
}

const RadiusButtonArrow: React.FC<RadiusButtonArrowProps> = ({
  title,
  className,
  to
}) => {
  const buttonContent = (
    <>
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className="fill-current dark:text-white"
      >
        <path
          d="M3.125 10H16.875"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.25 4.375L16.875 10L11.25 15.625"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );

  return to ? (
    <Link
      to={to}
      className={`flex px-4 py-3 justify-center items-center gap-2 rounded-100 border dark:border-white border-black dark:text-white text-black hover:opacity-20 ${className}`}
    >
      {buttonContent}
    </Link>
  ) : (
    <button
      className={`flex px-4 py-3 justify-center items-center gap-2 rounded-100 border dark:border-white border-black dark:text-white text-black hover:opacity-20 ${className}`}
    >
      {buttonContent}
    </button>
  );
};

export default RadiusButtonArrow;
