import Link from "next/link";
import type { Book } from "@/features/books/types/book";
import {
  formatAuthorNames,
  formatPublicationInfo,
} from "@/features/books/utils/format-book";
import { BookCover } from "./book-cover";
import styles from "./book-card.module.css";

type BookCardProps = {
  book: Book;
};

export function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/books/${book.id}`} className={styles.card}>
      <BookCover title={book.title} coverUrl={book.coverUrl} />
      <h2 className={styles.title}>{book.title}</h2>
      <p className={styles.author}>{formatAuthorNames(book.authorNames)}</p>
      <p className={styles.publication}>{formatPublicationInfo(book)}</p>
    </Link>
  );
}
