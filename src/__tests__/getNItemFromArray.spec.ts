import { getNItemfromArray } from '../getNItemFromArray';

describe('getNItemFromArray', () => {
  it('should return [] for with negaive n', () => {
    const result = getNItemfromArray(-10, []);
    expect(result).toEqual([]);
  });

  it('should return [] for [] array', () => {
    const result = getNItemfromArray(10, []);
    expect(result).toEqual([]);
  });

  it('should return sub array if n is less than array length', () => {
    const arr = ['1', '2', '3', '4', '5', '6'];
    const n = 3;
    const result = getNItemfromArray(n, arr);
    expect(result).toEqual(arr.slice(0, n));
  });

  it('should return sub same array if n is equal to array length', () => {
    const arr = ['1', '2', '3', '4', '5', '6'];
    const n = arr.length;
    const result = getNItemfromArray(n, arr);
    expect(result).toEqual(arr);
  });

  it('should return repeate array if n is bigger than array length', () => {
    const arr = ['1', '2'];
    const n = arr.length * 2 + 1;
    const result = getNItemfromArray(n, arr);
    expect(result).toEqual([...arr, ...arr, arr[0]]);
  });
});
