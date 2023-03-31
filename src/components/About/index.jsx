import styles from "./index.module.css";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiGit,
  SiAdobephotoshop,
  SiAdobeindesign,
} from "react-icons/si";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h2>Über mich</h2>
        <p>
          Hallo! Mein Name ist Yuki. Geboren und aufgewachsen bin ich in Japan
          und später nach Hamburg gezogen, um Kunst zu studieren. Meine
          künstlerischen Fähigkeiten und mein Sinn für Ästhetik prägen meine
          Herangehensweise an die Webentwicklung und beeinflussen meine Projekte
          maßgeblich.
        </p>
        <p>
          Ende 2021 begann meine Reise in die Welt der Webentwicklung.
          Autodidaktisch habe ich mich in die Frontend-Entwicklung eingearbeitet
          und bisher zwei eigene Webapplikationen entwickelt.{" "}
          <strong>StickyNote</strong> ist eine intuitive Notizen-App, für die
          ich mit React eine nahtlose User Experience geschaffen habe.{" "}
          <strong>Where Can I Eat Vegetarian?</strong> ist eine hilfreiche
          Webapplikation, die es Nutzern ermöglicht, Restaurants in Japan zu
          finden, die vegetarisches Essen anbieten. Für die zweite
          Webapplikation habe ich Next.js und Strapi verwendet und die Google
          Maps API sowie die Yelp API integriert.
        </p>

        <p>
          Als kreativer Problemlöser und ständiger Lernender bin ich von der
          Webentwicklung begeistert und freue mich auf neue Herausforderungen
          und die ständige Weiterentwicklung meiner Fähigkeiten.
        </p>
      </div>
      <div>
        <h2>Skill</h2>
        <div className={styles.icon}>
          <SiJavascript /> <SiReact /> <SiNextdotjs /> <SiHtml5 /> <SiCss3 />{" "}
          <SiGit /> <SiAdobephotoshop /> <SiAdobeindesign />
        </div>
      </div>
    </div>
  );
};

export default About;
