import type { Book } from "@/features/books/types/book";
import { BookCard } from "./book-card";
import styles from "./book-list.module.css";

type BookListProps = {
  books: Book[];
};

export function BookList({ books }: BookListProps) {
  return (
    <ul className={styles.list}>
      {books.map((book) => (
        <li key={book.id}>
          <BookCard book={book} />
        </li>
      ))}
    </ul>
  );
}
