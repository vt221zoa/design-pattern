class Subscription {
    constructor(monthlyPrice, minSubscriptionPeriod, channels) {
        this.monthlyPrice = monthlyPrice;
        this.minSubscriptionPeriod = minSubscriptionPeriod;
        this.channels = channels;
    }
}
class DomesticSubscription extends Subscription {
    constructor() {
        super(10, 1, ['Channel A', 'Channel B']);
    }
}
class EducationalSubscription extends Subscription {
    constructor() {
        super(15, 3, ['Channel C', 'Channel D']);
    }
}
class PremiumSubscription extends Subscription {
    constructor() {
        super(25, 6, ['Channel A', 'Channel B', 'Channel C', 'Channel D']);
    }
}
module.exports = {
    DomesticSubscription,
    EducationalSubscription,
    PremiumSubscription
};