import React, { useEffect } from "react";
interface IconButtonProps {
  title: string;
  icon: React.ReactNode;
  darkIcon: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ title, icon, darkIcon }) => {
  return (
    <button className="inline-flex p-5 justify-center items-center gap-4 rounded-lg uppercase dark:bg-codgray bg-gray bg-opacity-30 dark:text-white text-black hover:dark:bg-prime hover:bg-black hover:dark:text-black hover:text-white focus:dark:bg-prime focus:bg-black focus:dark:text-black focus:text-white">
      <div className="hidden dark:block">{icon}</div>
      <div className="block dark:hidden">{darkIcon}</div>
      {title}
    </button>
  );
};

export default IconButton;
