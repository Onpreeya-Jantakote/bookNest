import { z } from "zod";

const textOrValueObjectSchema = z.union([
  z.string(),
  z.object({ value: z.string() }),
]);

export const searchDocSchema = z.object({
  key: z.string(),
  title: z.string(),
  author_name: z.array(z.string()).optional(),
  first_publish_year: z.number().optional(),
  publisher: z.array(z.string()).optional(),
  cover_i: z.number().optional(),
});

export const searchResponseSchema = z.object({
  numFound: z.number(),
  docs: z.array(searchDocSchema),
});

export const workSchema = z.object({
  key: z.string(),
  title: z.string(),
  description: textOrValueObjectSchema.optional(),
  covers: z.array(z.number()).optional(),
  subjects: z.array(z.string()).optional(),
  first_publish_date: z.string().optional(),
  authors: z
    .array(z.object({ author: z.object({ key: z.string() }) }))
    .optional(),
});

export const authorSchema = z.object({
  key: z.string(),
  name: z.string(),
  bio: textOrValueObjectSchema.optional(),
  birth_date: z.string().optional(),
  death_date: z.string().optional(),
});

export type OpenLibrarySearchDoc = z.infer<typeof searchDocSchema>;
export type OpenLibrarySearchResponse = z.infer<typeof searchResponseSchema>;
export type OpenLibraryWork = z.infer<typeof workSchema>;
export type OpenLibraryAuthor = z.infer<typeof authorSchema>;
export type OpenLibraryTextField = z.infer<typeof textOrValueObjectSchema>;
