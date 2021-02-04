import { generateSentence } from './generateSentence';
import { paragraphs, sentences, words } from './lorem';

interface LoremApi {
  paragraphs: (n: number) => string;
  sentences: (n: number) => string;
  words: (n: number) => string;
}

const lorem: LoremApi = {
  paragraphs: n => generateSentence(n, paragraphs),
  sentences: n => generateSentence(n, sentences),
  words: n => generateSentence(n, words),
};

export default lorem;
