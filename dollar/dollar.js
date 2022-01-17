
class Dollar {

    constructor(value) {
        this.amount = value
    }

    times(multiplier) {
        this.amount *= multiplier
    }

}

module.exports = Dollar
