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
import data from '@/data';

function Skills() {
    const marqueeRows = data.skills.marquee?.[0] ?? [];

    return (
        <section id="skills" className="section-wrapper">
            <SectionHeader title="Skills & Expertise" dir="r" />

            <IconContext.Provider value={{ color: "#ff0000", size: "70" }}>

                <div className={styles.experties}>
                    {data.skills.sections.map((section) => (
                        <div key={section.title} className={styles.expertiesSections}>
                            <Reveal>
                                <div className={styles.expertiesHeading}>
                                    <BsCodeSlash />
                                    <div className={styles.expertiesHeadingText}>{section.title}</div>
                                </div>
                            </Reveal>
                            <Reveal>
                                <p className={styles.skillsAbout}>{section.description}</p>
                            </Reveal>
                        </div>
                    ))}
                </div>

                {/* Skill Marquee */}
                <div className={styles.appContainer}>
                    <div className={styles.wrapper}>
                        <div className={styles.marquee}>
                            <div className={styles.marqueeGroup}>
                                        {marqueeRows.map((el) => (
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
                                {marqueeRows.map((el) => (
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