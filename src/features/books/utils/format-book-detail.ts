import type { BookAuthor } from "@/features/books/types/book";

const MAX_DISPLAYED_SUBJECTS = 8;

export function splitIntoParagraphs(text: string | undefined): string[] {
  if (!text) return [];

  return text
    .split(/\r?\n\s*\r?\n/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph !== "");
}

export function getDisplaySubjects(subjects: string[]): string[] {
  return subjects.slice(0, MAX_DISPLAYED_SUBJECTS);
}

export function formatAuthorLifeSpan(author: BookAuthor): string | undefined {
  if (!author.birthDate && !author.deathDate) {
    return undefined;
  }

  const birth = author.birthDate ?? "Unknown";
  const death = author.deathDate ?? "Present";
  return `${birth} – ${death}`;
}
