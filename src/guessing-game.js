
class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.mid = Math.ceil((this.min + this.max) / 2);
        this.gues = this.mid;
        return this.gues;
    }

    lower() {
        this.max = this.mid;
    }

    greater() {
        this.min = this.mid;
    }
}
module.exports = GuessingGame;
