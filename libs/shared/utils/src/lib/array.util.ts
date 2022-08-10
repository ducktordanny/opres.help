/** Add numbers in an array and handle undefined or null values. */
export function sum(array: Array<number | null | undefined>) {
  return array.reduce((previous, current) => {
    if (!previous) previous = 0;
    return current ? previous + current : previous;
  });
}
