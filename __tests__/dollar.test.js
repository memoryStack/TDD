const Dollar = require('../dollar/dollar')

test('multiply dollar', () => {
    const fiveDollar = new Dollar(5)
    let product = fiveDollar.times(2)
    expect(product.amount).toBe(10)
    product = fiveDollar.times(3)
    expect(product.amount).toBe(15)
})
