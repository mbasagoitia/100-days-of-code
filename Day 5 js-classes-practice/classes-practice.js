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