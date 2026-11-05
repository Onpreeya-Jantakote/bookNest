import { Skeleton } from "antd";
import styles from "./book-list.module.css";
import skeletonStyles from "./book-list-skeleton.module.css";

const SKELETON_ITEM_COUNT = 10;

const skeletonItemIds = Array.from(
  { length: SKELETON_ITEM_COUNT },
  (_, index) => index,
);

export function BookListSkeleton() {
  return (
    <ul className={styles.list} aria-busy="true" aria-label="Loading books">
      {skeletonItemIds.map((itemId) => (
        <li key={itemId}>
          <div className={skeletonStyles.cover} />
          <Skeleton active title={{ width: "80%" }} paragraph={{ rows: 2 }} />
        </li>
      ))}
    </ul>
  );
}
