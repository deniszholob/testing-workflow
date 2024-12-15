/** Ex: My wonderful component */
export function toTitleCase(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

/** Ex: My Wonderful Component */
export function toWordCase(input: string): string {
  return input.replace(/\w\S*/g, toTitleCase);
}
