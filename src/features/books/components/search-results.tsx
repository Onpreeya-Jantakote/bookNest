import { searchBooks, SEARCH_PAGE_SIZE } from "@/features/books/api/books-api";
import { EmptyState } from "@/components/common/empty-state";
import { BookList } from "./book-list";
import { BookPagination } from "./book-pagination";
import styles from "./search-results.module.css";

type SearchResultsProps = {
  query: string;
  pageNumber: number;
};

export async function SearchResults({ query, pageNumber }: SearchResultsProps) {
  if (query === "") {
    return (
      <EmptyState
        title="Find your next read"
        description="Search by book title or author name to get started."
      />
    );
  }

  const searchResult = await searchBooks(query, pageNumber);

  if (searchResult.books.length === 0) {
    return (
      <EmptyState
        title="No books found"
        description={`We couldn't find anything for "${query}". Try a different title or author.`}
      />
    );
  }

  return (
    <>
      <p className={styles.summary}>
        {searchResult.totalCount.toLocaleString("en-US")} results for “{query}”
      </p>
      <BookList books={searchResult.books} />
      <BookPagination
        query={query}
        currentPage={pageNumber}
        totalCount={searchResult.totalCount}
        pageSize={SEARCH_PAGE_SIZE}
      />
    </>
  );
}
