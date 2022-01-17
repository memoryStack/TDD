const Dollar = require('../dollar/dollar')

test('multiply dollar', () => {
    const dollar = new Dollar(5)
    dollar.times(2)
    expect(dollar.amount).toBe(10)
})
