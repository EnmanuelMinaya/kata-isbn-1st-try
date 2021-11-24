
const { isTenDigits, removeHyphens } = require('./isbn.js');

test('takes 0-7167-0344-0 returns 0716703440', () => {
    expect(removeHyphens("0-7167-0344-0")).toBe('0716703440');
});

test('checks if 0716703440 is a 10 digits isbn', () => {
    expect(isTenDigits("0716703440")).toBe(true);
});

