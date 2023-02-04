import React from "react";
import styles from "./styles/aux-sidebar.module.scss";
import ActionsPane from "./ActionsPane";
import UserProfile from "./UserProfile";

const fetchUser = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/user/`);
  const result = await res.json();
  return result;
};

export default async function AuxiliarySidebar() {
  const userRequestResponse = await fetchUser();

  return (
    <aside className={styles.sidebar}>
      <UserProfile userRequestResponse={userRequestResponse} />
      <ActionsPane />
    </aside>
  );
}
