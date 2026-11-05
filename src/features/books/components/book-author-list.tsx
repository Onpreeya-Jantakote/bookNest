import type { BookAuthor } from "@/features/books/types/book";
import {
  formatAuthorLifeSpan,
  splitIntoParagraphs,
} from "@/features/books/utils/format-book-detail";
import styles from "./book-author-list.module.css";

type BookAuthorListProps = {
  authors: BookAuthor[];
};

export function BookAuthorList({ authors }: BookAuthorListProps) {
  if (authors.length === 0) {
    return (
      <section className={styles.section}>
        <h2 className={styles.heading}>Author Information</h2>
        <p className={styles.fallback}>Author details are not available.</p>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Author Information</h2>
      <ul className={styles.list}>
        {authors.map((author) => {
          const lifeSpan = formatAuthorLifeSpan(author);
          const bioParagraphs = splitIntoParagraphs(author.biography);

          return (
            <li key={author.id} className={styles.item}>
              <div className={styles.header}>
                <h3 className={styles.name}>{author.name}</h3>
                {lifeSpan && <span className={styles.lifeSpan}>{lifeSpan}</span>}
              </div>
              {bioParagraphs.length > 0 ? (
                <p className={styles.bio}>{bioParagraphs[0]}</p>
              ) : (
                <p className={styles.fallback}>No biography available.</p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
