import type { Book } from "@/features/books/types/book";

export function formatAuthorNames(authorNames: string[]): string {
  return authorNames.length > 0 ? authorNames.join(", ") : "Unknown author";
}

export function formatPublicationInfo(book: Book): string {
  const publicationParts = [book.firstPublishYear, book.publisherName].filter(
    (part) => part !== undefined,
  );

  return publicationParts.length > 0
    ? publicationParts.join(" · ")
    : "Publication details unavailable";
}
