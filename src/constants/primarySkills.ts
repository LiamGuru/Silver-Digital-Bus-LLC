import { RiJavascriptLine } from "react-icons/ri";
import {
  FaPython,
  FaGolang,
  FaRust,
  FaJava,
  FaPhp,
  FaAws,
  FaAngular,
  FaVuejs,
  FaFigma,
  FaNodeJs,
  FaReact
} from "react-icons/fa6";
import { DiRuby, DiPhotoshop, DiSwift } from "react-icons/di";
import {
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandTypescript
} from "react-icons/tb";
import { BsFiletypeScss, BsFolder, BsFiletypeHtml } from "react-icons/bs";
import { CgCPlusPlus } from "react-icons/cg";
import {
  SiCsharp,
  SiDotnet,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiRubyonrails,
  SiSpringboot,
  SiWordpress,
  SiCloudbees,
  SiKubernetes,
  SiDocker,
  SiMysql,
  SiDatadog,
  SiRabbitmq,
  SiSkaffold,
  SiTwilio,
  SiPostgresql,
  SiMongodb,
  SiNeo4J,
  SiGraphite,
  SiMariadb,
  SiFirebase,
  SiSupabase,
  SiDart,
  SiSolidity,
  SiElectron,
  SiTauri
} from "react-icons/si";
import { BsFillSendFill } from "react-icons/bs";

import { PrimarySkillsData } from "@/types";

const primarySkillsData: PrimarySkillsData = {
  skills: [
    {
      id: 1,
      name: "Programming Language",
      description:
        "JavaScript, Typescript, C/C++, C#, Python, Solidity, Go, Rust, Java, Ruby, PHP, HTML.",
      lang: [
        "JavaScript",
        "Typescript",
        "C/C++",
        "C#",
        "Python",
        "Solidity",
        "Go",
        "Rust",
        "Java",
        "Ruby",
        "PHP",
        "HTML"
      ],
      icons: [
        RiJavascriptLine,
        TbBrandTypescript,
        CgCPlusPlus,
        SiCsharp,
        FaPython,
        SiSolidity,
        FaGolang,
        FaRust,
        FaJava,
        DiRuby,
        FaPhp,
        BsFiletypeHtml
      ]
    },
    {
      id: 2,
      name: "Frontend",
      description:
        "For the front end we use many software to make it more immersive and intuitive development. Such as:",
      lang: [
        "ReactJs",
        "AngularJs",
        "VueJs",
        "NextJs",
        "Electron",
        "Tauri",
        "Figma",
        "SCSS",
        "Photoshop",
        "WireFrame"
      ],
      icons: [
        FaReact,
        FaAngular,
        FaVuejs,
        TbBrandNextjs,
        SiElectron,
        SiTauri,
        FaFigma,
        BsFiletypeScss,
        DiPhotoshop,
        BsFolder
      ]
    },
    {
      id: 3,
      name: "Mobile",
      description: "React Native, Swift, Dart.",
      lang: ["React Native", "Swift", "Dart"],
      icons: [TbBrandReactNative, DiSwift, SiDart]
    },
    {
      id: 4,
      name: "Backend",
      description:
        "Node.js, ASP.NET, FastAPI, Flask, Django, Ruby on Rails, Java Spring Boot, WordPress.",
      lang: [
        "NodeJs",
        "ASP.NET",
        "FastAPI",
        "Flask",
        "Django",
        "Ruby on Rails",
        "Java Spring Boot",
        "WordPress"
      ],
      icons: [
        FaNodeJs,
        SiDotnet,
        SiFastapi,
        SiFlask,
        SiDjango,
        SiRubyonrails,
        SiSpringboot,
        SiWordpress
      ]
    },
    {
      id: 5,
      name: "Database",
      description:
        "MySQL, PostgreSQL, MongoDB, Neo4js, GraphDB, RethinkDB, MariaDB, Firebase, Supabase",
      lang: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Neo4js",
        "GraphDB",
        "MariaDB",
        "Firebase",
        "Supabase"
      ],
      icons: [
        SiMysql,
        SiPostgresql,
        SiMongodb,
        SiNeo4J,
        SiGraphite,
        SiMariadb,
        SiFirebase,
        SiSupabase
      ]
    },
    {
      id: 6,
      name: "Cloud",
      description: "AWS, GCP, Kubernetes, Docker",
      lang: ["AWS", "CloudBees", "Kubernetes", "Docker"],
      icons: [FaAws, SiCloudbees, SiKubernetes, SiDocker]
    },
    {
      id: 7,
      name: "Services",
      description: "Datadog, RabbitMQ, Kaffka, SendGrid, Twilio",
      lang: ["Datadog", "RabbitMQ", "Kaffka", "SendGrid", "Twilio"],
      icons: [SiDatadog, SiRabbitmq, SiSkaffold, BsFillSendFill, SiTwilio]
    }
  ]
};

export default primarySkillsData;
