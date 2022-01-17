const Dollar = require('../dollar/dollar')

test('multiply dollar', () => {
    const fiveDollar = new Dollar(5)
    expect(fiveDollar.times(2).equals(new Dollar(10))).toBe(true)
    expect(fiveDollar.times(3).equals(new Dollar(15))).toBe(true)
})

// used "triangulation" analog in this test case for implementing the general
// solution of this requirement. read in chap3 for detailed reference
test('equality check', () => {
    const fiveDollar = new Dollar(5)
    const anotherFiveDollar = new Dollar(5)
    expect(fiveDollar.equals(anotherFiveDollar)).toBe(true)
    const sixDollar = new Dollar(6)
    expect(fiveDollar.equals(sixDollar)).toBe(false)
})
