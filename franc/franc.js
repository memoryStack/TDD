
class Franc {
    #amount
    constructor(value) {
        this.#amount = value
    }

    times(multiplier) {
        return new Franc(this.#amount * multiplier)
    }

    equals(obj) {
        return this.#amount === obj.#amount
    }

}

module.exports = Franc
