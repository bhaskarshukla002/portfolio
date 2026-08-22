import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";
import data from "@/data";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            {data.stats.useAtWork.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
</div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            {data.stats.useForFun.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};
