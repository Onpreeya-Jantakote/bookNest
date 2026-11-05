import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBookDetail } from "@/features/books/api/books-api";
import { BookDetailView } from "@/features/books/components/book-detail-view";

type BookDetailPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: BookDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const book = await getBookDetail(id);

  if (!book) {
    return { title: "Book Not Found" };
  }

  return {
    title: book.title,
    description: book.description,
  };
}

export default async function BookDetailPage({ params }: BookDetailPageProps) {
  const { id } = await params;
  const book = await getBookDetail(id);

  if (!book) {
    notFound();
  }

  return <BookDetailView book={book} />;
}
