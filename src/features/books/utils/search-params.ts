type SearchParamValue = string | string[] | undefined;

export function getSingleParam(value: SearchParamValue): string {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export function parsePageNumber(value: SearchParamValue): number {
  const pageNumber = Number(getSingleParam(value));
  return Number.isInteger(pageNumber) && pageNumber >= 1 ? pageNumber : 1;
}

export function buildSearchUrl(query: string, pageNumber = 1): string {
  const searchParams = new URLSearchParams({
    q: query,
    page: String(pageNumber),
  });
  return `/?${searchParams}`;
}
