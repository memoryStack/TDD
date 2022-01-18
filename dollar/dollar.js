const Money = require('../money/money')

class Dollar extends Money {
    constructor(value) {
        super(value)
    }

    times(multiplier) {
        return new Dollar(this.amount * multiplier)
    }

}

module.exports = Dollar
