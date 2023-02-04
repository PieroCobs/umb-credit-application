import styles from "../styles/applications.module.scss";

export default function ListWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.list}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
