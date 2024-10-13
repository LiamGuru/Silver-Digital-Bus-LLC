import { HiOutlineUserGroup } from "react-icons/hi2";
import { GiAlarmClock } from "react-icons/gi";
import { GrAttachment } from "react-icons/gr";
import { FaAward } from "react-icons/fa6";
import { RiShieldStarFill } from "react-icons/ri";
import { BsDisplay } from "react-icons/bs";

import { CardData } from "@/types";

const cardData: CardData = {
  cards: [
    {
      title: "Complete Product Team",
      description:
        "Access Business Analysts, Product Designers, Project Managers, QA Engineers, DevOps, or Full-stack developers.",
      icon: HiOutlineUserGroup,
      darkIcon: HiOutlineUserGroup
    },
    {
      title: "Fast Iteration & Frequent Releases",
      description:
        "Pre-build components and our own templates let our team deliver more in each sprint - this is the perk of having such experienced web developers on board.",
      icon: GiAlarmClock,
      darkIcon: GiAlarmClock
    },
    {
      title: "Business-tailored architecture",
      description:
        "Always designed and developed with your company’s growth and the product’s scalability in mind.",
      icon: GrAttachment,
      darkIcon: GrAttachment
    },
    {
      title: "Thorough Quality Assurance",
      description:
        "We do QA before each deploy through manual and automated tests that catch bugs, performance issues, and conversion blockers.",
      icon: FaAward,
      darkIcon: FaAward
    },
    {
      title: "Scalable & Secure Infrastructure",
      description:
        "Web development services full of custom solutions optimized for efficiency, flexibility, and deployment speed.",
      icon: RiShieldStarFill,
      darkIcon: RiShieldStarFill
    },
    {
      title: "World-class UI/UX",
      description:
        "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression. Designed to help your business with user adoption.",
      icon: BsDisplay,
      darkIcon: BsDisplay
    }
  ]
};

export default cardData;
