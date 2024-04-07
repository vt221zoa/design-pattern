const { Laptop, Netbook, EBook, Smartphone } = require('./Device');

class DeviceFactory {
    createLaptop(brand) {
        return new Laptop(brand);
    }

    createNetbook(brand) {
        return new Netbook(brand);
    }

    createEBook(brand) {
        return new EBook(brand);
    }

    createSmartphone(brand) {
        return new Smartphone(brand);
    }
}

module.exports = DeviceFactory;