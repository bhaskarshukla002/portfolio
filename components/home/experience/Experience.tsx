import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="r" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Wissen Automation India",
    position: "Software Developer Intern",
    time: "feb 2023 - april 2023",
    location: "Noida, Delhi NCR",
    description:
      "• Developed MVP for the company which then later used by manufacturing unit of more than 5 clients
      • Designed and Developed the mobile application, Server API and Database
      • Implemented TCP and UDP protocols for direct communication with the IoT device, ensuring that the result operation operates in real-time with a 100% success rate
      • Tech stack: android app using java, Rxjava, room, retrofit, MVVM and server API using asp.net framework and designed Database in SQL Server
      • whole project was a great success resulting in generating more than 20 lacs of revenue annually",
    tech: [
      "Java",
      "Android",
      "SQLServer",
      ".NET",
      "MVVM",
      "SAP",
      "Git",
    ],
  },
  // {
  //   title: "Advance Technologies Integration, LLC.",
  //   position: "Javascript Developer",
  //   time: "May 2023 - August 2023",
  //   location: "Rocklin, California 95765",
  //   description:
  //     "I help build and scale core javascript functions and created test units. Also created reusable components for the front end and Azure API integrations.",
  //   tech: ["JavaScript", "Vuejs", "Azure API", "Git", "GitLab"],
  // },
  // {
  //   title: "Advance Technologies Integration, LLC.",
  //   position: "Javascript Developer",
  //   time: "Apr 2022 - Jun 2022",
  //   location: "Rocklin, California 95765",
  //   description:
  //     "I help build and scale core javascript functions and created test units. Also created reusable components for the front end and Azure API integrations.",
  //   tech: ["JavaScript", "Vuejs", "Azure API", "Git", "GitLab"],
  // },
  // {
  //   title: "Rocky Mountain West Insurance LLC.",
  //   position: "Vuejs Developer",
  //   time: "Aug 2021 - Jan 2022",
  //   location: "Grand Junction, CO",
  //   description:
  //     "Vuejs Developer for Rocky Mountain West Insurance LLC. Created dashboard, reusable components from scratch and integrate api.",
  //   tech: ["Vuejs", "MongoDB", "Postgres", "Python", "Git", "Github"],
  // },
  // {
  //   title: "Simple Cloudology",
  //   position: "React Developer",
  //   time: "Jan 2020 - April 2021",
  //   location: "Sheridan, Wyoming",
  //   description:
  //     "Worked as a developer and created dynamic reusable components, integrate calendly, messaging functionality and project management features.",
  //   tech: [
  //     "React",
  //     "Nextjs",
  //     "Sytled Components",
  //     "Firebase Auth",
  //     "Websockets",
  //     "Calendly",
  //     "Git",
  //     "Github",
  //   ],
  // },
  // {
  //   title: "IFormat Logic",
  //   position: "Fullstack Developer",
  //   time: "Aug 2020 - Dec 2020",
  //   location: "Palanginan, Zambales",
  //   description:
  //     "Managed and created complex projects from start to finish and also collaborated with other developers. Translated requirements into polished, high-level web application.",
  //   tech: ["Vuejs", "Laravel", "Tailwind", "Git", "Github"],
  // },
];
