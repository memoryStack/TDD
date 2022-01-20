
class Money {
    constructor(value) {
        this.amount = value
    }

    equals(obj) {
        return this.amount === obj.amount
            && (this.constructor.name === obj.constructor.name)
    }
}

module.exports = Money
