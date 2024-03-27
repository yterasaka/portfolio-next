import React, { useState } from "react";
// import ReactFullpage from "@fullpage/react-fullpage";
import Greeting from "../../sections/Greeting";
import About from "../../sections/About";
import Project from "../../sections/Project";
import Contact from "../../sections/Contact";
import { Menu } from "./Menu";
import styles from "./index.module.css";

const licenceKey = process.env.NEXT_PUBLIC_FULLPAGEJS_LICENSE_KEY;

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// const pluginWrapper = () => {
//   /*
//    * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
//    */
// };

const Fullpage = () => {
  const [currentSection, setCurrentSection] = useState(0);

  // アンダーバーのみの変数は、単純に引数として書く必要があるため、記述はされたが特に使われていないから気にしてくてOK、という意味
  const onLeave = (_, destination) => {
    const activeSection = destination.index;
    setCurrentSection(activeSection);
  };

  return (
    <div>
      <Menu currentSection={currentSection} />
      <div className={styles.top}>
        <Greeting />
      </div>
      <div className={styles.second}>
        <About />
      </div>
      <div className={styles.third}>
        <Project />
      </div>
      <div className={styles.forth}>
        <Contact />
      </div>
      {/* <ReactFullpage
        licenseKey={licenceKey}
        pluginWrapper={pluginWrapper}
        onLeave={onLeave}
        scrollOverflow={false}
        responsiveWidth={"1024"}
        bigSectionsDestination={"top"}
        credits={false}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section fp-auto-height-responsive">
              <Greeting />
            </div>
            <div className="section fp-auto-height-responsive">
              <About />
            </div>
            <div className="section fp-auto-height-responsive">
              <Project />
            </div>
            <div className="section fp-auto-height-responsive">
              <Contact />
            </div>
          </ReactFullpage.Wrapper>
        )}
      /> */}
    </div>
  );
};

export default Fullpage;
