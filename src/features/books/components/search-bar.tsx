"use client";

import { useRouter } from "next/navigation";
import { Input } from "antd";
import { buildSearchUrl } from "@/features/books/utils/search-params";
import styles from "./search-bar.module.css";

type SearchBarProps = {
  initialQuery: string;
};

export function SearchBar({ initialQuery }: SearchBarProps) {
  const router = useRouter();

  function handleSearch(searchText: string) {
    const trimmedText = searchText.trim();
    if (trimmedText === "") return;

    router.push(buildSearchUrl(trimmedText));
  }

  return (
    <Input.Search
      className={styles.searchBar}
      size="large"
      placeholder="Search by title or author"
      defaultValue={initialQuery}
      onSearch={handleSearch}
      allowClear
      enterButton="Search"
    />
  );
}
