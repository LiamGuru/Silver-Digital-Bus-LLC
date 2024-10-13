import React from "react";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Newest from "./Newest";
import PrimaryDevSkill from "./PrimaryDevSkill";
import ContentCard from "./ContentCard";
import Process from "./Process";
import LandingFeedBack from "./LandingFeedBack";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Newest />
      <PrimaryDevSkill />
      <ContentCard />
      <Process />
      <LandingFeedBack />
    </>
  );
};

export default Home;
