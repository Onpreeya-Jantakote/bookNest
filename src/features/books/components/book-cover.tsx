import Image from "next/image";
import { IconBook } from "@tabler/icons-react";
import styles from "./book-cover.module.css";

type BookCoverProps = {
  title: string;
  coverUrl: string | undefined;
};

export function BookCover({ title, coverUrl }: BookCoverProps) {
  return (
    <div className={styles.cover}>
      {coverUrl ? (
        <Image
          src={coverUrl}
          alt={`Cover of ${title}`}
          fill
          sizes="(max-width: 600px) 45vw, 200px"
          className={styles.image}
        />
      ) : (
        <div className={styles.placeholder} role="img" aria-label="No cover available">
          <IconBook size={32} stroke={1.25} />
        </div>
      )}
    </div>
  );
}
