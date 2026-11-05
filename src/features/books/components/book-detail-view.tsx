import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { Tag } from "antd";
import type { BookDetail } from "@/features/books/types/book";
import { formatAuthorNames } from "@/features/books/utils/format-book";
import {
  getDisplaySubjects,
  splitIntoParagraphs,
} from "@/features/books/utils/format-book-detail";
import { BookAuthorList } from "./book-author-list";
import { BookCover } from "./book-cover";
import styles from "./book-detail-view.module.css";

type BookDetailViewProps = {
  book: BookDetail;
};

export function BookDetailView({ book }: BookDetailViewProps) {
  const authorNames = book.authors.map((author) => author.name);
  const descriptionParagraphs = splitIntoParagraphs(book.description);
  const displaySubjects = getDisplaySubjects(book.subjects);

  return (
    <article className={styles.container}>
      <Link href="/" className={styles.backLink}>
        <IconArrowLeft size={18} stroke={1.5} />
        <span>Back to search</span>
      </Link>

      <div className={styles.layout}>
        <div className={styles.coverColumn}>
          <BookCover title={book.title} coverUrl={book.coverUrl} />
        </div>

        <div className={styles.contentColumn}>
          <header className={styles.header}>
            <h1 className={styles.title}>{book.title}</h1>
            <p className={styles.authors}>{formatAuthorNames(authorNames)}</p>
          </header>

          <dl className={styles.metaList}>
            <div className={styles.metaItem}>
              <dt className={styles.metaLabel}>First Published</dt>
              <dd className={styles.metaValue}>
                {book.firstPublishDate ?? "Unknown"}
              </dd>
            </div>
            <div className={styles.metaItem}>
              <dt className={styles.metaLabel}>Work ID</dt>
              <dd className={styles.metaValue}>{book.id}</dd>
            </div>
          </dl>

          {displaySubjects.length > 0 && (
            <div className={styles.subjects}>
              {displaySubjects.map((subject) => (
                <Tag key={subject} className={styles.subjectTag}>
                  {subject}
                </Tag>
              ))}
            </div>
          )}

          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Description</h2>
            {descriptionParagraphs.length > 0 ? (
              <div className={styles.description}>
                {descriptionParagraphs.map((paragraph, index) => (
                  <p key={index} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <p className={styles.fallback}>
                No description available for this book.
              </p>
            )}
          </section>

          <BookAuthorList authors={book.authors} />
        </div>
      </div>
    </article>
  );
}
