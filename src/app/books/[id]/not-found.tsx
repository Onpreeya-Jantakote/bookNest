import Link from "next/link";
import { Button } from "antd";
import { EmptyState } from "@/components/common/empty-state";
import styles from "./not-found.module.css";

export default function BookNotFoundPage() {
  return (
    <main className={styles.main}>
      <EmptyState
        title="Book not found"
        description="We couldn't find the book you're looking for. It may have been moved or doesn't exist."
      />
      <Link href="/">
        <Button type="primary">Back to search</Button>
      </Link>
    </main>
  );
}
