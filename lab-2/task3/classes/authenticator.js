class Authenticator {
    constructor() {
        if (Authenticator.instance) {
            return Authenticator.instance;
        }
        Authenticator.instance = this;
    }

    static getInstance() {
        if (!Authenticator.instance) {
            Authenticator.instance = new Authenticator();
        }
        return Authenticator.instance;
    }

    authenticate(username, password) {
        console.log(`Authenticating ${username}...Done!`);
    }
}

module.exports = Authenticator;