import Project_1 from "../assets/resource/project1.png";
import Project_2 from "../assets/resource/project2.png";
import Project_3 from "../assets/resource/project3.png";
import Project_4 from "../assets/resource/project4.png";
import Project_5 from "../assets/resource/project5.png";

import { ProjectData } from "@/types";
const projectData: ProjectData = {
  projects: [
    {
      id: 1,
      name: "Fusion Web",
      href: "#",
      description:
        "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.",
      imageSrc: Project_1,
      tags: ["HTML", "JAVA", "SQL"],
      stack: "web"
    },
    {
      id: 2,
      name: "Payrole Inc.",
      href: "#",
      description:
        "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.",
      imageSrc: Project_2,
      tags: ["Andoid", "JAVA", "Flutter", "Expo"],
      stack: "mobile"
    },
    {
      id: 3,
      name: "Focus Paper Refill",
      href: "#",
      description:
        "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.",
      imageSrc: Project_3,
      tags: ["HTML", "JavaScript", "SQL"],
      stack: "web3"
    },
    {
      id: 4,
      name: "Machined Mechanical Pencil",
      href: "#",
      description:
        "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.",
      imageSrc: Project_4,
      tags: ["Python", "ML", "DL"],
      stack: "ai"
    },
    {
      id: 5,
      name: "Fusion Web",
      href: "#",
      description:
        "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.",
      imageSrc: Project_5,
      tags: ["HTML", "JAVA", "SQL"],
      stack: "web"
    }
  ]
};

export default projectData;
