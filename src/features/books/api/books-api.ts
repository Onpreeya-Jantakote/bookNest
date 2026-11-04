import { fetchJson } from "@/lib/fetch-json";
import {
  authorSchema,
  searchResponseSchema,
  workSchema,
} from "@/features/books/schemas/open-library-schemas";
import type {
  OpenLibraryAuthor,
  OpenLibraryWork,
} from "@/features/books/schemas/open-library-schemas";
import {
  mapSearchResponseToResult,
  mapWorkToBookDetail,
} from "@/features/books/mappers/book-mapper";
import type {
  BookDetail,
  BookSearchResult,
} from "@/features/books/types/book";
import { isValidWorkId } from "@/features/books/utils/extract-open-library-id";

const OPEN_LIBRARY_BASE_URL = "https://openlibrary.org";
export const SEARCH_PAGE_SIZE = 20;

const REQUEST_OPTIONS: RequestInit = {
  headers: { "User-Agent": "Booknest (portfolio project)" },
  next: { revalidate: 3600 },
};

const SEARCH_FIELDS =
  "key,title,author_name,first_publish_year,publisher,cover_i";

export async function searchBooks(
  query: string,
  pageNumber = 1,
): Promise<BookSearchResult> {
  const trimmedQuery = query.trim();

  if (trimmedQuery === "") {
    return { books: [], totalCount: 0, pageNumber: 1, totalPages: 0 };
  }

  const searchParams = new URLSearchParams({
    q: trimmedQuery,
    page: String(pageNumber),
    limit: String(SEARCH_PAGE_SIZE),
    fields: SEARCH_FIELDS,
  });

  const responseBody = await fetchJson(
    `${OPEN_LIBRARY_BASE_URL}/search.json?${searchParams}`,
    REQUEST_OPTIONS,
  );
  const searchResponse = searchResponseSchema.parse(responseBody);

  return mapSearchResponseToResult(searchResponse, pageNumber, SEARCH_PAGE_SIZE);
}

async function fetchWork(workId: string): Promise<OpenLibraryWork | null> {
  const url = `${OPEN_LIBRARY_BASE_URL}/works/${workId}.json`;
  const response = await fetch(url, REQUEST_OPTIONS);

  if (response.status === 404) return null;

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}: ${url}`);
  }

  return workSchema.parse(await response.json());
}

async function fetchAuthorOrNull(
  authorKey: string,
): Promise<OpenLibraryAuthor | null> {
  try {
    const responseBody = await fetchJson(
      `${OPEN_LIBRARY_BASE_URL}${authorKey}.json`,
      REQUEST_OPTIONS,
    );
    return authorSchema.parse(responseBody);
  } catch {
    return null;
  }
}

export async function getBookDetail(
  workId: string,
): Promise<BookDetail | null> {
  if (!isValidWorkId(workId)) return null;

  const work = await fetchWork(workId);
  if (work === null) return null;

  const authorKeys = (work.authors ?? []).map(({ author }) => author.key);

  const authorsOrNull = await Promise.all(authorKeys.map(fetchAuthorOrNull));
  const authors = authorsOrNull.filter(
    (author): author is OpenLibraryAuthor => author !== null,
  );

  return mapWorkToBookDetail(work, authors);
}
