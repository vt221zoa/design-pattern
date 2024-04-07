const IProneFactory = require('./classes/BrandFactories/IProneFactory');
const KiaomiFactory = require('./classes/BrandFactories/KiaomiFactory');
const BalaxyFactory = require('./classes/BrandFactories/BalaxyFactory');

function main() {
    const iProneFactory = new IProneFactory();
    const kiaomiFactory = new KiaomiFactory();
    const balaxyFactory = new BalaxyFactory();

    const iProneLaptop = iProneFactory.createLaptop("IProne");
    const kiaomiSmartphone = kiaomiFactory.createSmartphone("Kiaomi");
    const iProneSmartphone = iProneFactory.createSmartphone("IProne");
    const balaxySmartphone = balaxyFactory.createSmartphone("Balaxy");
    const balaxyEBook = balaxyFactory.createEBook("Balaxy");
    const balaxyNetbook = balaxyFactory.createNetbook("Balaxy");

    console.log('IProne Laptop:', iProneLaptop);
    console.log('Kiaomi Smartphone:', kiaomiSmartphone);
    console.log('IProne Smartphone:', iProneSmartphone);
    console.log('Balaxy Smartphone:', balaxySmartphone);
    console.log('Balaxy EBook:', balaxyEBook);
    console.log('Balaxy Netbook:', balaxyNetbook);
}

main();