const Franc = require('../franc/franc')

it('franc multiply', () => {
    const fiveFranc = new Franc(5)
    expect(fiveFranc.times(2).equals(new Franc(10))).toBe(true)
    expect(fiveFranc.times(3).equals(new Franc(15))).toBe(true)
})