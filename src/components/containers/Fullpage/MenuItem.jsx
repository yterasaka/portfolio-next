import React, { useRef, useEffect } from "react";
import styles from "./index.module.css";

export const MenuItem = ({
  children,
  onClick,
  underlineRef,
  currentSection,
  active,
  currentStyle,
  number,
}) => {
  const buttonRef = useRef();

  // 現在のセクションが変化した時、つまりスクロールした時に、そのセクションを仮想的にクリックして、クリック時の動作を発火させる
  useEffect(() => {
    if (currentSection === 0) {
      underlineRef.current.style.width = 0;
      underlineRef.current.style.left = 0;
    }
    if (number === currentSection) {
      buttonRef.current?.click();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSection]);

  const handleClick = (e) => {
    const targetWidth = buttonRef.current?.getBoundingClientRect().width; // Element.getBoundingClientRect() メソッドは、要素の寸法と、そのビューポートに対する相対位置に関する情報を返す。
    const targetOffsetLeft = e.target.offsetLeft;
    onClick(targetWidth, targetOffsetLeft);

    //
    if (number) {
      underlineRef.current.style.width = `${targetWidth - 16}px`;
      underlineRef.current.style.left = `${targetOffsetLeft + 8}px`;
    } else {
      underlineRef.current.style.width = 0;
    }
  };

  // メニューアイテムにマウスホバーした時の動作
  const handleEnter = (e) => {
    const offsetLeft = e.target.offsetLeft;
    const targetWidth = buttonRef.current?.getBoundingClientRect().width;
    underlineRef.current.style.left = `${offsetLeft + 8}px`;
    underlineRef.current.style.width = `${targetWidth - 16}px`;
  };

  // メニューアイテムからマウスホバーが解除された時の動作
  const handleLeave = () => {
    if (!active) {
      underlineRef.current.style.left = `${currentStyle.offsetLeft + 8}px`;
      underlineRef.current.style.width = `${currentStyle.width - 16}px`;
    }
    if (currentSection) return;
    underlineRef.current.style.width = 0;
    underlineRef.current.style.left = 0;
  };

  return (
    <li className={styles.navItem}>
      <button
        ref={buttonRef}
        className={styles.navButton}
        onClick={handleClick}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {children}
      </button>
    </li>
  );
};
