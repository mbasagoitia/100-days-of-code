class Cat {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    meow () {
        return `${this.name} says "meow"`;
    }
}

let cat1 = new Cat("butter", 18);
let cat2 = new Cat("sprite", 12);

console.log(cat1.meow());

class Fruit {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }
    like () {
        return `I like ${this.type}s a lot`;
    }
}

class Citrus extends Fruit {
    constructor(type, flavor) {
        super(type);
        this.flavor = flavor;
    }
    describeFlavor () {
        return `${this.like()}, they have such a ${this.flavor} flavor.`;
    }
}

let orange = new Citrus("orange", "sweet");
console.log(orange.describeFlavor());

class Instrument {
    constructor(instrument, yearsPlayed) {
        this.instrument = instrument;
        this.yearsPlayed = yearsPlayed;
    }
    plays () {
        return `I have played the ${this.instrument} for ${this.yearsPlayed} years.`
    }
}

const drums = new Instrument("drums", 10);
console.log(drums.plays());

class Family extends Instrument {
    constructor(instrument, yearsPlayed, type) {
        super(instrument, yearsPlayed);
        this.type = type;
    }
    familyPlays () {
        return `${this.plays()} It is a ${this.type} instrument.`;
    }
}

const violin = new Family("violin", 17, "stringed");
console.log(violin.familyPlays());
console.log(violin);

const piano = new Family("piano", 5, "percussion");
console.log(piano.familyPlays());

class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    welcomeMessage () {
        return `Welcome to the site, ${this.name}!`;
    }
}

class loggedInUser extends User {
    constructor(name, age, email) {
        super(name, age, email);
    }
    loginMessage () {
        return `${super.welcomeMessage()} You are currently logged in.`
    }
}

const john = new User("John", 25, "john@john.com");
const mary = new User("Mary", 17, "mary@mary.com");
const james = new loggedInUser("James", 28, "james@james.com");

console.log(mary.welcomeMessage());
console.log(john.welcomeMessage());
console.log(james.loginMessage());