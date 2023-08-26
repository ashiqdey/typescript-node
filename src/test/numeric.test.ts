import {sum, subtract } from '../service/numeric';

test('added two number' , () => {
    expect(sum(1,2)).toBe(3);
    expect(subtract(2,1)).toBe(1);
});
