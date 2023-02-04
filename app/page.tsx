import styles from "./styles/login.module.scss";
import logo from "../public/umb.png";
import Image from "next/image";
import LoginForm from "./(components)/LoginForm";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={logo} alt={"UMB, You First"} width={120} priority />
      <h4 className={styles.appName}>credit application user login</h4>
      <div className={styles.content}>
        <hr />
        <h1>Welcome.</h1>
        <p>Please provide your name and email to log in.</p>
        <LoginForm />
      </div>
    </main>
  );
}
