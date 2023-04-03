import React, { useEffect, useRef, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import styles from "./index.module.css";
import Greeting from "../Greeting";
import About from "../About";
import Project from "../Project";
import Contact from "../Contact";
import Image from "next/image";
import Icon from "../../../public/images/icon.png";

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};

const Fullpage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const underlineRef = useRef();

  // ヘッダーメニューの下線をスライド
  useEffect(() => {
    const menuItems = document.querySelectorAll(`.${styles.navButton}`);
    const underline = underlineRef.current;

    menuItems.forEach((item) => {
      item.addEventListener("mouseover", (event) => {
        const target = event.target;
        const targetWidth = target.offsetWidth;
        const targetOffsetLeft = target.offsetLeft;

        underline.style.width = `${targetWidth - 16}px`;
        underline.style.left = `${targetOffsetLeft + 8}px`;
      });
    });

    const menu = document.querySelector(`.${styles.menu}`);
    menu.addEventListener("mouseleave", () => {
      if (currentSection) {
        const targetWidth = menuItems[currentSection - 1].offsetWidth;
        const targetOffsetLeft = menuItems[currentSection - 1].offsetLeft;

        underline.style.width = `${targetWidth - 16}px`;
        underline.style.left = `${targetOffsetLeft + 8}px`;
      } else {
        underline.style.width = "0";
      }
    });

    const handleScroll = () => {
      if (currentSection === 0) {
        return;
      }
      if (currentSection) {
        const targetWidth = menuItems[currentSection - 1].offsetWidth;
        const targetOffsetLeft = menuItems[currentSection - 1].offsetLeft;

        underline.style.width = `${targetWidth - 16}px`;
        underline.style.left = `${targetOffsetLeft + 8}px`;
      } else {
        underline.style.width = "0";
      }
    };
    handleScroll();

    return () => {
      menuItems.forEach((item) => {
        item.removeEventListener("mouseover", null);
      });
      menu?.removeEventListener("mouseleave", null);
    };
  }, [currentSection]);

  const onLeave = (origin, destination, direction, section) => {
    // console.log("onLeave", { origin, destination, direction, section });

    const activeSection = destination.index;
    setCurrentSection(activeSection);
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

  const Menu = () => (
    <div
      className={styles.header}
      style={{
        position: "fixed",
        top: 0,
        zIndex: 100,
      }}
    >
      <div className={styles.icon}>
        <button className={styles.iconButton} onClick={moveToOne}>
          <Image src={Icon} width={30} height={30} alt="Icon" />
        </button>
      </div>
      <nav className={styles.menu}>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <button className={styles.navButton} onClick={moveToTwo}>
              Über mich
            </button>
          </li>
          <li className={styles.navItem}>
            <button className={styles.navButton} onClick={moveToThree}>
              Projekte
            </button>
          </li>
          <li className={styles.navItem}>
            <button className={styles.navButton} onClick={moveToFour}>
              Kontakt
            </button>
          </li>
        </ul>
        <span ref={underlineRef} className={styles.underline}></span>
      </nav>
    </div>
  );

  return (
    <div>
      <Menu />
      <ReactFullpage
        licenseKey={"LL5R6-MGKU8-FKYU7-1HI47-JJHNK"}
        pluginWrapper={pluginWrapper}
        onLeave={onLeave}
        scrollOverflow={false}
        responsiveWidth={"1024"}
        bigSectionsDestination={"top"}
        credits={false}
        render={() =>
          console.log("render prop change") || (
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
          )
        }
      />
    </div>
  );
};

export default Fullpage;
