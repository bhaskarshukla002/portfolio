import Image from "next/image";
import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import Profile from "@/public/myImage.jpg";
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              Hi, I&apos;m <br />Bhaskar Shukla<span>.</span>
            </h1>
          </Reveal>
          <Reveal >
            {/* <h2 className={styles.subTitle}>
              I&apos;m a <span>Software Developer</span>
            </h2> */}
            <h2 className={styles.subTitle}>I&apos;m 
            <span>
            <TypeAnimation 
              sequence={[
                // Same substring at the start will only be typed out once, initially
                ' a Software Developer',
                1750, // wait 1s before replacing "Mice" with "Hamsters"
                ' also a Software Engineer',
                1750,
                ' a Full Stack Developer too',
                1750,
                ' a Problem Solver at the end of day',
                1750
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
              I&apos;ve spent the last 4 years of college building and scaling applications for
              some pretty cool companies and individuals projects. I also love to create interesting self projects on my spare time.
              And I think Let&apos;s connect!
            </p>
          </Reveal>
          <Reveal>
            <StandardButton
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
            >
              Contact me
            </StandardButton>
          </Reveal>
        </div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <Image
            className={styles.profile}
            src={Profile}
            priority
            alt="Bhaskar Shukla | Software Developer"
            width={250}
            height={250}
          />
        </motion.div>
      </div>
      <DotGrid />
    </section>
  );
};
