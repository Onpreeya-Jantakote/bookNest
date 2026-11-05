# Booknest — Discover Your Next Read

A book discovery app built with the [Open Library API](https://openlibrary.org/developers/api). Search books by title or author, browse results with covers and publication info, and open a detail page for each book.

## Tech Stack

- Next.js (App Router) and React
- TypeScript (strict mode)
- Ant Design with a custom theme
- CSS Modules
- Tabler Icons
- Zod for validating external API data
- Native Fetch API

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Script          | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start the dev server     |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint`  | Run ESLint               |

## Project Structure

```
src/
├── app/                  Routing and pages (Server Components)
├── components/
│   ├── common/           Generic UI (EmptyState, ErrorState)
│   └── layout/           Site-wide layout (SiteHeader)
├── features/books/
│   ├── api/              searchBooks(), getBookDetail()
│   ├── schemas/          Zod schemas for Open Library responses
│   ├── mappers/          API data → app types (pure functions)
│   ├── types/            App types (Book, BookDetail, ...)
│   ├── utils/            Small pure helpers
│   └── components/       Book-specific UI
├── lib/                  Shared helpers (fetchJson)
└── styles/               Global CSS and Ant Design theme
```

## Data Flow

```
Open Library API → fetchJson → Zod schema → mapper → Book / BookDetail → React components
```

## Design Decisions

- **Functional first.** Components, mappers, and helpers are plain functions. Classes were considered (repository and service layers) but skipped: there is one data source and no shared state, so they would only add indirection.
- **Server Components by default.** Data is fetched on the server. Only the search bar, pagination, and the error boundary are Client Components.
- **URL as state.** The search query and page number live in the URL (`/?q=tolkien&page=2`), so links are shareable and the Back button works without extra state.
- **Validate external data.** Open Library fields are often missing, so every optional field is modeled explicitly and checked with Zod before use.
- **API types and app types are separate.** Mappers are the only place that knows the Open Library field names.

## Git Workflow

- Branches: `feature/`, `fix/`, `refactor/`, `docs/`, `test/`, `chore/`
- Commits follow [Conventional Commits](https://www.conventionalcommits.org/), for example `feat(books): add book search`
- Changes reach `main` through pull requests
