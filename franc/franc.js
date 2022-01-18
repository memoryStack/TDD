const Money = require("../money/money")

class Franc extends Money {
    constructor(value) {
        super(value)
    }

    times(multiplier) {
        return new Franc(this.amount * multiplier)
    }

}

module.exports = Franc
