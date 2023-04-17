import { BiLinkExternal } from "react-icons/bi";
import {
  SiGithub,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiStrapi,
} from "react-icons/si";
import styles from "./index.module.css";

const ProjectA = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p>Portfolio Projekt #1</p>
        <div className={styles.title}>
          <h2>StickyNote</h2>
          <div className={styles.iconContainer}>
            <a
              href={"https://yterasaka.github.io/sticky-note/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLinkExternal className={styles.icon} />
            </a>
            <a
              href={"https://github.com/yterasaka/sticky-note"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className={styles.icon} />
            </a>
          </div>
        </div>
        <div className={styles.description}>
          <p>
            <i>StickyNote</i> ist mein erstes Portfolio-Projekt, das ich
            entwickelt habe. Eine einfache Webanwendung im Stil von Google Keep,
            mit der man virtuelle Notizen im Browser erstellen, bearbeiten,
            markieren und löschen kann.
          </p>
          <p>
            Bei der Entwicklung dieser Webanwendung habe ich unter anderem mein
            Wissen über die Zustandsverwaltung mit den React Hooks erweitert.
          </p>
        </div>
        <div className={styles.iconTool}>
          <SiJavascript /> <SiReact /> <SiHtml5 /> <SiCss3 />
        </div>
      </div>
      <div className={styles.textContainer}>
        <p>Portfolio Projekt #2</p>
        <div className={styles.title}>
          <h2>Where Can I Eat Vegetarian?</h2>
          <div className={styles.iconContainer}>
            <a
              href={"https://where-can-i-eat-vegetarian.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLinkExternal className={styles.icon} />
            </a>
            <a
              href={"https://github.com/yterasaka/where_can_i_eat_vegetarian"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className={styles.icon} />
            </a>
          </div>
        </div>
        <div className={styles.description}>
          <p>
            <i>Where Can I Eat Vegetarian?</i> ist eine Webanwendung, die es
            ermöglicht, auf einer Karte Restaurants in Japan zu finden, die
            vegetarische Gerichte anbieten.
          </p>
          <p>
            Die Kartenanzeige erfolgt über die Google Maps API und die
            Informationen zu den Restaurants werden über die Yelp API abgerufen.
            Für das Backend wird das headless CMS Strapi verwendet.
          </p>
          <p>
            Während der Entwicklung dieser Webapplikation konnte ich meine
            Kenntnisse in Next.js und der Implementierung von API-Integrationen
            vertiefen.
          </p>
        </div>
        <div className={styles.iconTool}>
          <SiJavascript /> <SiNextdotjs /> <SiHtml5 /> <SiCss3 /> <SiStrapi />
        </div>
      </div>
    </div>
  );
};

export default ProjectA;
