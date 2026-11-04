import type {
  OpenLibraryAuthor,
  OpenLibrarySearchDoc,
  OpenLibrarySearchResponse,
  OpenLibraryTextField,
  OpenLibraryWork,
} from "@/features/books/schemas/open-library-schemas";
import type {
  Book,
  BookAuthor,
  BookDetail,
  BookSearchResult,
} from "@/features/books/types/book";
import { buildCoverUrl } from "@/features/books/utils/build-cover-url";
import { extractOpenLibraryId } from "@/features/books/utils/extract-open-library-id";

export function extractTextValue(
  textField: OpenLibraryTextField | undefined,
): string | undefined {
  if (textField === undefined) return undefined;

  const text = typeof textField === "string" ? textField : textField.value;
  const trimmedText = text.trim();
  return trimmedText === "" ? undefined : trimmedText;
}

export function mapSearchDocToBook(searchDoc: OpenLibrarySearchDoc): Book {
  return {
    id: extractOpenLibraryId(searchDoc.key),
    title: searchDoc.title,
    authorNames: searchDoc.author_name ?? [],
    firstPublishYear: searchDoc.first_publish_year,
    publisherName: searchDoc.publisher?.[0],
    coverUrl:
      searchDoc.cover_i === undefined
        ? undefined
        : buildCoverUrl(searchDoc.cover_i),
  };
}

export function mapSearchResponseToResult(
  searchResponse: OpenLibrarySearchResponse,
  pageNumber: number,
  pageSize: number,
): BookSearchResult {
  return {
    books: searchResponse.docs.map(mapSearchDocToBook),
    totalCount: searchResponse.numFound,
    pageNumber,
    totalPages: Math.ceil(searchResponse.numFound / pageSize),
  };
}

export function mapAuthor(author: OpenLibraryAuthor): BookAuthor {
  return {
    id: extractOpenLibraryId(author.key),
    name: author.name,
    biography: extractTextValue(author.bio),
    birthDate: author.birth_date,
    deathDate: author.death_date,
  };
}

export function mapWorkToBookDetail(
  work: OpenLibraryWork,
  authors: OpenLibraryAuthor[],
): BookDetail {
  const firstCoverId = work.covers?.find((coverId) => coverId > 0);

  return {
    id: extractOpenLibraryId(work.key),
    title: work.title,
    description: extractTextValue(work.description),
    coverUrl:
      firstCoverId === undefined ? undefined : buildCoverUrl(firstCoverId, "L"),
    subjects: work.subjects ?? [],
    firstPublishDate: work.first_publish_date,
    authors: authors.map(mapAuthor),
  };
}
