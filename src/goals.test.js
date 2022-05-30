import { sum } from './goals.js'

describe('goals.js', () => {
    test('sum should add 1 + 2 = 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});