import { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { motion } from "framer-motion";
import data from "@/data";

export const SideBar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div style={{background: "var(--background-dark)"}}>
      <motion.nav
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.sideBar}
      >
        <span className={styles.logo} onClick={() => {
          document.location.hash === "" ?
          document.getElementById("main")?.scrollIntoView() :
          document.location.hash = '';
          }}>
          {data.personal.initials}<span>.</span>
        </span>
        {data.navigation.items.map((item, idx) => (
          <motion.a
            key={item.id}
            initial={{ x: -70 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
            href={`#${item.id}`}
            onClick={() => {
              setSelected(item.id);
            }}
            className={selected === item.id ? styles.selected : ""}
          >
            {item.label}
          </motion.a>
        ))}
        
      </motion.nav>
    </div>
  );
};
