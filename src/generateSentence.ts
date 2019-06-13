import { getNItemfromArray } from './getNItemFromArray';

export const generateSentence = (n: number, array: string[]) => getNItemfromArray(n, array).join(' ');
