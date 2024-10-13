import { Link, NavLink, useNavigate } from "react-router-dom";
import LogoIcon from "../../assets/logo/logo.svg";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div
      id="footer"
      className="px-5 py-8 md:px-12 md:pt-24 md:pb-16 md:gap-3 dark:bg-black bg-white relative z-10"
    >
      <div className="flex flex-col items-center md:grid md:grid-cols-4">
        <div className="flex flex-col text-center gap-8 md:text-start md:col-span-2">
          <Link
            className="flex justify-center md:justify-start items-center gap-2"
            to="/"
          >
            <LogoIcon />
            <span className="flex items-center gap-1 group hover:dark:text-prime hover:text-prime">
              <p className="text-2xl md:text-4xl dark:text-white text-black font-semibold group-hover:text-prime">
                Silver
              </p>
              <p className="text-2xl md:text-4xl dark:text-white text-black font-extralight group-hover:text-prime">
                Digital Bus LLC
              </p>
            </span>
          </Link>
          <span className="text-gray text-xl font-normal uppercase">
            Registered on
            <p className="dark:text-white text-black text-lg font-normal md:text-xl md:font-medium">
              2875 S Orange Ave STE500 NUM 6779
            </p>
          </span>
          <Link
            to="#"
            className="dark:text-white text-black text-lg font-normal md:text-xl md:font-medium underline hover:text-prime hover:dark:text-prime"
          >
            hello@silverdigital.bus
          </Link>
        </div>

        <div className="flex flex-col text-center mt-8 gap-6 md:text-start md:col-span-1 md:mt-0 md:gap-8 md:items-start">
          <p className="text-gray text-xl font-normal uppercase">pages</p>
          <Link
            to="/"
            className="dark:text-white text-black text-sm font-medium uppercase hover:text-prime hover:dark:text-prime"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="dark:text-white text-black text-sm font-medium uppercase hover:text-prime hover:dark:text-prime"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="dark:text-white text-black text-sm font-medium uppercase hover:text-prime hover:dark:text-prime"
          >
            About
          </Link>
        </div>

        <div className="flex flex-col text-center items-center mt-8 gap-6 md:text-start md:col-span-1 md:mt-0 md:gap-8 md:items-start">
          <p className="text-gray text-xl font-normal uppercase">
            Utility Pages
          </p>
          <Link
            to="/contact"
            className="dark:text-white text-black text-sm font-medium uppercase hover:text-prime hover:dark:text-prime"
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className="dark:text-white text-black text-sm font-medium uppercase hover:text-prime hover:dark:text-prime"
          >
            Blogs
          </Link>
          <Link
            to="/career"
            className="dark:text-white text-black text-sm font-medium uppercase hover:text-prime hover:dark:text-prime"
          >
            Careers
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-12 mt-8 md:grid md:grid-cols-3 md:mt-24">
        <span className="flex justify-center md:justify-start text-gray text-sm font-medium uppercase order-3 md:order-none">
          © 2024 Silver Digital Bus
        </span>
        <span className="flex justify-center gap-10 order-1 md:order-none">
          <Link
            to="#"
            className="dark:text-white text-black text-base font-normal uppercase hover:text-prime hover:dark:text-prime"
          >
            Behance
          </Link>
          <Link
            to="#"
            className="dark:text-white text-black text-base font-normal uppercase hover:text-prime hover:dark:text-prime"
          >
            Dribbble
          </Link>
          <Link
            to="#"
            className="dark:text-white text-black text-base font-normal uppercase hover:text-prime hover:dark:text-prime"
          >
            LinkedIn
          </Link>
        </span>
        <span className="flex justify-center md:justify-end text-gray text-sm font-medium uppercase order-2 md:order-none">
          <span className="flex flex-col text-center md:text-start">
            For assistance you may call us at:
            <span className="dark:text-white text-black">
              ORLANDO, FL 32806
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
