
class Money {
    constructor(value) {
        this.amount = value
    }

    equals(obj) {
        return this.amount === obj.amount
    }

}

module.exports = Money
