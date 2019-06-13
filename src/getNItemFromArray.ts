export const getNItemfromArray = (n: number, arr: string[]): string[] =>
  (n <= arr.length || arr.length === 0)
    ? arr.slice(0, n)
    : getNItemfromArray(n, [...arr, ...arr]);
