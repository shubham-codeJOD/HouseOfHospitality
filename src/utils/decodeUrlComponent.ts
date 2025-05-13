// src/utils/decodeUrlComponent.ts

export function decodeUrlComponent(encodedHtml: string): string {
  try {
    // Only decode the URI-encoded HTML string
    return decodeURIComponent(encodedHtml);
  } catch (e) {
    console.error("Error decoding URI:", e);
    return encodedHtml; // Return the original string if decoding fails
  }
}
