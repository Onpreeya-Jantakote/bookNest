export type Book = {
  id: string;
  title: string;
  authorNames: string[];
  firstPublishYear: number | undefined;
  publisherName: string | undefined;
  coverUrl: string | undefined;
};

export type BookSearchResult = {
  books: Book[];
  totalCount: number;
  pageNumber: number;
  totalPages: number;
};

export type BookAuthor = {
  id: string;
  name: string;
  biography: string | undefined;
  birthDate: string | undefined;
  deathDate: string | undefined;
};

export type BookDetail = {
  id: string;
  title: string;
  description: string | undefined;
  coverUrl: string | undefined;
  subjects: string[];
  firstPublishDate: string | undefined;
  authors: BookAuthor[];
};
