
class Money {
    constructor(amount, currency) {
        this.amount = amount
        this.currency = currency
    }

    equals(obj) {
        return this.amount === obj.amount
            && this.currency === obj.currency
    }

    times(multiplier) {
        return new Money(this.amount * multiplier, this.currency)
    }

}

module.exports = Money
