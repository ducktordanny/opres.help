/** Add numbers in an array and ignores undefined or null values. */
export function sum(array: Array<number | null | undefined>) {
  return array.reduce((acc, curr) => {
    if (!acc || !curr) return curr;
    return acc + curr;
  });
}
