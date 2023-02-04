"use client";

import React, { useEffect, useState } from "react";
import { TfiUser } from "react-icons/tfi";
import { RiNotification4Fill } from "react-icons/ri";
import styles from "./styles/aux-sidebar.module.scss";
import { useRouter } from "next/navigation";

export default function UserProfile({ userRequestResponse }: any) {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (userRequestResponse.status === 404) {
      router.push("/");
    } else setLoaded(true);
  }, [router, userRequestResponse.status]);

  if (!loaded) {
    return <p>Checking user...</p>;
  }

  const {
    user: { name, position },
  } = userRequestResponse;

  return (
    <div className={styles["user-control"]}>
      <span className={styles["notification-icon"]}>
        <RiNotification4Fill />
      </span>

      <div className={styles.avatar}>
        <TfiUser size={32} />
      </div>

      <h4 className={styles.username}>{name}</h4>
      <span className={styles.role}>{position}</span>
    </div>
  );
}
