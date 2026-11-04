export type CoverSize = "S" | "M" | "L";

const COVERS_BASE_URL = "https://covers.openlibrary.org/b/id";

export function buildCoverUrl(coverId: number, size: CoverSize = "M"): string {
  return `${COVERS_BASE_URL}/${coverId}-${size}.jpg`;
}
