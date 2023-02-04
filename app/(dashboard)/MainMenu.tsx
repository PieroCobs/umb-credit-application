import Image from "next/image";
import React from "react";
import styles from "./styles/main-menu.module.scss";
import logo from "../../public/umb.png";
import Navbar from "./Navbar";
import { LogoutButton } from "./LogoutButton";

export default function MainMenu() {
  return (
    <div className={styles["main-menu"]}>
      <Image
        src={logo}
        alt={"UMB, You First"}
        height={40}
        className={styles.logo}
        priority
      />
      <hr />
      <h4 className={styles.appName}>credit application</h4>
      <Navbar />
      <LogoutButton />
    </div>
  );
}
