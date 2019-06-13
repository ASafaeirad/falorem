import { generateSentence } from '../generateSentence';

describe('generateSentence', () => {
  it('should return empty string for with negaive n', () => {
    const result = generateSentence(-10, ['1', '2']);
    expect(result).toEqual('');
  });

  it('should return empty strig for [] array', () => {
    const result = generateSentence(10, []);
    expect(result).toEqual('');
  });

  it('should return sentence by joining n elements of array if n is less than array length', () => {
    const arr = ['1', '2', '3', '4', '5'];
    const n = 3;
    const result = generateSentence(n, arr);
    expect(result).toEqual('1 2 3');
  });

  it('should return sentence by joining all array elements if n is less than array length', () => {
    const arr = ['1', '2', '3', '4', '5', '6'];
    const n = arr.length;
    const result = generateSentence(n, arr);
    expect(result).toEqual(arr.join(' '));
  });

  it('should return repeate sentence if n is bigger than array length', () => {
    const arr = ['1', '2'];
    const n = arr.length * 2 + 1;
    const result = generateSentence(n, arr);
    expect(result).toEqual('1 2 1 2 1');
  });
});
