import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="px-5 py-4 md:px-12 md:pt-8 md:pb-40">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:self-stretch">
          <p className="text-6xl text-center md:text-9xl dark:text-white text-black font-normal md:tracking-wider">
            Contact
          </p>
        </div>

        <div className="md:mt-8 md:grid md:grid-cols-9 md:gap-10 xl:gap-24">
          <div className="md:col-span-5 flex flex-col justify-between">
            <form action="#" method="POST" className="flex flex-col gap-6">
              <div className="flex flex-col items-start gap-4">
                <label
                  htmlFor="name"
                  className="block text-lg dark:text-white text-black"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="organization"
                  placeholder="Your Name"
                  className="block w-full pl-3 py-3 text-lg tracking-widest rounded-100 border dark:border-radiusButtonBorderColorWhite border-radiusButtonBorderColorBlack dark:text-white text-black hover:border-black hover:dark:border-white focus:dark:border-white focus:border-black  dark:placeholder:text-white placeholder:text-black dark:bg-black bg-white focus:outline-none"
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <label
                  htmlFor="email"
                  className="block text-lg dark:text-white text-black"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="organization"
                  placeholder="Your Email"
                  className="block w-full pl-3 py-3 text-lg tracking-widest rounded-100 border dark:border-radiusButtonBorderColorWhite border-radiusButtonBorderColorBlack dark:text-white text-black hover:border-black hover:dark:border-white focus:dark:border-white focus:border-black  dark:placeholder:text-white placeholder:text-black dark:bg-black bg-white focus:outline-none"
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <label
                  htmlFor="message"
                  className="block text-lg dark:text-white text-black"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={15}
                  placeholder="Tell us about your brilliant ideas here..."
                  className="block w-full pl-3 py-3 text-lg tracking-widest rounded-25 border dark:border-radiusButtonBorderColorWhite border-radiusButtonBorderColorBlack dark:text-white text-black hover:border-black hover:dark:border-white focus:dark:border-white focus:border-black  dark:placeholder:text-white placeholder:text-black dark:bg-black bg-white focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="flex w-2/5 px-4 py-3 justify-center items-center gap-2 rounded-100 bg-darkblue text-white text-lg font-semibold mt-auto"
              >
                SUBMIT
              </button>
            </form>
          </div>

          <div className="md:col-span-4 flex flex-col justify-between my-12 md:my-0 md:h-full">
            <div className="flex flex-col justify-between gap-6 md:h-full">
              {/* Fixed top element */}
              <p className="text-3xl dark:text-white text-black">
                Send us more about your brilliant projects:
              </p>

              {/* Flexible container that adjusts gaps between items */}
              <div className="flex flex-col gap-4 md:flex-grow md:mt-8">
                <div className="flex flex-col gap-6 p-6 md:p-8 bg-contactBgLight dark:bg-contactBgDark rounded-2xl">
                  <p className="text-2xl text-contactTitle">Email:</p>
                  <p className="text-2xl md:text-4xl dark:text-white text-black underline break-all hover:dark:text-prime hover:text-prime cursor-pointer">
                    hello@silverdigital.bus
                  </p>
                </div>

                {/* Automatically adjusting gap between these two elements */}
                <div className="flex flex-col md:mt-auto gap-6 p-6 md:p-8 bg-contactBgLight dark:bg-contactBgDark rounded-2xl">
                  <p className="text-2xl text-contactTitle">Address:</p>
                  <p className="text-2xl md:text-4xl dark:text-white text-black">
                    ORLANDO, FL 32806
                  </p>
                </div>

                <div className="flex flex-col md:mt-auto gap-6 p-6 md:p-8 bg-contactBgLight dark:bg-contactBgDark rounded-2xl">
                  <p className="text-2xl text-contactTitle">
                    Follow our socials:
                  </p>
                  <NavLink
                    to="#"
                    className="text-2xl md:text-4xl dark:text-white text-black underline hover:dark:text-prime hover:text-prime cursor-pointer"
                  >
                    Behance
                  </NavLink>
                  <NavLink
                    to="#"
                    className="text-2xl md:text-4xl dark:text-white text-black underline hover:dark:text-prime hover:text-prime cursor-pointer"
                  >
                    Dribbble
                  </NavLink>
                  <NavLink
                    to="#"
                    className="text-2xl md:text-4xl dark:text-white text-black underline hover:dark:text-prime hover:text-prime cursor-pointer"
                  >
                    LinkedIn
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
