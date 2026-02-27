import React from 'react'
import styles from "./skills.module.scss";
import { Reveal } from '@/components/utils/Reveal';
import { SectionHeader } from '@/components/utils/SectionHeader';
import { AiFillMobile } from 'react-icons/ai';
import { CiMobile1 } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaLaptopCode } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";

function Skills() {
    const row1 = [
        'Azure Monitor', 'Log Analytics', 'Azure Policy', 'Logic Apps',
        'BMC Discovery', 'EvolveOps.ai', 'SolarWinds', 'Site24x7',
        'Data Collection Rules (DCR)', 'KQL',
        'Terraform', 'Ansible', 'Jenkins',
        'Kubernetes', 'Docker',
        'Linux', 'Windows Server',
        'Azure AD (Entra ID)', 'RBAC'
    ];

    const row2 = [
        'Azure Monitor', 'Log Analytics', 'Azure Policy', 'Logic Apps',
        'BMC Discovery', 'EvolveOps.ai', 'SolarWinds', 'Site24x7',
        'Data Collection Rules (DCR)', 'KQL',
        'Terraform', 'Ansible', 'Jenkins',
        'Kubernetes', 'Docker',
        'Linux', 'Windows Server',
        'Azure AD (Entra ID)', 'RBAC'
    ];

    return (
        <section id="skills" className="section-wrapper">
            <SectionHeader title="Skills & Expertise" dir="r" />

            <IconContext.Provider value={{ color: "#ff0000", size: "70" }}>

                <div className={styles.experties}>

                    {/* Cloud Monitoring */}
                    <div className={styles.expertiesSections}>
                        <Reveal>
                            <div className={styles.expertiesHeading}>
                                <BsCodeSlash />
                                <div className={styles.expertiesHeadingText}>
                                    Cloud Monitoring & Observability
                                </div>
                            </div>
                        </Reveal>
                        <Reveal>
                            <p className={styles.skillsAbout}>
                                Designing and optimizing Azure monitoring architectures using Azure Monitor, Log Analytics, and Data Collection Rules. 
                                Experienced in alert tuning, subscription-level alerting strategy, incident automation using Logic Apps, and log ingestion cost optimization.
                            </p>
                        </Reveal>
                    </div>

                    {/* ITOM */}
                    <div className={styles.expertiesSections}>
                        <Reveal>
                            <div className={styles.expertiesHeading}>
                                <FaReact />
                                <div className={styles.expertiesHeadingText}>
                                    ITOM & Discovery Engineering
                                </div>
                            </div>
                        </Reveal>
                        <Reveal>
                            <p className={styles.skillsAbout}>
                                BMC Discovery administration and custom pattern development, improving discovery coverage and infrastructure visibility. 
                                Experience integrating monitoring tools across hybrid environments for centralized observability.
                            </p>
                        </Reveal>
                    </div>

                    {/* Automation & DevOps */}
                    <div className={styles.expertiesSections}>
                        <Reveal>
                            <div className={styles.expertiesHeading}>
                                <CiMobile1 />
                                <div className={styles.expertiesHeadingText}>
                                    Automation & DevOps
                                </div>
                            </div>
                        </Reveal>
                        <Reveal>
                            <p className={styles.skillsAbout}>
                                Implementing policy-based VM onboarding at Management Group level, infrastructure automation using Terraform and Ansible, 
                                CI/CD with Jenkins, and container orchestration with Kubernetes and Docker.
                            </p>
                        </Reveal>
                    </div>

                </div>

                {/* Skill Marquee */}
                <div className={styles.appContainer}>
                    <div className={styles.wrapper}>
                        <div className={styles.marquee}>
                            <div className={styles.marqueeGroup}>
                                {row1.map((el) => (
                                    <div className={styles.imageGroup} key={el}>
                                        <div className={styles.shadowBox}>
                                            <Reveal>
                                                <p className={styles.image}>{el}</p>
                                            </Reveal>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.marquee}>
                            <div className={styles.marqueeGroup2}>
                                {row2.map((el) => (
                                    <div className={styles.imageGroup} key={el}>
                                        <div className={styles.shadowBox}>
                                            <Reveal>
                                                <p className={styles.image}>{el}</p>
                                            </Reveal>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </IconContext.Provider>
        </section>
    )
}

export default Skills