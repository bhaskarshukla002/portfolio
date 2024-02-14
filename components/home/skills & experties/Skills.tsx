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
        'Java', 'Kotlin', 'SQL', 'C++', 'HTML', 'CSS', 'JavaScript',
        'MySQL', 'SQLite', 'Firebase', 'SQL Server',
        'GitHub', 'Bitbucket',
        'Android', 'J2SE', 'J2EE',
        'Gradle', 'Android SDK', 'RESTful services'
    ];

    const row2 = [
        'Java', 'Kotlin', 'SQL', 'C++', 'HTML', 'CSS', 'JavaScript',
        'MySQL', 'SQLite', 'Firebase', 'SQL Server',
        'GitHub', 'Bitbucket',
        'Android', 'J2SE', 'J2EE',
        'Gradle', 'Android SDK', 'RESTful services'
    ];

    return (
        <section id="skills" className="section-wrapper">
            <SectionHeader title="Skills" dir="r" />
            <IconContext.Provider value={{ color: "#ff0000", className: "global-class-name", size: "70" }}>
                <div className={styles.experties}>
                    <div className={styles.expertiesSection}>
                        <Reveal>
                            <div className={styles.expertiesHeading}>
                                <BsCodeSlash />
                                <div className={styles.expertiesHeadingText}>
                                    Software Development
                                </div>
                            </div>
                        </Reveal>
                        <Reveal>
                            <p className={styles.skillsAbout}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti architecto ipsum fuga obcaecati nemo? Obcaecati est nihil aliquam placeat autem?
                            </p>
                        </Reveal>
                    </div>
                    <div className={styles.expertiesSection}>
                        <Reveal>
                            <div className={styles.expertiesHeading}>
                                <FaReact />
                                <div className={styles.expertiesHeadingText}>
                                    Web Frontend Dev
                                    React,NextJS
                                </div>
                            </div>
                        </Reveal>
                        <Reveal>
                            <p className={styles.skillsAbout}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti architecto ipsum fuga obcaecati nemo? Obcaecati est nihil aliquam placeat autem?
                            </p>
                        </Reveal>
                    </div>
                    <div className={styles.expertiesSection}>
                        <Reveal>
                            <div className={styles.expertiesHeading}>
                                <CiMobile1 />
                                <div className={styles.expertiesHeadingText}>
                                    Mobile Dev
                                    Android,ios
                                </div>
                            </div>
                        </Reveal>
                        <Reveal>
                            <p className={styles.skillsAbout}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti architecto ipsum fuga obcaecati nemo? Obcaecati est nihil aliquam placeat autem?
                            </p>
                        </Reveal>
                    </div>
                </div>
                <div className={styles.appContainer}>
                    <div className={styles.wrapper}>
                        <div className={styles.marquee}>
                            <div className={styles.marqueeGroup}>

                                {row1.map((el) => (
                                    <div className={styles.imageGroup} key={el}>
                                        <Reveal>
                                            <p className={styles.image}>{el}</p>
                                        </Reveal>
                                    </div>
                                ))}

                            </div>
                            {/* <MarqueeGroup>
                                {row1.map((el) => (
                                    <ImageGroup>
                                        <Image >{el}</Image>
                                    </ImageGroup>
                                ))}
                            </MarqueeGroup> */}
                        </div>
                        <div className={styles.marquee}>
                            <div className={styles.marqueeGroup2}>
                                {row2.map((el) => (
                                    <div className={styles.imageGroup} key={el}>
                                        <Reveal>
                                            <p className={styles.image}>{el}</p>
                                        </Reveal>
                                    </div>
                                ))}
                            </div>
                            {/* <MarqueeGroup2>
                                {row2.map((el) => (
                                    <ImageGroup>
                                        <Image >{el}</Image>
                                    </ImageGroup>
                                ))}
                            </MarqueeGroup2> */}
                        </div>
                    </div>
                </div>
            </IconContext.Provider>
        </section>
    )
}

export default Skills