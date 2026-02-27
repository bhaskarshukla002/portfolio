import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

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
  <span className="chip">Azure Monitor</span>
  <span className="chip">Log Analytics</span>
  <span className="chip">Azure Policy</span>
  <span className="chip">Logic Apps</span>
  <span className="chip">BMC Discovery</span>
  <span className="chip">EvolveOps.ai</span>
  <span className="chip">SolarWinds</span>
  <span className="chip">Site24x7</span>
  <span className="chip">Terraform</span>
  <span className="chip">Ansible</span>
  <span className="chip">Jenkins</span>
  <span className="chip">Kubernetes</span>
  <span className="chip">Linux</span>
  <span className="chip">Windows Server</span>
  <span className="chip">Azure AD (Entra ID)</span>
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
  <span className="chip">KQL</span>
  <span className="chip">Azure CLI</span>
  <span className="chip">PowerShell</span>
  <span className="chip">Terraform (Azure)</span>
  <span className="chip">Docker</span>
  <span className="chip">System Design</span>
  <span className="chip">LeetCode</span>
  <span className="chip">Cloud Cost Optimization</span>
  <span className="chip">Observability</span>
</div>
        </div>
      </Reveal>
    </div>
  );
};
