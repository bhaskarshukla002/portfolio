import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";
import InventoryApp from "@/public/inventory-app.png";
import PortFolio from "@/public/screenshot.png";
import TrashDetectionProject from "@/public/frame_85.jpg"
// import Profile from "@/public/inventory-app.png";
// import Profile from "@/public/inventory-app.png";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="l" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Trash Throwing Action Detection",
    imgSrc: (TrashDetectionProject),
    code: "https://github.com/bhaskarshukla002/Trash-Throwing-Action-Detection",
    projectLink: "https://github.com/bhaskarshukla002/Trash-Throwing-Action-Detection",
    tech: ["Python", "OpenCV", "Ultralytics", "Yolo-v8", "NumPy", "Computer Vision"],
    description: "Developed a system using YOLO for real-time human detection and pose estimation to detect humans throwing trash in real time, enhancing the accuracy of tracking hand movements and predicting actions.",
    modalContent: (
    <>
    <p>
    • Implemented background subtraction and KCF tracking algorithms to detect and monitor carried objects
    resulting increased accuracy and speed with realtime 10 fps speed on nvidia 1650 gpu.
    </p>
    <p>• Designed a method to calculate distances between tracked objects and hand keypoints, successfully predicting
    littering actions with high precision based on movement patterns.
    </p>
    </>
    ),
    },
    {
    title: "Project Management App",
    imgSrc: (PortFolio),
    code: "https://github.com/bhaskarshukla002/ProjectManageApp",
    projectLink: "https://github.com/bhaskarshukla002/ProjectManageApp",
    tech: ["Android", "Kotlin", "Firebase", "Retrofit", "Kan-Ban Ui"],
    description: "Developed a Task management application for organizing and managing projects for teams or organizations.",
    modalContent: (
    <>
    <p>
    • Implemented Create boards, add lists and cards, assign members, set due dates, and receive notifications.
    </p>
    <p>• Integrated Firebase for authentication, real-time database management, and cloud storage.</p>
    <p>• user-friendly Kan-Ban UI design for boards with drag-and-drop functionality.</p>
    </>
    ),
    },
    {
      title: "Inventory Tracking Application",
      imgSrc: (InventoryApp),
      code: "#",
      projectLink: "#",
      tech: ["Java", "Android", "SqlSever", "Room" ,"SQLite","Barcode",".NET"],
      description: "An Inventory Tracking Application.",
      modalContent: (
        <>
          <p>
            Worked as a software developer and created dynamic reusable
            logic and base layout from a mock-up.
          </p>
          <p>
            The tech stack is based on Android with the custom native components,
            connected to a .NET backend.
          </p>
        </>
      ),
    },
    {
      title: "Portfolio Application",
      imgSrc: (PortFolio),
      code: "https://github.com/bhaskarshukla002/portfolio",
      projectLink: "https://bhaskarshukla002.github.io/portfolio/",
      tech: ["NEXTJS","React," , "animejs","framer-motion","tailwind"],
      description: "Portfolio Made with next.js Tailwing css",
      modalContent: (
        <>
          <p>
            This is my First version of my portfolio that i made to showcase my
            projects.
          </p>
          <p>Trying out Animejs and creating my First portfolio</p>
        </>
      ),
    },
    {
    title: "3D iPhone Website",
    imgSrc: (PortFolio),
    code: "https://github.com/bhaskarshukla002/portfolio",
    projectLink: "https://3-d-phone-rendering.vercel.app/",
    tech: ["React", "Three.JS", "Blender", "WebGi", "Gsap"],
    description: "Developed a 3D model rendering website using Webgi 3d canvas Viewer",
    modalContent: (
    <>
    <p>
    • Implemented Gsap library to timeline animation on webpage according to current position of user on webpage
    </p>
    <p>• Also implemented a the 3D 360 degree viewer for the model interactive viewing and Made Viewer responsive for small screen</p>
    </>
    ),
    },
    {
    title: "Weather App",
    imgSrc: (PortFolio),
    code: "https://github.com/bhaskarshukla002/WeatherApp",
    projectLink: "https://github.com/bhaskarshukla002/WeatherApp",
    tech: ["Android", "Kotlin", "OpenWetherAPI", "Retrofit", "GSON"],
    description: "Developed a weather forecasting android application using OpenWeatherMap API in kotlin language",
    modalContent: (
    <>
      <p>
        • Provides current weather conditions, temperature, humidity, wind speed, and more.
      </p>
      <p>
        • Uses Retrofit for making API calls and Gson for parsing JSON responses. Includes features like splash screen,permissions handling, and UI customization.
     </p>
    </>
    ),
    }
];
