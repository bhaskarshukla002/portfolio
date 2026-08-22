import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";
import data from "@/data";
// import Profile from "@/public/inventory-app.png";
// import Profile from "@/public/inventory-app.png";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="l" />

      <div className={styles.projects}>
        {data.projects.map((project) => {
          // project.image is a public path (string)
          return (
            <Project
              key={project.title}
              {...project}
              // @ts-ignore allow string image path
              imgSrc={project.image}
            />
          );
        })}
      </div>
    </section>
  );
};


