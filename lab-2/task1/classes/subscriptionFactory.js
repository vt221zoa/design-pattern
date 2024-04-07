const { DomesticSubscription, EducationalSubscription, PremiumSubscription } = require('./Subscription');
class SubscriptionFactory {
    createSubscription(type) {
        switch (type) {
            case 'domestic':
                return new DomesticSubscription();
            case 'educational':
                return new EducationalSubscription();
            case 'premium':
                return new PremiumSubscription();
            default:
                throw new Error('Invalid subscription type');
        }
    }
}
module.exports = SubscriptionFactory;