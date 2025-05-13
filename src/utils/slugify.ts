import slugify from 'slugify';

export function customSlugify(title: string): string {
  return slugify(title, {
    lower: true,   // Convert to lowercase
    strict: true,  // Remove non-alphanumeric characters (optional)
    replacement: '-', // Replace spaces with hyphens
  });
}
