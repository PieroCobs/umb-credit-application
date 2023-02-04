import React from "react";
import styles from "../../styles/shareholder-control.module.scss";
import { RiDeleteBin7Line } from "react-icons/ri";

export interface Shareholder {
  id: number;
  name: string | undefined;
  share: number | undefined;
}

export default function ShareholderControl({
  shareholder: { id, name, share },
  onRemove,
  onUpdate,
}: {
  shareholder: Shareholder;
  onRemove?: (id: number) => void;
  onUpdate?: (shareholder: Shareholder) => void;
}) {
  return (
    <div className={styles["shareholder-control"]}>
      {id > 1 ? (
        <button
          aria-label="Remove"
          className={styles.remove}
          onClick={(e) => {
            e.preventDefault();
            onRemove && onRemove(id);
          }}
        >
          <RiDeleteBin7Line size={16} />
        </button>
      ) : (
        <div className={styles.remove}></div>
      )}
      <div className={styles.holder}>
        <input
          value={name}
          autoFocus={id > 1}
          onChange={(e) => {
            onUpdate && onUpdate({ id, name: e.target.value, share });
          }}
        />
      </div>
      <div className={styles.holding}>
        <input
          value={share}
          type="number"
          onChange={(e) => {
            onUpdate && onUpdate({ id, name, share: +e.target.value });
          }}
        />
      </div>
    </div>
  );
}
