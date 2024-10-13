import React, { useState, useEffect } from "react";
import SearchableDropdown from "@/components/Search/SearchableDropdown";
import RadiusButton from "@/components/RadiusButton";
import RadiusButtonArrow from "@/components/RadiusButtonArrow";
// import SearchBox from "@/components/Search";

import stacks from "@/constants/stacks";
import projectData from "@/constants/projects";

const Project = () => {
  const projects = projectData.projects;
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const [value, setValue] = useState<string | null>(null);

  const filterProjects = (value: string) => {
    if (value === "All Stacks" || !value) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.stack.toLowerCase() === value.toLowerCase()
      );
      setFilteredProjects(filtered);
    }
  };

  const handleFilter = (stack: string) => {
    if (stack) {
      filterProjects(stack);
    } else {
      setFilteredProjects(projects);
    }
  };

  useEffect(() => {
    if (value) {
      handleFilter(value);
    } else {
      setFilteredProjects(projects);
    }
  }, [value]);

  return (
    <>
      <div className="px-5 py-14 md:px-12 ">
        <div className="flex flex-col items-start gap-10 md:flex-row md:justify-center md:items-center md:self-stretch">
          <p className="text-6xl md:text-9xl dark:text-white text-black font-normal md:tracking-wider">
            Projects
          </p>
        </div>
        <div className="flex flex-col gap-8 my-8 md:mt-16 md:mb-12 md:grid md:grid-cols-2 md:gap-40">
          {/* <SearchBox
            options={stacks}
            placeholder="SEARCH BY TECH STACK"
            className="border-customGray md:order-2 relative"
            onChange={handleSearch}
            value={searchItem}
          /> */}
          <SearchableDropdown
            options={stacks}
            label="name"
            id="id"
            selectedVal={value}
            placeholder="SEARCH BY TECH STACK"
            handleChange={(val) => setValue(val)}
            className="border-customGray md:order-2 relative"
          />
          <div className="flex flex-row justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-6 md:order-1">
            <RadiusButton
              title="WEB"
              className="w-1/4 sm:w-1/4 md:w-1/3 lg:w-1/4"
              onClick={() => handleFilter("WEB")}
            />
            <RadiusButton
              title="MOBILE"
              className="w-1/4 sm:w-1/4 md:w-1/3 lg:w-1/4"
              onClick={() => handleFilter("MOBILE")}
            />
            <RadiusButton
              title="WEB3"
              className="w-1/4 sm:w-1/4 md:w-1/3 lg:w-1/4"
              onClick={() => handleFilter("WEB3")}
            />
            <RadiusButton
              title="AI"
              className="w-1/4 sm:w-1/4 md:w-1/3 lg:w-1/4"
              onClick={() => handleFilter("AI")}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 md:gap-12">
          {filteredProjects.map((project) => (
            <div key={project.id}>
              <a href={project.href} className="group flex flex-col h-full">
                <div className="relative w-full h-100 md:h-100 lg:h-110 xl:h-120 overflow-hidden rounded-xl border border-imageBorderColor">
                  <img
                    src={project.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    alt={project.name}
                  />
                  <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                    {project.tags.map((tagName, index) => (
                      <div
                        key={index}
                        className="flex px-3 py-1 justify-center items-center tag"
                      >
                        <p className="text-white text-sm">{tagName}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="mt-6 text-2xl dark:text-white text-black">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-base text-contactTitle">
                    {project.description}
                  </p>
                  <div className="mt-auto">
                    <RadiusButtonArrow title="VIEW" className="mt-6 w-24" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
