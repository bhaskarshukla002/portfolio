import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";
// import MyResume from "@/public/Bhaskar-Shukla-resume.pdf";
import dynamic from 'next/dynamic';

// const PdfViewer = dynamic(() => import('react-pdf-viewer'), {
  // ssr: false,
// });

export const Heading = () => {
  const openResume = () => {
    // Provide the correct relative path to your PDF file
    const pdfPath = '/Bhaskar-Shukla-resume.pdf';

    // Open the PDF file in a new tab or window
    window.open(pdfPath, '_blank');
  };
  return (
    <header className={styles.heading}>
      <MyLinks />
      {/* <div className={styles.headingButtons}> */}

      <OutlineButton onClick={openResume}>
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
