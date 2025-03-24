const { NEXT_PUBLIC_SITE_URL = 'https://localhost:3000', NEXT_PUBLIC_APP_ENV = 'dev' } =
  process.env;

// No secure hashing function here, for this case we just use simple hashing.
// Bear in mind that crypto hashing functions are not available in middleware.
export function simpleHash(str: string, length = 16): string {
  let hash = 5381;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash * 33) ^ char;

    // Generate additional hash parts to extend the length
    result += String.fromCharCode((hash >> i % 24) & 0xff);
  }

  // Convert to Base64 and ensure a minimum length
  return btoa(result).substring(0, length);
}

export function getCookieName() {
  return '_' + simpleHash(`protection-${NEXT_PUBLIC_SITE_URL}-${NEXT_PUBLIC_APP_ENV}`, 10);
}
