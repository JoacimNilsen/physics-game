import { platform } from '../platform'

describe('test suite for platform', ()=> {
    test('something', () => {
        const p = platform();
        console.log(p)
    })
})