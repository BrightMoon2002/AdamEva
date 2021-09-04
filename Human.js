class Human {
    constructor(_name, _gender, _weight) {
        this.name = _name;
        this.gender = _gender;
        this.weight = _weight;
    }

    eat(apple) {
        if (apple.weight > 0) {
            this.weight += 1;
            apple.weight--;
        }
    }

    check(apple) {
        if (apple.weight > 0) {
            return apple.weight;
        } else {
            alert("nothing to eat");
        }
    }

    say() {
        if (this.gender) {
            alert("I'm " + this.name + ", " + " Male and " + "weight: " + this.weight);
        } else {
            alert("I'm " + this.name + ", " + " Female and " + "weight: " + this.weight);
        }
    }


    getNam() {
        return this.name;
    }

    getWeight() {
        return this.weight
    }
    setName() {
        if (this.gender) {
            return this.name = "Adam";
        } else {
            return this.name = "Eva";
        }
    }
 }

 let human1 = new Human("Adam", true, 80);
let human2 = new Human("Eva", false, 50);

function eatApple1() {
    human1.check(newApple);
    human1.eat(newApple);
    human1.say();
    human1.getWeight();
}
function eatApple2() {
    human2.check(newApple);
    human2.eat(newApple);
    human2.say();
    human2.getWeight();
}