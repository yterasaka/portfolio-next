import Image from "next/image";
import styles from "./index.module.css";
import profilePic from "../../../public/images/profilePic.png";

const Greeting = () => {
  return (
    <div className={styles.container}>
      <div className={styles.greeting}>
        <h2 className={styles.greetingText}>
          Hallo, mein Name ist Yuki Terasaka.
        </h2>
        <h1 className={styles.greetingText}>
          Ich bin engagierter Frontend-Entwickler mit Schwerpunkt React.
        </h1>
      </div>
      <div className={styles.image}>
        <Image src={profilePic} width={300} height={300} alt="My Portrait" />
      </div>
    </div>
  );
};

export default Greeting;
