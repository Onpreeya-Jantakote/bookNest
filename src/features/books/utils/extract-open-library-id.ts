export function extractOpenLibraryId(openLibraryKey: string): string {
  return openLibraryKey.split("/").pop() ?? openLibraryKey;
}

export function isValidWorkId(workId: string): boolean {
  return /^OL\d+W$/.test(workId);
}
