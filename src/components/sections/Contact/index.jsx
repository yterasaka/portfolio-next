import styles from "./index.module.css";
import { SiMaildotru, SiGithub, SiLinkedin } from "react-icons/si";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Kontakt</h2>

      <div className={styles.iconContainer}>
        <a
          href={"mailto:hallo@terasaka.de"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiMaildotru className={styles.icon} />
        </a>
        <a
          href={"https://github.com/yterasaka"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub className={styles.icon} />
        </a>
        <a
          href={"https://www.linkedin.com/in/yuki-terasaka-a5399b129/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin className={styles.icon} />
        </a>
      </div>
      <div className={styles.footer}>
        <p>© Yuki Terasaka 2023</p>
      </div>
    </div>
  );
};

export default Contact;
