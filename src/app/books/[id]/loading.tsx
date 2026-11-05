import { Skeleton } from "antd";
import styles from "./loading.module.css";

export default function BookDetailLoading() {
  return (
    <div className={styles.container} aria-busy="true" aria-label="Loading book details">
      <div className={styles.layout}>
        <div className={styles.cover} />
        <div className={styles.content}>
          <Skeleton active title={{ width: "60%" }} paragraph={{ rows: 2 }} />
          <Skeleton active title={{ width: "30%" }} paragraph={{ rows: 5 }} />
        </div>
      </div>
    </div>
  );
}
