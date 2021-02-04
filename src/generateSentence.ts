import { getNItemfromArray } from './getNItemFromArray';

// @internal
export const generateSentence = (n: number, array: string[]) =>
  getNItemfromArray(n, array).join(' ');
