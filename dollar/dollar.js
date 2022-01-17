
class Dollar {
    constructor(value) {
        this.amount = value
    }

    times(multiplier) {
        return new Dollar(this.amount * multiplier)
    }
}

module.exports = Dollar
