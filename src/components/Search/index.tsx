import React from "react";
interface SearchBoxProps {
  placeholder: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder,
  className,
  onChange,
  value
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
        <span className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="fill-current dark:text-white"
          >
            <path
              d="M16.3638 14.4694C16.0709 14.1765 15.596 14.1765 15.3031 14.4694C15.0102 14.7623 15.0102 15.2372 15.3031 15.5301L16.3638 14.4694ZM18.6364 18.8634C18.9293 19.1563 19.4041 19.1563 19.697 18.8634C19.9899 18.5705 19.9899 18.0956 19.697 17.8027L18.6364 18.8634ZM15.3031 15.5301L18.6364 18.8634L19.697 17.8027L16.3638 14.4694L15.3031 15.5301ZM9.16675 15.083C5.43883 15.083 2.41675 12.0609 2.41675 8.33301H0.916748C0.916748 12.8894 4.6104 16.583 9.16675 16.583V15.083ZM15.9167 8.33301C15.9167 12.0609 12.8947 15.083 9.16675 15.083V16.583C13.7231 16.583 17.4167 12.8894 17.4167 8.33301H15.9167ZM9.16675 1.58301C12.8947 1.58301 15.9167 4.60509 15.9167 8.33301H17.4167C17.4167 3.77666 13.7231 0.0830078 9.16675 0.0830078V1.58301ZM9.16675 0.0830078C4.6104 0.0830078 0.916748 3.77666 0.916748 8.33301H2.41675C2.41675 4.60509 5.43883 1.58301 9.16675 1.58301V0.0830078Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
      <input
        name="search"
        type="input"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        className="block w-full pl-14 py-3 text-lg tracking-widest rounded-100 border dark:border-radiusButtonBorderColorWhite border-radiusButtonBorderColorBlack dark:text-white text-black hover:border-black hover:dark:border-white focus:dark:border-white focus:border-black  dark:placeholder:text-white placeholder:text-black dark:bg-black bg-white focus:outline-none"
      />
    </div>
  );
};

export default SearchBox;
