/** Add numbers in an array and ignores undefined or null values. */
export function sum(array: Array<number | null | undefined>) {
  return array.reduce((previous, current) => {
    if (!previous) previous = 0;
    return current ? previous + current : previous;
  });
}

/**
 * Returns the last element of any array.
 */
export function lastOf<Type>(array: Array<Type>): Type {
  return array[array.length - 1];
}
