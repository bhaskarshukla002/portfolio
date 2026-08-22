import Image from "next/image";
import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import { TypeAnimation } from 'react-type-animation';
import data from "@/data";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              Hi, I&apos;m <br />{data.personal.name}<span>.</span>
            </h1>
          </Reveal>
          <Reveal >
            {/* <h2 className={styles.subTitle}>
              I&apos;m a <span>Software Developer</span>
            </h2> */}
            <h2 className={styles.subTitle}>I&apos;m
            <span>
            <TypeAnimation
              sequence={data.hero.animatedTitles.flatMap((t: string) => [" " + t, 1750]) as (string | number)[]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            </span>
            </h2>
          </Reveal>
          <Reveal>
          <p className={styles.aboutCopy}>{data.hero.description}</p>
          </Reveal>
          <Reveal>
            <StandardButton
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
            >
              {data.hero.contactButton}
            </StandardButton>
          </Reveal>
        </div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <Image
            className={styles.profile}
            src={data.personal.profileImage}
            priority
            alt={`${data.personal.name} | ${data.personal.title}`}
            width={250}
            height={250}
          />
        </motion.div>
      </div>
      <DotGrid />
    </section>
  );
};
