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
    title: "Coforge",
    position: "Software Engineer (Cloud Monitoring & Automation)",
    time: "January 2025 - Present",
    location: "On-Site",
    description:
      "• Re-architected Azure monitoring post-transition by restructuring alerts from resource-level to subscription-level and correcting lookback configurations, reducing daily alert volume from 1000+ to 300+ (70% reduction) \n \
       • Optimized Log Analytics ingestion using Data Collection Rules and selective log filtering, significantly reducing workspace ingestion costs \n \
       • Automated onboarding of 300+ VMs and multiple cloud resources using built-in Azure Policies at Management Group level to deploy AMA, assign UAMI, and enable VM Insights \n \
       • Administered BMC Discovery and developed custom patterns including Oracle audit cleanup logic, improving discovery coverage from 50% to 90% and avoiding vendor costs of $25,000+ \n \
       • Worked on EvolveOps.ai, SolarWinds, and Site24x7 for centralized monitoring, alert correlation, and health validation across hybrid environments \n \
       • Contributed to development of an internal automation web portal, reducing manual operational effort by 15+ hours per week",
    tech: [
      "Azure Monitor",
      "Log Analytics",
      "Azure Policy",
      "Logic Apps",
      "BMC Discovery",
      "EvolveOps.ai",
      "SolarWinds",
      "Site24x7",
      "Ansible",
      "Terraform",
      "Jenkins",
      "Kubernetes",
      "VMware",
      "Linux",
      "Windows Server"
    ],
  },
  {
    title: "Wissen Automation India",
    position: "Software Developer Intern",
    time: "feb 2023 - april 2023",
    location: "Noida, Delhi NCR",
    description:
      "• Developed MVP for the company which then later used by manufacturing unit of more than 5 client \n • Designed and Developed the mobile application, Server API and Database \n • Implemented TCP and UDP protocols for direct communication with the IoT device, ensuring that the result operation operates in real-time with a 100% success rate \n • whole project was a great success resulting in generating more than 20 lacs of revenue annually",
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
