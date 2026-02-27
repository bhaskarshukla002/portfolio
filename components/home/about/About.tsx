import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
        <Reveal>
  <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
    I&apos;m Bhaskar Shukla, a Computer Science graduate and currently working as a Software Engineer specializing in Azure Cloud Monitoring, ITOM, and Automation.
    {/* <br/><br/> * I work on designing and optimizing enterprise-grade Azure monitoring architectures, implementing alert-to-incident automation, and improving system observability across hybrid cloud environments. I’ve successfully reduced alert noise by over 70% and automated monitoring onboarding for 300+ virtual machines using Azure Policies.
  </p>  <p className={styles.aboutText}> 
  I’m Bhaskar Shukla, a Software Engineer specializing in Azure Cloud Monitoring, ITOM, and Automation. */} 
  I design and optimize monitoring architectures, implement alert-to-incident automation, and improve system observability across hybrid environments.
</p>
</Reveal>

<Reveal>
  <p className={styles.aboutText}>
    My expertise includes Azure Monitor, Log Analytics, Data Collection Rules (DCR), BMC Discovery pattern development, and multi-tool monitoring platforms like SolarWinds, Site24x7, and EvolveOps.ai.
  </p>
</Reveal>

<Reveal>
  <p className={styles.aboutText}>
    Beyond monitoring, I have a strong foundation in infrastructure, DevOps tools, and cloud governance including Linux, Windows Server, Terraform, Ansible, Kubernetes, and CI/CD pipelines.
  </p>
</Reveal>
<Reveal>
  <p className={styles.aboutText}>
    When I&apos;m not optimizing cloud systems, I enjoy solving challenging LeetCode problems and continuously expanding my expertise in Azure and system design. I&apos;m always open to learning, growing, and taking on impactful engineering challenges.
  </p>
</Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
