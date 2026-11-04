export async function fetchJson(
  url: string,
  requestInit?: RequestInit,
): Promise<unknown> {
  const response = await fetch(url, requestInit);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}: ${url}`);
  }

  return response.json();
}
