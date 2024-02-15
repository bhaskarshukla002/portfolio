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
              Howdy! I&apos;m Bhaskar Shukla, and I&apos;m a Bachelor of Technology in Computer Science and Engineering.
              <br/><br/>
              I have experience working in both the mobile and web development worlds, with a focus on Android & Frontend development. I&apos;m passionate about creating beautiful, responsive applications that provide a great user experience.
             </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Also i am really proficient with mobile devlopment and have a experties in devloping Android application using kotlin.  
              My skills include HTML, CSS, JavaScript, and various frontend frameworks like React and NEXT.js. 
              I&apos;ve also worked with backend technologies like .NET, Firebase, SQLserver , SpringBoot and  SQLite, allowing me to build full-stack applications.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              When I&apos;m not working, I enjoy solving leetcode coding problems.
              and When I&apos;m not coding, I enjoy watching Anime.
              I believe that maintaining a healthy work-life balance is crucial for staying productive and motivated.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always looking for new challenges and opportunities to learn and grow as a developer. 
              If you&apos;re interested in working together or have any questions, please don&apos;t hesitate to get in touch!
              🔗
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
