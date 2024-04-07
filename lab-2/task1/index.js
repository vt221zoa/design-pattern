const SubscriptionFactory = require('./classes/SubscriptionFactory');
class WebSite {
    purchaseSubscription(type) {
        const factory = new SubscriptionFactory();
        return factory.createSubscription(type);
    }
}
class MobileApp {
    purchaseSubscription(type) {
        const factory = new SubscriptionFactory();
        return factory.createSubscription(type);
    }
}
class ManagerCall {
    purchaseSubscription(type) {
        const factory = new SubscriptionFactory();
        return factory.createSubscription(type);
    }
}
function main() {
    const website = new WebSite();
    const mobileApp = new MobileApp();
    const managerCall = new ManagerCall();

    const domesticSubscription = website.purchaseSubscription('domestic');
    const educationalSubscription = mobileApp.purchaseSubscription('educational');
    const premiumSubscription = managerCall.purchaseSubscription('premium');

    console.log('Domestic Subscription:', domesticSubscription);
    console.log('Educational Subscription:', educationalSubscription);
    console.log('Premium Subscription:', premiumSubscription);
}

main();