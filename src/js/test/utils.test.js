import { calculateWidth } from "../utils"

describe('test suite for utils', () => {
  test('should return 10, 20, 30', () => {
    const width= 100, 
          divisions = 10,
          result = [],
          expected = [10, 20, 30]

    expected.forEach((e, i) => result.push(calculateWidth(width, divisions, i)))
    expect(result).toEqual(expected)
  })
})