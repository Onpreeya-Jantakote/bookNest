import { Suspense } from "react";
import { BookListSkeleton } from "@/features/books/components/book-list-skeleton";
import { SearchBar } from "@/features/books/components/search-bar";
import { SearchResults } from "@/features/books/components/search-results";
import {
  getSingleParam,
  parsePageNumber,
} from "@/features/books/utils/search-params";
import styles from "./page.module.css";

export default async function HomePage({ searchParams }: PageProps<"/">) {
  const { q, page } = await searchParams;
  const query = getSingleParam(q).trim();
  const pageNumber = parsePageNumber(page);

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.heading}>Discover your next read</h1>
        <SearchBar initialQuery={query} />
      </section>

      <Suspense
        key={`${query}-${pageNumber}`}
        fallback={<BookListSkeleton />}
      >
        <SearchResults query={query} pageNumber={pageNumber} />
      </Suspense>
    </main>
  );
}
