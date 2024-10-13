import RadiusButton from "@/components/RadiusButton";
import SearchBox from "@/components/Search";

import ArrowRightUpIcon from "../../assets/icon/ArrowRightUp.png";
import ArrowRightUpIconDark from "../../assets/icon/ArrowRightUpDark.png";
import ProcessBar from "../../assets/icon/process.svg";
import ProcessBarDark from "../../assets/icon/progressDark.svg";
import Award from "../../assets/resource/award.png";
import Avatar_1 from "../../assets/avatar/avatar1.png";
import Avatar_2 from "../../assets/avatar/avatar2.png";
import Avatar_3 from "../../assets/avatar/avatar3.png";
import Avatar_4 from "../../assets/avatar/avatar4.png";
import Avatar_5 from "../../assets/avatar/avatar5.png";
import Avatar_6 from "../../assets/avatar/avatar6.png";
const FeedBack = () => {
  return (
    <>
      <div className="px-5 py-4 md:px-12">
        <div className="flex flex-col items-start gap-10 md:flex-row md:justify-center md:items-center md:self-stretch xl:px-60">
          <p className="text-6xl text-center md:text-9xl dark:text-white text-black font-normal md:tracking-wider">
            What Our Client Think of Us
          </p>
        </div>
        <div className="relative mt-6 md:pb-24 flex justify-center md:mt-16">
          <img className="w-full" src={Award} alt="Award" />
          <div
            className="absolute top-0 right-0"
            style={{
              transform: "translate(0, -45%)"
            }}
          >
            <span className="hidden dark:flex">
              <img
                src={ArrowRightUpIcon}
                alt="Arrow Right Up"
                className="w-[5vw] h-auto max-w-20 max-h-20 object-cover"
              />
            </span>
            <span className="flex dark:hidden">
              <img
                src={ArrowRightUpIconDark}
                alt="Arrow Right Up Dark"
                className="w-[5vw] h-auto max-w-20 max-h-20 object-cover"
              />
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-14 md:mt-20">
          <div className="hidden dark:block">
            <ProcessBar />
          </div>
          <div className="block dark:hidden">
            <ProcessBarDark />
          </div>
          <div className="flex flex-col justify-center items-center pt-10 md:pt-12 md:px-28 md:pb-24 lg:px-40">
            <p className="text-center text-2xl tracking-tighter md:text-5xl md:tracking-tighter dark:text-white text-black ">
              I had the pleasure of working with Ivan on a recent project, and I
              was blown away by their creativity and attention to detail. I
              highly recommend Silver Digital Bus for anyone looking for a
              talented and professional software developer.
            </p>
            <div className="mt-8 md:mt-16 w-16 h-16">
              <img src={Avatar_1} className="rounded-full" />
            </div>
            <span className="mt-7 md:mt-9 flex md:justify-end dark:text-white text-black md:text-2xl">
              <span className="flex text-center md:text-start md:font-medium">
                Jacob McDany
                <span className="text-contactTitle md:font-normal">
                  , CEO of Rackspace
                </span>
              </span>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-8 my-8 md:mt-16 md:mb-12 md:grid md:grid-cols-2 md:gap-40">
          <SearchBox
            placeholder="SEARCH BY TECH STACK"
            className="border-customGray md:order-2"
          />

          <div className="flex flex-row justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-6 md:order-1">
            <RadiusButton
              title="NEWEST"
              className="w-1/4 sm:w-1/4 md:w-1/3 lg:w-1/4"
            />
            <RadiusButton
              title="WEB"
              className="w-1/4 sm:w-1/4 md:w-1/3 lg:w-1/4"
            />
            <RadiusButton
              title="MOBILE"
              className="w-1/4 sm:w-1/4 md:w-1/3 lg:w-1/4"
            />
            <RadiusButton
              title="WEB3"
              className="w-1/4 sm:w-1/4 md:w-1/3 lg:w-1/4"
            />
            <RadiusButton
              title="AI"
              className="w-1/4 sm:w-1/4 md:w-1/3 lg:w-1/4"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="py-6 md:py-12 flex flex-col items-start border-b border-solid border-gray">
            <p className="text-2xl md:text-4xl dark:text-white text-black">
              Awesome Job!!
            </p>
            <p className="text-contactTitle text-2xl md:text-4xl">
              I had the pleasure of working with Ivan on a recent project, and I
              was blown away by their creativity and attention to detail. I
              highly recommend Silver Digital Bus for anyone looking for a
              talented and professional software developer.
            </p>
            <div className="mt-5 md:mt-6 flex gap-7">
              <div className="flex items-center">
                <img
                  src={Avatar_2}
                  className="w-9 h-9 md:w-16 md:h-16 rounded-full"
                />
              </div>
              <div>
                <p className="text-base md:text-2xl font-medium dark:text-white text-black">
                  Amandha gUilre
                </p>
                <p className="text-base md:text-2xl font-normal text-contactTitle">
                  CEO of Rackspace
                </p>
              </div>
            </div>
          </div>
          <div className="py-6 md:py-12 flex flex-col items-start border-b border-solid border-gray">
            <p className="text-2xl md:text-4xl dark:text-white text-black">
              I can’t compare!
            </p>
            <p className="text-contactTitle text-2xl md:text-4xl">
              I highly recommend Silver Digital Bus for anyone looking for a
              talented and professional software developer.
            </p>
            <div className="mt-5 md:mt-6 flex gap-7">
              <div className="flex items-center">
                <img
                  src={Avatar_3}
                  className="w-9 h-9 md:w-16 md:h-16 rounded-full"
                />
              </div>
              <div>
                <p className="text-base md:text-2xl font-medium dark:text-white text-black">
                  Harry ahmed
                </p>
                <p className="text-base md:text-2xl font-normal text-contactTitle">
                  CEO of Rackspace
                </p>
              </div>
            </div>
          </div>
          <div className="py-6 md:py-12 flex flex-col items-start border-b border-solid border-gray">
            <p className="text-2xl md:text-4xl dark:text-white text-black">
              Nice job!
            </p>
            <p className="text-contactTitle text-2xl md:text-4xl">
              I had the pleasure of working with Ivan on a recent project, and I
              was blown away by their creativity and attention to detail. I
              highly recommend Silver Digital Bus for anyone looking for a
              talented and professional software developer.
            </p>
            <div className="mt-5 md:mt-6 flex gap-7">
              <div className="flex items-center">
                <img
                  src={Avatar_4}
                  className="w-9 h-9 md:w-16 md:h-16 rounded-full"
                />
              </div>
              <div>
                <p className="text-base md:text-2xl font-medium dark:text-white text-black">
                  Amandha gUilre
                </p>
                <p className="text-base md:text-2xl font-normal text-contactTitle">
                  CEO of Rackspace
                </p>
              </div>
            </div>
          </div>
          <div className="py-6 md:py-12 flex flex-col items-start border-b border-solid border-gray">
            <p className="text-2xl md:text-4xl dark:text-white text-black">
              Awesome Job!!
            </p>
            <p className="text-contactTitle text-2xl md:text-4xl">
              I had the pleasure of working with Ivan on a recent project, and I
              was blown away by their creativity and attention to detail. I
              highly recommend Silver Digital Bus for anyone looking for a
              talented and professional software developer.
            </p>
            <div className="mt-5 md:mt-6 flex gap-7">
              <div className="flex items-center">
                <img
                  src={Avatar_5}
                  className="w-9 h-9 md:w-16 md:h-16 rounded-full"
                />
              </div>
              <div>
                <p className="text-base md:text-2xl font-medium dark:text-white text-black">
                  Germondudh
                </p>
                <p className="text-base md:text-2xl font-normal text-contactTitle">
                  CEO of Rackspace
                </p>
              </div>
            </div>
          </div>
          <div className="py-6 md:py-12 flex flex-col items-start border-b border-solid border-gray">
            <p className="text-2xl md:text-4xl dark:text-white text-black">
              Awesome Job!!
            </p>
            <p className="text-contactTitle text-2xl md:text-4xl">
              I had the pleasure of working with Ivan on a recent project, and I
              was blown away by their creativity and attention to detail. I
              highly recommend Silver Digital Bus for anyone looking for a
              talented and professional software developer.
            </p>
            <div className="mt-5 md:mt-6 flex gap-7">
              <div className="flex items-center">
                <img
                  src={Avatar_6}
                  className="w-9 h-9 md:w-16 md:h-16 rounded-full"
                />
              </div>
              <div>
                <p className="text-base md:text-2xl font-medium dark:text-white text-black">
                  Qlchemy Hunti
                </p>
                <p className="text-base md:text-2xl font-normal text-contactTitle">
                  CEO of Rackspace
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedBack;
