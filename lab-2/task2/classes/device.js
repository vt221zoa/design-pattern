class Device {
    constructor(brand) {
        this.brand = brand;
    }
}

class Laptop extends Device {
    constructor(brand) {
        super(brand);
        this.type = "Laptop";
    }
}

class Netbook extends Device {
    constructor(brand) {
        super(brand);
        this.type = "Netbook";
    }
}

class EBook extends Device {
    constructor(brand) {
        super(brand);
        this.type = "EBook";
    }
}

class Smartphone extends Device {
    constructor(brand) {
        super(brand);
        this.type = "Smartphone";
    }
}

module.exports = {
    Laptop,
    Netbook,
    EBook,
    Smartphone
};