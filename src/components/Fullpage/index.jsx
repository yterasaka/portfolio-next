import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import styles from "./index.module.css";
import Greeting from "../Greeting";
import About from "../About";
import ProjectA from "../ProjectA";
import ProjectB from "../ProjectB";
import Contact from "../Contact";

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};

const Fullpage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  console.log("test", currentSection);

  const onLeave = (origin, destination, direction, section) => {
    console.log("onLeave", { origin, destination, direction, section });
    const newSection = destination.index;
    setCurrentSection(newSection);
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  };

  const moveToOne = () => {
    return fullpage_api.moveTo(1);
  };
  const moveToTwo = () => {
    return fullpage_api.moveTo(2);
  };
  const moveToThree = () => {
    return fullpage_api.moveTo(3);
  };
  const moveToFour = () => {
    return fullpage_api.moveTo(4);
  };
  const moveToFive = () => {
    return fullpage_api.moveTo(5);
  };

  const Menu = () => (
    <div
      className={styles.header}
      style={{
        position: "fixed",
        top: 0,
        zIndex: 100,
      }}
    >
      <ul className={styles.nav}>
        {/* <li> */}
        {/* <button className={styles.navButton} onClick={moveToOne}> Move To One </button> */}
        {/* </li> */}
        <li className={styles.navItem}>
          <button className={styles.navButton} onClick={moveToTwo}>
            Über mich
          </button>
        </li>
        <li className={styles.navItem}>
          <button className={styles.navButton} onClick={moveToThree}>
            StickyNote
          </button>
        </li>
        <li className={styles.navItem}>
          <button className={styles.navButton} onClick={moveToFour}>
            Where Can I Eat Vegetarian?
          </button>
        </li>
        <li className={styles.navItem}>
          <button className={styles.navButton} onClick={moveToFive}>
            Kontakt
          </button>
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      <Menu />
      <ReactFullpage
        licenseKey={"LL5R6-MGKU8-FKYU7-1HI47-JJHNK"}
        // navigation
        pluginWrapper={pluginWrapper}
        onLeave={onLeave}
        credits={false}
        render={() =>
          console.log("render prop change") || (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Greeting />
              </div>
              <div className="section">
                <About />
              </div>
              <div className="section">
                <ProjectA />
              </div>
              <div className="section">
                <ProjectB />
              </div>
              <div className="section">
                <Contact />
              </div>
            </ReactFullpage.Wrapper>
          )
        }
      />
    </div>
  );
};

export default Fullpage;
