"use client";

import { useRouter } from "next/navigation";
import { Pagination } from "antd";
import { buildSearchUrl } from "@/features/books/utils/search-params";
import styles from "./book-pagination.module.css";

type BookPaginationProps = {
  query: string;
  currentPage: number;
  totalCount: number;
  pageSize: number;
};

export function BookPagination({
  query,
  currentPage,
  totalCount,
  pageSize,
}: BookPaginationProps) {
  const router = useRouter();

  if (totalCount <= pageSize) return null;

  function handlePageChange(pageNumber: number) {
    router.push(buildSearchUrl(query, pageNumber));
  }

  return (
    <nav className={styles.pagination} aria-label="Search results pages">
      <Pagination
        current={currentPage}
        total={totalCount}
        pageSize={pageSize}
        onChange={handlePageChange}
        showSizeChanger={false}
        showLessItems
      />
    </nav>
  );
}
