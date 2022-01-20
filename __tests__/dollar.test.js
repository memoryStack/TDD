const Dollar = require('../dollar/dollar')
const Franc = require('../franc/franc')
const Money = require('../money/money')

test('multiply money', () => {
    const fiveDollar = new Money(5, "USD")
    expect(fiveDollar.times(2).equals(new Money(10, "USD"))).toBe(true)
    expect(fiveDollar.times(3).equals(new Money(15, "USD"))).toBe(true)
    expect((new Money(5, "CHF")).times(3).equals(new Money(15, "CHF"))).toBe(true)
})

// used "triangulation" analog in this test case for implementing the general
// solution of this requirement. read in chap3 for detailed reference
test('equality check dollar', () => {
    const fiveDollar = new Money(5, "USD")
    expect(fiveDollar.equals(new Money(5, "USD"))).toBe(true)
    expect(fiveDollar.equals(new Money(6, "USD"))).toBe(false)
    expect(fiveDollar.equals(new Money(5, "CHF"))).toBe(false)
    expect((new Money(5, "CHF")).equals(new Money(5, "USD"))).toBe(false)
    expect((new Money(5, "CHF")).equals(new Money(5, "CHF"))).toBe(true)
})
