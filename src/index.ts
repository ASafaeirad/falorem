import { generateSentence } from './generateSentence';
import { paragraphs, sentences, words } from './lorem';

interface ILoremApi {
  paragraphs: (n: number) => string;
  sentences: (n: number) => string;
  words: (n: number) => string;
}

const lorem: ILoremApi = {
  paragraphs: (n) => generateSentence(n, paragraphs),
  sentences: (n) => generateSentence(n, sentences),
  words: (n) => generateSentence(n, words),
};

export default lorem;
