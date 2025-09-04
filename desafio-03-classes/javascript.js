class hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;

    switch (this.type) {
        case "mage":
            this.attackType = "magic";
            break;
        case "warrior":
            this.attackType = "sword";
            break;
        case "monk":
            this.attackType = "martial arts";
            break;
        case "ninja":
            this.attackType = "shurikens";
            break;
        default:
            this.attackType = "an unknown attack";
            break;
    }
    
    }
    attack() {
        console.log(`The ${this.type} attacked using ${this.attackType}`);
    }
}

let Dumbledore = new hero("João", 23, "mage")

Dumbledore.attack();