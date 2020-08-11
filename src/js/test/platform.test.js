import { platform } from '../platform'

describe('test suite for platform', ()=> {
    test('should x[0], x[n] should be 1, 40', () => {
        const
            p = platform(),
            first_index = 1,
            last_index = 40;
        expect(p[0][0]).toBe(first_index)
        expect(p[p.length-1][0]).toBe(last_index)
    })
})