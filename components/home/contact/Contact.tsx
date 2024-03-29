import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Have an idea to discuss? Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/bhaskar-s-283008216/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{" "}
            or{" "}
            <Link href="https://github.com/bhaskarshukla002" target="_blank" rel="nofollow">
              Github
            </Link>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="https://mail.google.com/mail/?extsrc=mailto&url=mailto%3A%3Fto%3Dbhaskarshukla002%40gmail.com%26subject=Hi%20wanted%20to%20connect%20with%20you%20regarding....%26body=hi%20my%20name%20is%20someguy....%20i%20want%20to%20say%20this.....">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>Send Email</span>
            </div>
          </Link>
        </Reveal>
        <div className={styles.wheel}>
        <div  className={styles.hub}>Conect</div>
        <div className={styles.spokeWrapper}>
            <div className={styles.spoke} id={styles.spoke1}>
              <svg width="97" height="82" viewBox="0 0 97 82">
                <defs>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="li_lg">
                    <stop stop-color="#FBFCFD" offset="0%"></stop>
                    <stop stop-color="#ECEEF2" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <path
                  transform="translate(-64, -63)"
                  opacity="0.8"
                  fill="url(#li_lg)"
                  d="M160.8,144.8 L139.08,144.8 L139.08,115.96 C139.08,108.41 135.68,103.25 128.21,103.25 C122.5,103.25 119.32,106.73 117.84,110.08 C117.29,111.28 117.37,112.96 117.374921,114.64 L117.37,144.8 L95.86,144.8 C95.86,144.8 96.14,93.7 95.86,89.06 L117.37,89.06 L117.37,97.81 C118.65,93.98 125.52,88.52 136.49,88.52 C150.11,88.52 160.8,96.54 160.8,113.81 L160.8,144.8 L160.8,144.8 Z M73.23,80.08 L73.13,80.08 C68.08,80.08 64.8,76.36 64.8,71.65 C64.8,66.84 68.17,63.2 73.33,63.2 C78.47,63.2 81.64,66.83 81.74,71.63 C81.74,76.35 78.47,80.08 73.23,80.08 L73.23,80.08 L73.23,80.08 Z M64.8,88.5 L81.74,88.52 L81.74,144.8 L64.8,144.8 L64.8,88.52 L64.8,88.52Z"
                ></path>
              </svg>
            </div>
            <div className={styles.spoke} id={styles.spoke2}>
              <svg width="157" height="152" viewBox="0 0 157 152">
                <defs>
                  <rect
                    id="outerRect"
                    x="8.22357656"
                    y="0.868572981"
                    width="143.304739"
                    height="142.631427"
                    rx="20"
                  ></rect>
                  <rect id="day" width="22.6" height="22.5" rx="2.7"></rect>
                  <clipPath id="rect"><use href="#outerRect"></use></clipPath>
                  <linearGradient
                    x1="8.3%"
                    y1="48.2%"
                    x2="89.4%"
                    y2="51.7%"
                    id="cal_lg_1"
                  >
                    <stop stop-color="#8FC660" offset="0%"></stop>
                    <stop stop-color="#569B94" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient
                    x1="8.3%"
                    y1="9.5%"
                    x2="89.4%"
                    y2="88.1%"
                    id="cal_lg_2"
                  >
                    <stop stop-color="#8FC660" offset="0%"></stop>
                    <stop stop-color="#569B94" offset="100%"></stop>
                  </linearGradient>
                  <linearGradient
                    x1="8.3%"
                    y1="9.5%"
                    x2="89.4%"
                    y2="88.1%"
                    id="cal_lg_3"
                  >
                    <stop stop-color="#8FC660" offset="0%"></stop>
                    <stop stop-color="#569B94" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  transform="translate(0, 4)"
                >
                  <rect
                    x="0"
                    y="0"
                    width="157"
                    height="32"
                    clip-path="url(#rect)"
                    fill="url(#cal_lg_1)"
                  ></rect>
                  <use
                    href="#outerRect"
                    stroke="url(#cal_lg_2)"
                    stroke-width="9"
                  ></use>
                  <g fill="url(#cal_lg_3)">
                    <use href="#day" x="34.2" y="53.5"></use>
                    <use href="#day" x="70" y="53.5"></use>
                    <use href="#day" x="105.8" y="53.5"></use>
                    <use href="#day" x="34.2" y="89.1"></use>
                    <use href="#day" x="70" y="89.1"></use>
                    <use href="#day" x="105.8" y="89.1"></use>
                  </g>
                </g>
              </svg>
            </div>
            <div className={styles.spoke} id={styles.spoke3}>
              <svg width="191" height="167" viewBox="0 0 191 167">
                <defs>
                  <linearGradient
                    x1="233.7%"
                    y1="382.4%"
                    x2="0%"
                    y2="50%"
                    id="msg_lg"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFE550" offset="0%"></stop>
                    <stop stop-color="#FFD34F" offset="32.4113176%"></stop>
                    <stop stop-color="#FFB74A" offset="61.9528277%"></stop>
                    <stop stop-color="#FF7E44" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <g fill="url(#msg_lg)">
                  <rect x="0" y="0" width="191" height="120" rx="32"></rect>
                  <path d="M39 119V167l65-48"></path>
                </g>
              </svg>
            </div>
            <div className={styles.spoke} id={styles.spoke4}>
              <svg width="200" height="140" viewBox="0 0 200 140">
                <defs>
                  <linearGradient x1="50%" y1="-57%" x2="50%" y2="100%" id="env_lg">
                    <stop stop-color="#C987E5" offset="0%"></stop>
                    <stop stop-color="#984FC6" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <rect
                  id="Rectangle"
                  fill="url(#env_lg)"
                  x="0"
                  y="0"
                  width="200"
                  height="140"
                  rx="8.9"
                ></rect>
                <path
                  opacity="0.5"
                  fill="none"
                  stroke="#362140"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                  d="M11.1 9.5l88.9 76.7l88.9 -76.7m0 116l-65 -55m-112.8 55l65 -55"
                ></path>
              </svg>
            </div>
            <div className={styles.spoke} id={styles.spoke5}>
              <svg width="158" height="158" viewBox="0 0 158 158">
                <defs>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="phn_lg">
                    <stop stop-color="#4CC6D7" offset="0%"></stop>
                    <stop stop-color="#6BE7CF" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <path
                  transform="translate(-64, -57)"
                  fill="url(#phn_lg)"
                  stroke="url(#phn_lg)"
                  stroke-width="12"
                  d="M209.9,169.9 L174,156.6 C169.1,154.8 163.7,157.3 161.9,162.2 L158.9,170.5 C158.9,170.5 154.2,187.8 122.7,156.3 C91.2,124.8 108.5,120.1 108.5,120.1 L116.8,117.1 C121.7,115.3 124.3,109.9 122.4,105 L109.1,69.1 C107.4,64.5 102.4,62 97.7,63.4 L79.3,68.7 C74.6,70 71.2,74.1 70.7,78.9 C68.7,96 68.7,137.1 105.3,173.7 C141.9,210.3 183,210.3 200.1,208.3 C204.9,207.8 209,204.4 210.3,199.7 L215.6,181.3 C217,176.6 214.5,171.6 209.9,169.9Z"
                ></path>
              </svg>
            </div>
            <div className={styles.spoke} id={styles.spoke6}>
              <svg width="170" height="142" viewBox="0 0 170 142">
                <path
                  transform="translate(-56, -69)"
                  fill="#2686BE"
                  d="M225.7,86.32 C219.46,89.16 212.75,91.08 205.71,91.93 C212.9,87.52 218.42,80.53 221.02,72.19 C214.28,76.28 206.84,79.25 198.89,80.84 C192.56,73.91 183.5,69.58 173.48,69.58 C154.27,69.58 138.68,85.56 138.68,105.27 C138.68,108.07 138.98,110.79 139.58,113.4 C110.64,111.91 85,97.72 67.81,76.09 C64.82,81.38 63.1,87.52 63.1,94.06 C63.1,106.44 69.25,117.37 78.59,123.77 C72.89,123.6 67.51,121.97 62.81,119.32 L62.81,119.76 C62.81,137.06 74.82,151.49 90.75,154.76 C87.83,155.6 84.76,156.02 81.58,156.02 C79.34,156.02 77.15,155.8 75.02,155.38 C79.46,169.56 92.31,179.89 107.55,180.16 C95.63,189.74 80.61,195.45 64.31,195.45 C61.5,195.45 58.72,195.29 56,194.96 C71.41,205.08 89.72,210.99 109.37,210.99 C173.41,210.99 208.43,156.6 208.43,109.42 C208.43,107.87 208.4,106.32 208.34,104.79 C215.14,99.76 221.05,93.48 225.7,86.32"
                ></path>
              </svg>
            </div>
          </div>

      </div>
      
        
    </div>
    </section>
  );
};
