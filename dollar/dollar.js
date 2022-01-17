
class Dollar {
    constructor(value) {
        this.amount = value
    }

    times(multiplier) {
        return new Dollar(this.amount * multiplier)
    }

    equals(obj) {
        return this.amount === obj.amount
    }

}

module.exports = Dollar
