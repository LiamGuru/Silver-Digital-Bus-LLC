import React from "react";
interface RadiusButtonProps {
  title: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const RadiusButton: React.FC<RadiusButtonProps> = ({
  title,
  className,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex px-4 py-3 justify-center items-center gap-2 rounded-100 border dark:border-radiusButtonBorderColorWhite border-radiusButtonBorderColorBlack dark:text-white text-black hover:border-black hover:dark:border-white focus:dark:border-white focus:border-black ${className}`}
    >
      {title}
    </button>
  );
};

export default RadiusButton;
