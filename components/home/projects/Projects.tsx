import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="l" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Inventory Tracking Application",
    imgSrc: "/project-imgs/agency-listing.png",
    code: "#",
    projectLink: "#",
    tech: ["Java", "Android", "SqlSever", ""],
    description: "An Inventory Tracking Application.",
    modalContent: (
      <>
        <p>
          Worked as a software developer and created dynamic reusable
          logic and base layout from a mock-up.
        </p>
        <p>
          The tech stack is based on Android with the custom native components,
          connected to a .NET backend.
        </p>
      </>
    ),
  },
  {
    title: "Portfolio",
    imgSrc: "/screenshot.png",
    code: "https://github.com/bhaskarshukla002/portfolio",
    projectLink: "https://github.com/bhaskarshukla002/portfolio",
    tech: ["React", "Styled Components", "Typescript", "Gatsby"],
    description: "Portfolio Made with next.js Tailwing css",
    modalContent: (
      <>
        <p>
          This is my First version of my portfolio that i made to showcase my
          projects.
        </p>
        <p>Trying out Animejs and creating my First portfolio</p>
      </>
    ),
  },
  
];
