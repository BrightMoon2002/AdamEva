class Apples {
    constructor() {
        this.weight = 10;
        this.status = true;
    }
    getApple() {
        return this.weight;
    }
    decreaseApple() {
        if (this.status) {
            this.weight --;
        }
    }
    isEmpty() {
        if (this.weight === 0) {
            return !this.status;
        }
    }
}

let newApple = new Apples();
