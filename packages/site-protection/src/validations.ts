export function validateSlug(slug: string[]) {
  if (!slug) {
    return true;
  }
  const regex = /^(?:[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\/[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)*\/?$/;
  const pathname = slug.join('/');

  return pathname.length >= 1 && pathname.length <= 255 && regex.test(pathname);
}
