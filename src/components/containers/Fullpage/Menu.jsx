import React, { useState, useRef } from "react";
import styles from "./index.module.css";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import Icon from "../../../../public/images/icon.png";

const initialState = {
  width: 0,
  offsetLeft: 0,
};

export const Menu = ({ currentSection }) => {
  const underlineRef = useRef();
  const [currentStyle, setCurrentStyle] = useState(initialState);

  const handleClick = (targetWidth, targetOffsetLeft, targetIndex) => {
    setCurrentStyle({ with: targetWidth, offsetLeft: targetOffsetLeft });
    fullpage_api.moveTo(targetIndex);
  };
  const moveToOne = () => {
    setCurrentStyle(initialState);
    underlineRef.current.style.width = 0;
    underlineRef.current.style.left = 0;
    fullpage_api.moveTo(1);
  };

  return (
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
          <MenuItem
            onClick={(width, offsetLeft) => handleClick(width, offsetLeft, 2)}
            underlineRef={underlineRef}
            currentSection={currentSection}
            active={currentSection === 1}
            currentStyle={currentStyle}
            number={1}
          >
            Über mich
          </MenuItem>
          <MenuItem
            onClick={(width, offsetLeft) => handleClick(width, offsetLeft, 3)}
            underlineRef={underlineRef}
            currentSection={currentSection}
            active={currentSection === 2}
            currentStyle={currentStyle}
            number={2}
          >
            Projekte
          </MenuItem>
          <MenuItem
            onClick={(width, offsetLeft) => handleClick(width, offsetLeft, 4)}
            underlineRef={underlineRef}
            currentSection={currentSection}
            active={currentSection === 3}
            currentStyle={currentStyle}
            number={3}
          >
            Kontakt
          </MenuItem>
        </ul>
        <span ref={underlineRef} className={styles.underline}></span>
      </nav>
    </div>
  );
};
