import lorem from '../index';
import { paragraphs, sentences, words } from '../lorem';

describe('api', () => {
  describe('paragraphs', () => {
    it('should return empty string as n = 0', () => {
      const n = 0;
      const result = lorem.paragraphs(n);
      expect(result).toBe('');
    });

    it('should return 1 paragraph', () => {
      const n = 1;
      const result = lorem.paragraphs(n);
      expect(result).toBe(paragraphs[0]);
    });

    it('should return n paragraph', () => {
      const n = 3;
      const result = lorem.paragraphs(n);
      expect(result).toBe(`${paragraphs[0]} ${paragraphs[0]} ${paragraphs[0]}`);
    });
  });

  describe('sentence', () => {
    it('should return empty string as n = 0', () => {
      const n = 0;
      const result = lorem.sentences(n);
      expect(result).toBe('');
    });

    it('should return 1 sentence', () => {
      const n = 1;
      const result = lorem.sentences(n);
      expect(result).toBe(sentences[0]);
    });

    it('should return n sentence', () => {
      const n = 3;
      const result = lorem.sentences(n);
      expect(result).toBe(`${sentences[0]} ${sentences[1]} ${sentences[2]}`);
    });
  });

  describe('words', () => {
    it('should return empty string as n = 0', () => {
      const n = 0;
      const result = lorem.words(n);
      expect(result).toBe('');
    });

    it('should return 1 word', () => {
      const n = 1;
      const result = lorem.words(n);
      expect(result).toBe(words[0]);
    });

    it('should return n words', () => {
      const n = 3;
      const result = lorem.words(n);
      expect(result).toBe(`${words[0]} ${words[1]} ${words[2]}`);
    });
  });
});
