import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";
import dynamic from 'next/dynamic';
import data from '@/data';

// const PdfViewer = dynamic(() => import('react-pdf-viewer'), {
  // ssr: false,
// });

export const Heading = () => {
  const openResume = () => {
    window.open(data.personal.resumeUrl, '_blank');
  };
  return (
    <header className={styles.heading}>
      <MyLinks />
      {/* <div className={styles.headingButtons}> */}

      <OutlineButton onClick={openResume} >
        My resume
      </OutlineButton>
      {/* </div> */}
    </header>
  );
};

{
  /* <a href="https://www.buymeacoffee.com/jcdevz" target="_blank">
  <img
    src="https://cdn.buymeacoffee.com/buttons/v2/arial-violet.png"
    alt="Buy Me A Coffee"
    style={{
      height: "46px !important",
      width: "185px !important",
    }}
  />
</a> */
}
