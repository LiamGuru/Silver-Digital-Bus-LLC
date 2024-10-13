import { createBrowserRouter } from "react-router-dom";

import Layout from "@/layout";
import HomeRoutes from "./HomeRoute";
import ProjectRoutes from "./ProjectsRoute";
import SkillRoutes from "./SkillRoute";
import FeedBackRoutes from "./FeedBackRoute";
import TeamRoutes from "./TeamRoute";
import ContactRoutes from "./ContactRoute";

import Page404 from "@/pages/Page404";

let routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Page404 />,
    children: HomeRoutes
  },
  {
    path: "/projects",
    element: <Layout />,
    errorElement: <Page404 />,
    children: ProjectRoutes
  },
  {
    path: "/skill",
    element: <Layout />,
    errorElement: <Page404 />,
    children: SkillRoutes
  },
  {
    path: "/feedback",
    element: <Layout />,
    errorElement: <Page404 />,
    children: FeedBackRoutes
  },
  {
    path: "/team",
    element: <Layout />,
    errorElement: <Page404 />,
    children: TeamRoutes
  },
  {
    path: "/contact",
    element: <Layout />,
    errorElement: <Page404 />,
    children: ContactRoutes
  }
]);

export default routes;
