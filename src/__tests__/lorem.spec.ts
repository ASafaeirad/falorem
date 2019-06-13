import { paragraphs, sentences, words } from '../lorem';

describe('lorem', () => {
  describe('paragraphs', () => {
    it('should contains لورم', () => {
      expect(paragraphs[0]).toContain('لورم');
    });

    it('should contains طراحی', () => {
      expect(paragraphs[0]).toContain('طراحی');
    });

    it('should contains .', () => {
      expect(paragraphs[0]).toContain('.');
    });

    it('should contains space after any . character', () => {
      expect(paragraphs[0].split('.').every((sentence, i) => i === 0 || sentence[0] === ' ')).toBe(true);
    });
  });

  describe('sentence', () => {
    it('should contains لورم', () => {
      expect(sentences.some((sentence) => sentence.includes('لورم'))).toBe(true);
    });

    it('should contains طراحی', () => {
      expect(sentences.some((sentence) => sentence.includes('طراحی'))).toBe(true);
    });

    it('every sentence should ends with .', () => {
      expect(sentences.every((sentence) => sentence.slice(-1) === '.')).toBe(true);
    });
  });

  describe('words', () => {
    it('should contains لورم', () => {
      expect(words).toContain('لورم');
    });

    it('should contains طراحی', () => {
      expect(words).toContain('طراحی');
    });

    it('shold not contains . char', () => {
      expect(words.every((word) => word !== '.')).toBe(true);
    });

    it('shold not contains space char', () => {
      expect(words.every((word) => word !== ' ')).toBe(true);
    });
  });
});
