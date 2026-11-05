import Link from "next/link";
import { IconBook } from "@tabler/icons-react";
import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand}>
        <IconBook size={22} stroke={1.5} />
        <span>Booknest</span>
      </Link>
    </header>
  );
}
